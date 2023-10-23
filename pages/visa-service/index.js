import React, { useEffect, useState } from 'react'
import { ThemeProvider, Skeleton, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { theme } from '@/styles/theme';
import styles from '@/styles/destinations.module.css';
import Layout from '@/components/layout';
import Link from 'next/link';
import {
  collection,
  getDocs,
} from 'firebase/firestore';
import { db } from '@/config/firebaseConfig';

const useStyles= makeStyles(()=>{
  return {
  gridColor: {
    padding: '20px',
    backgroundColor: 'transparent',
    color: 'black',
    margin: '6px',
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
    boxShadow: '0 0 5px 2px #000',
    border: '1px solid black',
    cursor: 'pointer',
    transition: 'transform .2s',
    '&:hover':{
      transform: 'scale(1.05)',
    }
  },
  centering:{
    textAlign: 'center',
    // maxWidth:'1366px',
    margin: 'auto',
    justifyContent: 'center',
    marginTop: '40px',
    marginBottom: '40px'
  },
  imageWidth:{
    maxWidth:'200px',
    height: '120px',
  }
}});

async function fetchDataFromFireBase() {
  const querySnapshot= await getDocs(collection(db, "visaCountries"));
  const data= [];
  querySnapshot.forEach((doc)=>{
    data.push({id: doc.id, ...doc.data()});
  });
  return data;
}

const visaService = () => {
  const classes= useStyles();
  const [countries, setCountries]= useState([]);
  useEffect(()=>{
    async function fetchData() {
      const data= await fetchDataFromFireBase();
      setCountries(data);
    }
    fetchData();
  },[]);
  
  return (
    <>
        <ThemeProvider theme={theme}>
          <Layout>
            <div className={styles.bannerImg}>
              <img
                src="/assets/banner 2 fastholidays.jpg"
                alt={`all destinations banner`}
              />
            </div>
            <Grid className={classes.centering}  container spacing={2}>
              {countries.map(count=>(
                <Link key={count.id} href={`/visa-service/${count.id}`} passHref>
                  <Grid className={classes.gridColor} item xs={4} sm={2} key={count.id}>
                    <img
                        className={classes.imageWidth}
                        src={count.img}
                        alt={`all destinations banner`}
                      />
                      <br/>
                    {count.name}
                  </Grid>
                </Link>
              ))}
            </Grid>

          </Layout>
        </ThemeProvider>
    </>
  )
}

export default visaService