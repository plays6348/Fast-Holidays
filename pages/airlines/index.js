import React, { useState, useEffect } from 'react';
import styles from '@/styles/airlines.module.css';
import Layout from '@/components/layout';
import AirlineCard from '@/components/common/airlineCard';

import {
  collection,
  query,
  getDocs,
  doc,
  limit,
  orderBy,
  startAfter,
} from 'firebase/firestore';
import { db } from '@/config/firebaseConfig';
import { ThemeProvider, Skeleton } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { theme } from '@/styles/theme';
import RandomFooter from '@/components/common/randomFooter';
import Searchbar from '../../components/searchEngine/index';
import { seoForAirlines } from 'utils/seo';
import Typography from '@mui/material/Typography';
import { appName } from 'utils/constants';

export default function Airlines() {
  const [airlines, setAirlines] = useState([]);
  const [skip, setSkip] = useState(5);
  let [lastDocu, setLastDocu] = useState();
  const [fetching, setFetching] = useState();
  const [blockApi, setBlockApi] = useState(false);

  const getAllAirlines = async () => {
    if (!blockApi) {
      setFetching(true);
      if (airlines.length == 0) {
        const arrOfData = [];
        const q = query(
          collection(db, 'airlines'),
          orderBy('name', 'desc'),
          limit(20),
        );
        const querySnapshot = await getDocs(q);
        setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
        querySnapshot.forEach((doc) => {
          arrOfData.push({ ...doc.data(), _id: doc.id });
        });
        if (arrOfData.length < 10) {
          setBlockApi(true);
        }
        setAirlines(arrOfData);
        // console.log("if");
      } else if (airlines.length > 0) {
        const arrOfData = [];
        const q = query(
          collection(db, 'airlines'),
          orderBy('name', 'desc'),
          startAfter(lastDocu),
          limit(20),
        );
        const querySnapshot = await getDocs(q);
        setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
        querySnapshot.forEach((doc) => {
          arrOfData.push({ ...doc.data(), _id: doc.id });
        });
        setAirlines([...airlines, ...arrOfData]);
        // console.log(arrOfData);
        // console.log("else");
        if (arrOfData.length < 10) {
          setBlockApi(true);
        }
      }
      setFetching(false);
    }
  };

  console.log(airlines);

  useEffect(() => {
    getAllAirlines();
  }, []);

  useEffect(() => {
    getAllAirlines();
  }, [skip]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout
          title={seoForAirlines.title}
          keywords={seoForAirlines.keywords}
          description={seoForAirlines.description}
          canonical={seoForAirlines.canonical}
          ogLocale={seoForAirlines.ogLocale}
          ogType={seoForAirlines.ogType}
          ogTitle={seoForAirlines.ogTitle}
          ogDescription={seoForAirlines.ogDescription}
          ogUrl={seoForAirlines.ogUrl}
          ogSiteName={seoForAirlines.ogSite_name}
          twitterCard={seoForAirlines.twitterCard}
          twitterLabel1={seoForAirlines.twitterLabel1}
          twitterDescription={seoForAirlines.twitterDescription}
          twitterSite={seoForAirlines.twitterSite}
          twitterCreator={seoForAirlines.twitterCreator}
        >
          <div className={styles.airlinesContainer}>
            <div style={{ marginTop: '2rem' }}>
              <Searchbar />
            </div>
            <div className={styles.homePage__txt}>
          <div className={styles.aboutUs}>
            <h2>Leading Airlines - Your Gateway to the World</h2>
            <h3>Introduction:</h3>
            <Typography>
              {`At ${appName}, we partner with renowned airlines that percentage our dedication to excellent air tours. We apprehend that the adventure is as essential because the destination and our accomplice airlines offer unprecedented service, ensuring you fly with comfort and convenience.`}
            </Typography>
            <h2>Our Partner Airlines</h2>
            <h3>British Airways:</h3>
            <Typography>
              {`Experience first-rate British hospitality and explore a good-sized network of locations with this reliance on the airline.`}
            </Typography>
            <h3>Emirates:</h3>
            <Typography>
              {`Discover the world with award-prevailing carriers, luxurious facilities, and modern aircraft.`}
            </Typography>
            <h3>Qatar Airways:</h3>
            <Typography>
              {`Fly with one of the global's maximum awarded airways, acknowledged for its impeccable carrier and current fleet.`}
            </Typography>
            <h3>Singapore Airlines:</h3>
            <Typography>
              {`Indulge in top-class consolation and famous hospitality for your journey with this acclaimed provider.`}
            </Typography>
          </div>
        </div>
            <div className={styles.airlinesHeader}>
              <h1>Airlines</h1>
            </div>
            <div className={styles.airlines}>
              {airlines.length > 0 ? (
                <>
                  {airlines.map((airline, i) => (
                    <div key={i} className={styles.airlineCardContainer}>
                      <AirlineCard data={airline} />
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {Array(20)
                    .fill(true)
                    .map((item, i) => (
                      <div className={styles.airlineSkeleton} key={i}>
                        <Skeleton
                          variant="rectangular"
                          width={150}
                          height={80}
                        />
                      </div>
                    ))}
                </>
              )}
            </div>
            {airlines && (
              <LoadingButton
                sx={{ margin: '2rem' }}
                loading={fetching}
                disabled={blockApi}
                onClick={() => setSkip(skip + 20)}
                variant="contained"
              >
                {fetching ? 'Load More' : 'More'}
              </LoadingButton>
            )}
          </div>
          <RandomFooter />
        </Layout>
      </ThemeProvider>
    </>
  );
}
