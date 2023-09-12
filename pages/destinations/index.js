import React, { useState, useEffect } from 'react';
import styles from '@/styles/destinations.module.css';
import Layout from '@/components/layout';
import DestCard from '@/components/common/destCard';
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
import Searchbar from '@/components/searchEngine';
import { seoForDestinations } from 'utils/seo';
import Typography from '@mui/material/Typography';
import { appName } from 'utils/constants';

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [skip, setSkip] = useState(5);
  let [lastDocu, setLastDocu] = useState();
  const [fetching, setFetching] = useState();
  const [blockApi, setBlockApi] = useState(false);

  const getAllDestinations = async () => {
    if (!blockApi) {
      setFetching(true);
      if (destinations.length == 0) {
        const arrOfData = [];
        const q = query(
          collection(db, 'destinations'),
          orderBy('name', 'desc'),
          limit(9),
        );
        const querySnapshot = await getDocs(q);
        setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
        querySnapshot.forEach((doc) => {
          arrOfData.push({ ...doc.data(), _id: doc.id });
        });
        if (arrOfData.length < 9) {
          setBlockApi(true);
        }
        setDestinations(arrOfData);
        console.log('if');
      } else if (destinations.length > 0) {
        const arrOfData = [];
        let lastVisible = destinations[destinations.length - 1];
        console.log('last', lastVisible);
        const q = query(
          collection(db, 'destinations'),
          orderBy('name', 'desc'),
          startAfter(lastDocu),
          limit(9),
        );
        const querySnapshot = await getDocs(q);
        setLastDocu(querySnapshot.docs[querySnapshot.docs.length - 1]);
        querySnapshot.forEach((doc) => {
          arrOfData.push({ ...doc.data(), _id: doc.id });
        });
        setDestinations([...destinations, ...arrOfData]);
        // console.log(arrOfData);
        // console.log("else");
        if (arrOfData.length < 9) {
          setBlockApi(true);
        }
      }
      setFetching(false);
    }
  };

  useEffect(() => {
    getAllDestinations();
  }, []);

  useEffect(() => {
    getAllDestinations();
  }, [skip]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout
          title={seoForDestinations.title}
          keywords={seoForDestinations.keywords}
          description={seoForDestinations.description}
          canonical={seoForDestinations.canonical}
          ogLocale={seoForDestinations.ogLocale}
          ogType={seoForDestinations.ogType}
          ogTitle={seoForDestinations.ogTitle}
          ogDescription={seoForDestinations.ogDescription}
          ogUrl={seoForDestinations.ogUrl}
          ogSiteName={seoForDestinations.ogSite_name}
          twitterCard={seoForDestinations.twitterCard}
          twitterLabel1={seoForDestinations.twitterLabel1}
          twitterDescription={seoForDestinations.twitterDescription}
          twitterSite={seoForDestinations.twitterSite}
          twitterCreator={seoForDestinations.twitterCreator}
        >
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
              {destinations.length > 0 ? (
                <>
                  {destinations.map((destination, i) => (
                    <div key={i} className={styles.destPage__destinations}>
                      <DestCard dest={destination} />
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                    <div key={item}>
                      <div className={styles.destSkeleton}>
                        <Skeleton
                          variant="rectangular"
                          width={260}
                          height={280}
                        />
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
            {destinations && (
              <LoadingButton
                sx={{ margin: '2rem' }}
                loading={fetching}
                disabled={blockApi}
                onClick={() => setSkip(skip + 10)}
                variant="contained"
              >
                {!blockApi ? 'Load More' : 'No More'}
              </LoadingButton>
            )}
          </div>
          <RandomFooter />
        </Layout>
      </ThemeProvider>
    </>
  );
}
