import React, { useEffect, useState } from 'react'
import { ThemeProvider, Skeleton, Grid } from '@mui/material';
import { theme } from '@/styles/theme';
import styles from '@/styles/destinations.module.css';
import Layout from '@/components/layout';
import Link from 'next/link';
import {
  collection,
  getDocs,
} from 'firebase/firestore';
import { db } from '@/config/firebaseConfig';

const muiStyles = {
  gridColor: {
    padding: '20px',
    backgroundColor: '#CEEAE6',
    color: 'black',
    margin: '6px',
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'transform .2s',
    '&:hover':{
      transform: 'scale(1.05)',
    }
  },
  centering:{
    margin: 'auto',
    justifyContent: 'center',
    marginTop: '40px',
    marginBottom: '40px'
  },
  imageWidth:{
    width: '40px',
    height: '30px',
    borderRadius: '50%'
  }
};

async function fetchDataFromFireBase() {
  const querySnapshot= await getDocs(collection(db, "visaCountries"));
  const data= [];
  querySnapshot.forEach((doc)=>{
    data.push({id: doc.id, ...doc.data()});
  });
  return data;
}

const visaService = () => {

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
            <Grid sx={muiStyles.centering} container spacing={1}>
              {countries.map(count=>(
                <Link key={count.id} href={`/visa-service/${count.id}`} passHref>
                  <Grid sx={muiStyles.gridColor} item xs={4} sm={2} key={count.id}>
                    <img
                        sx={muiStyles.imageWidth}
                        width={200}
                        src={count.img}
                        alt={`all destinations banner`}
                      />
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