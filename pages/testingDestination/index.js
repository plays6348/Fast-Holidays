import React, { useState, useEffect } from 'react';
import styles from '@/styles/destinations.module.css';
import Layout from '@/components/layout';
import DestCard from '@/components/common/destCard';
import { ThemeProvider, Skeleton } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { theme } from '@/styles/theme';
import RandomFooter from '@/components/common/randomFooter';
import Searchbar from '@/components/searchEngine';
import Typography from '@mui/material/Typography';
import { appName } from 'utils/constants';

export default function TestingDestinations() {

  const [countries, setCountries]= useState([]);

    const getData= ()=>{
       fetch('destinations.json',{headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }}).then((res)=>{
            return res.json()
        }).then((count)=>{
            setCountries(count)
        })
    }

    useEffect(()=>{
        getData();
    },[])
    
    const dataPerRow= 9;
    const [next,setNext]= useState(dataPerRow)

    const handleMoreCountries = () => {
      setNext(next + dataPerRow);
    };

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
          <div className={styles.destinationsContainer}>
            <div style={{ marginTop: '2rem' }}>
              <Searchbar />
            </div>
            <div className={styles.homePage__txt}>
          <div className={styles.aboutUs}>
            <h2>International Destinations - Best Places To Visit World:</h2>
            <h3>Introduction:</h3>
            <Typography>
              {`Welcome to ${appName}, your ultimate manual to the most captivating International Destinations and the Best Places to go to around the sector. If you're an avid visitor looking for unparalleled adventures, cultural immersions, and breathtaking reports, you've got to come to the proper area.`}
            </Typography>
            <br></br>
            <Typography>
              {`Our carefully curated series of International Destinations will depart you mesmerized and stimulated. Whether you crave the appeal of historic records, the charm of modern-day metropolises, or the serenity of herbal wonders, we have compiled a brilliant array of locations with the purpose to fulfill your wanderlust goals.`}
            </Typography>
            <br></br>
            <Typography>
              {`Join us in this great expedition, as we uncover the wonders of International Destinations and the Best Places to Visit worldwide. Let ${appName} be your gateway to an international of infinite exploration and unforgettable reminiscences. Start planning your dream ride these days!`}
            </Typography>
            <h3>List of Destinations:</h3>
            <Typography>
              {`Travel has a unique capacity to enrich our lives, increase our perspectives, and create memories that close a lifetime. At ${appName}, we are pushed by way of the choice to introduce you to the world's maximum charming locations. Our cautiously curated selection of worldwide gemstones promises a tapestry of reviews, from thrilling adventures to serene getaways and everything in between.`}
            </Typography>
          </div>
        </div>
            <div className={styles.destsHeader}>
              <h1>Destinations</h1>
            </div>
            <div className={styles.destinations}>
              {countries?.slice(0, next)?.map((data, i) => {
                return (
                    <div key={i} className={styles.destPage__destinations}>
                      <DestCard dest={data} />
                    </div>
                );
              })}
               
            </div>
            {next < countries?.length && (
              <LoadingButton
                className="mt-4"
                sx={{ margin: '2rem' }}
                onClick={handleMoreCountries}
                variant="contained"
              >
                Load more
              </LoadingButton>
            )}
            {/* {destinations && (
              <LoadingButton
                sx={{ margin: '2rem' }}
                loading={fetching}
                disabled={blockApi}
                onClick={() => setSkip(skip + 10)}
                variant="contained"
              >
                {!blockApi ? 'Load More' : 'No More'}
              </LoadingButton>
            )} */}
          </div>
          <RandomFooter />
        </Layout>
      </ThemeProvider>
    </>
  );
}
