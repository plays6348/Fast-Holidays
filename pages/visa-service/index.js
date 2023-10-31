import React, { useEffect, useState } from 'react'
import { ThemeProvider, Skeleton, Grid } from '@mui/material';
import { theme } from '@/styles/theme';
import styles from '@/styles/destinations.module.css';
import visaStyles from '@/styles/components/visa.module.css';
import Layout from '@/components/layout';
import {
  collection,
  getDocs,
} from 'firebase/firestore';
import { db } from '@/config/firebaseConfig';
import VisaModal from '@/components/VisaCompCard/VisaModal';

async function fetchDataFromFireBase() {
  const querySnapshot= await getDocs(collection(db, "visaCountries"));
  const data= [];
  querySnapshot.forEach((doc)=>{
    data.push({id: doc.id, ...doc.data()});
  });
  return data;
}

const VisaService = () => {  
  const [country, setCountry]= useState();
  const [countries, setCountries]= useState([]);
  useEffect(()=>{
    async function fetchData() {
      const data= await fetchDataFromFireBase();
      setCountries(data);
    }
    fetchData();
  },[]);

  const handleNameImg= (obj)=>{
    setCountry(obj);
  }

  const [openPopup, setOpenPopup] = useState(false);
  
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
            <div>
              <h2 className={visaStyles.visaheading}>Apply Your Schengen Visa</h2>
            </div>
           <div className={visaStyles.airlinesContainer}>
              <div className={visaStyles.airlines}>
              {countries.map(count=>(
                  <div className={visaStyles.airlineLogoContainer} key={count.id} onClick={()=>{handleNameImg(count), setOpenPopup(true)}} >
                    <img
                        className={visaStyles.airlineLogo}
                        src={count.img}
                        alt={`all destinations banner`}
                      />
                      <span className={visaStyles.applyNowButton}>Apply Now</span>
                      {count.name}
                  </div>
              ))}
               <VisaModal countryName={country?.name} imgTest={country?.img} openPopup={openPopup} setOpenPopup={setOpenPopup}/>
              </div>
            </div>
          </Layout>
        </ThemeProvider>
    </>
  )
}

export default VisaService