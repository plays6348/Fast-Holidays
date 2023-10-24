import React, { useEffect, useState } from 'react'
import { ThemeProvider, Skeleton, Grid } from '@mui/material';
import { theme } from '@/styles/theme';
import styles from '@/styles/destinations.module.css';
import visaStyles from '@/styles/components/visa.module.css';
import Layout from '@/components/layout';
import Link from 'next/link';
import {
  collection,
  getDocs,
} from 'firebase/firestore';
import { db } from '@/config/firebaseConfig';

async function fetchDataFromFireBase() {
  const querySnapshot= await getDocs(collection(db, "visaCountries"));
  const data= [];
  querySnapshot.forEach((doc)=>{
    data.push({id: doc.id, ...doc.data()});
  });
  return data;
}

const VisaService = () => {
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
           <div className={visaStyles.airlinesContainer}>
              <div className={visaStyles.airlines}>
                {countries.map(count=>(
                  <Link key={count.id} href={`/visa-service/${count.id}`} passHref>
                    <div className={visaStyles.airlineLogoContainer}>
                      <img
                          className={visaStyles.airlineLogo}
                          src={count.img}
                          alt={`all destinations banner`}
                        />
                      {count.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Layout>
        </ThemeProvider>
    </>
  )
}

export default VisaService