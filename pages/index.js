import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/home.module.css';
import Layout from '@/components/layout';
import DestCard from '@/components/common/destCard';
import { data } from '../utils/searchJson';

import {
  TextField,
  Button,
  ThemeProvider,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Autocomplete,
  Skeleton,
} from '@mui/material';
import { theme } from '../styles/theme';
import AirlineCard from '@/components/common/airlineCard';
import { convertString } from '../utils/helpers';
import FareCard from '@/components/common/fareCard';
import {
  collection,
  query,
  getDocs,
  limit,
  orderBy,
  where,
} from 'firebase/firestore';
import { db } from '@/config/firebaseConfig';
import { appName } from '../utils/constants';
import Searchbar from '@/components/searchEngine';
import { seoForHome } from 'utils/seo';

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 80,
    },
  },
};

export default function Home() {
  // const [data, setData] = useState([]);
  const [dests, setDests] = useState(null);
  const [topAirlines, setTopAirlines] = useState(null);
  const [type, setType] = useState('business');
  const [selectedDept, setSelectedDept] = useState(' ');
  const [selectedDest, setSelectedDest] = useState(' ');
  const [route, setRoute] = useState();
  const [topFares, setTopFares] = useState(null);

  const getDests = async () => {
    const arrOfData = [];
    const q = query(
      collection(db, 'destinations'),
      orderBy('name', 'desc'),
      limit(6),
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      arrOfData.push({ ...doc.data(), _id: doc.id });
    });
    setDests(arrOfData);
  };

  const getFaresFromUK = async () => {
    const arrOfData = [];

    const q = query(
      collection(db, 'fares'),
      where('deptCountry.name', '==', 'united-kingdom'),
      limit(6),
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      arrOfData.push({ ...doc.data(), _id: doc.id });
    });
    // console.log(arrOfData);
    setTopFares(arrOfData);
  };

  const getTopAirlines = async () => {
    const arrOfData = [];
    const q = query(collection(db, 'airlines'), limit(15));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      arrOfData.push({ ...doc.data(), _id: doc.id });
    });
    // console.log(arrOfData);
    setTopAirlines(arrOfData);
  };

  const handleChange = (type, value) => {
    if (type == 'dep') {
      setSelectedDept(value);
    } else if (type == 'dest') {
      setSelectedDest(value);
    }
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  function generateLink(dept, dest) {
    let deptCode = '';
    let destCode = '';

    if (dept.length > 3 && dest.length > 3) {
      const _dept = dept.split('-')[1].trim().split('');
      deptCode = [_dept[1], _dept[2], _dept[3]].join('');

      const _dest = dest.split('-')[1].trim().split('');
      destCode = [_dest[1], _dest[2], _dest[3]].join('');

      setRoute(`/fares?dept=${deptCode}&dest=${destCode}`);
      return;
    } else if (dept.length > 3) {
      const _dept = dept.split('-')[1].trim().split('');
      deptCode = [_dept[1], _dept[2], _dept[3]].join('');

      setRoute(`/fares?dept=${deptCode}&dest=all`);
    } else if (dest.length > 3) {
      const _dest = dest.split('-')[1].trim().split('');
      destCode = [_dest[1], _dest[2], _dest[3]].join('');

      setRoute(`/fares?dept=all&dest=${destCode}`);
    }

    // console.log(deptCode);
    // console.log(destCode);
  }

  const handleSearch = () => {
    setTopAirlines(true);
  };

  useEffect(() => {
    generateLink(selectedDept, selectedDest);
  }, [selectedDest, selectedDept]);

  useEffect(() => {
    getDests();
    getTopAirlines();
    getFaresFromUK();
  }, []);

  // console.log(data);
  // console.log(destinations);
  // console.log(selectedDest, selectedDept);
  // console.log(route);
  // flight, hotel, hotel+flight

  return (
    <ThemeProvider theme={theme}>
      <Layout
        title={seoForHome.title}
        keywords={seoForHome.keywords}
        description={seoForHome.description}
        canonical={seoForHome.canonical}
        ogLocale={seoForHome.ogLocale}
        ogType={seoForHome.ogType}
        ogTitle={seoForHome.ogTitle}
        ogDescription={seoForHome.ogDescription}
        ogUrl={seoForHome.ogUrl}
        ogSiteName={seoForHome.ogSite_name}
        twitterCard={seoForHome.twitterCard}
        twitterLabel1={seoForHome.twitterLabel1}
        twitterDescription={seoForHome.twitterDescription}
        twitterSite={seoForHome.twitterSite}
        twitterCreator={seoForHome.twitterCreator}
      >
        <div className={styles.banner}>
        <div className={styles.banner__text}>
            <img src="./atol.png" alt="atol" style={{width: '5rem'}} />
            <img src="./iata.png" alt="atol" style={{width: '5rem'}} />
          </div>
          <Searchbar />
        </div>
        <div className={styles.popularDestContainer}>
          <div className={styles.destsHeader}>
            <h1>Top Destinations</h1>
          </div>
          <div className={styles.popular_dests}>
            {dests ? (
              <>
                {dests.map((dest, i) => (
                  <div key={i}>
                    <DestCard dest={dest} />
                  </div>
                ))}
              </>
            ) : (
              <div className={styles.skeletonSlider}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
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
              </div>
            )}
          </div>
          <div className={styles.destMore}>
            <Link href="/destinations">
              <Button variant="contained">More</Button>
            </Link>
          </div>
        </div>
        <div className={styles.topFaresContainer}>
          <div className={styles.destsHeader}>
            <h1>Top Fares</h1>
          </div>
          <div className={styles.top_fares}>
            {topFares ? (
              <div className={styles.topFares}>
                {topFares.map((fare, i) => (
                  <FareCard data={fare} key={i} />
                ))}
              </div>
            ) : (
              <div className={styles.fareSkeletonContainer}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item}>
                    <div className={styles.fareSkeletonForPC}>
                      <Skeleton
                        variant="rectangular"
                        width={560}
                        height={215}
                      />
                    </div>
                    <div className={styles.fareSkeletonForPhone}>
                      <Skeleton
                        variant="rectangular"
                        width={280}
                        height={480}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className={styles.topAirlinesContainer}>
          <div className={styles.destsHeader}>
            <h1>Top Airlines</h1>
          </div>
          <div className={styles.topAirlines}>
            {topAirlines ? (
              <>
                {topAirlines.map((airline, i) => (
                  <div className={styles.airlineCardContainer} key={i}>
                    <AirlineCard data={airline} />
                  </div>
                ))}
              </>
            ) : (
              <>
                {Array(15)
                  .fill(true)
                  .map((item, i) => (
                    <div className={styles.airlineSkeleton} key={i}>
                      <Skeleton variant="rectangular" width={150} height={80} />
                    </div>
                  ))}
              </>
            )}
          </div>
          <div className={styles.destMore}>
            <Link href="/airlines">
              <Button variant="contained">More</Button>
            </Link>
          </div>
        </div>
        <div className={styles.homePage__txt}>
          <div className={styles.aboutUs}>
            <h2>Welcome to {appName} - Your Premier Holiday Travel Agency in the UK!</h2>
            <h3>Introduction:</h3>
            <Typography>
              {`Are you looking for a reliable Holiday travel agency to help you plan your next vacation? Look no further than ${appName}, the UK’s leading holiday travel agency. Passionate about adventure and a commitment to excellence, we pride ourselves on creating unforgettable trips that fulfill your wanderlust.`}
            </Typography>
          </div>
          <div className={styles.aboutUs}>
            <h3>Why Choose Us:</h3>
            <Typography>
              {`As UK Leading Holiday Travel Agency, we stand proud of the group for several motives:`}
            </Typography>
          </div>
          <div className={styles.aboutUs}>
            <h3>Expertise:</h3>
            <Typography>
              {`With years of experience in the travel industry, our group of seasoned professionals understands the nuances of making your dream holiday.`}
            </Typography>
          </div>
          <div className={styles.aboutUs}>
            <h3>Personalized Service:</h3>
            <Typography>
              {`We trust every traveler is specific, and our committed journey specialists make an effort to apprehend your preferences, ensuring a tailored itinerary that perfectly fits your desires.`}
            </Typography>
          </div>
          <div className={styles.aboutUs}>
            <h3>International Destinations:</h3>
            <Typography>
              {`Explore the sector with ${appName}! From the pristine beaches of Bali to the cultural wonders of Paris, we offer a wide selection of international destinations to quench your thirst for a journey.`}
            </Typography>
          </div>
          <div className={styles.aboutUs}>
            <h3>Business Class Flights:</h3>
            <Typography>
              {`Elevate your adventure with our unique Business Class flight alternatives, in which you may revel in luxury, consolation, and comfort whilst soaring to your chosen vacation spot.`}
            </Typography>
          </div>
          <div className={styles.aboutUs}>
            <h3>Unbeatable Deals:</h3>
            <Typography>
              {`We agree with offering a price without compromise. Our excursion applications and flight options offer aggressive charges, permitting you to embark on your dream excursion without breaking the financial institution.`}
            </Typography>
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
}
