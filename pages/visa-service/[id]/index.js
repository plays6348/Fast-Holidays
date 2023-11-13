import React, { useEffect, useState } from 'react'
import { Grid, ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { theme } from '@/styles/theme';
import styles from '@/styles/destinations.module.css';
import Layout from '@/components/layout';
import { collection, doc, getDoc, getDocs, where, query } from 'firebase/firestore';
import { db } from '@/config/firebaseConfig';
import VisaForm from '@/components/VisaCountryComp/VisaForm';
import { useRouter } from 'next/router';

const useStyles= makeStyles(()=>{
  return {
    divCenter:{
      maxWidth: '1366px',
      margin: 'auto',
      justifyContent: 'center',
      marginTop: '2rem',
      marginBottom: '3rem',
      height: 'min-content'
    },
    gridPad:{
      padding: '12px',
      backgroundColor: '#CEEAE6',
      borderRadius: '12px'
    },
    gridPadMin:{
      boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 12px;',
      padding: '12px',
      backgroundColor: '#CEEAE6',
      borderRadius: '12px'
    },
    imgWidth:{
      width: '430px',
      height: '200px',
      [theme.breakpoints.down("md")]: {
        width: '270px',
        justifyContent: "center",
      },
    },
    gridCenter:{
      margin: 'auto',
      justifyContent: 'center',
    }
  }
})

const CountryVisaDetails = () => {

  const router= useRouter();
  const {id}= router.query

  const [blockApi, setBlockApi]= useState(false);
  const [fetching, setFetching] = useState();
  
  const getData= async()=>{
    if (!blockApi) {
      setFetching(true);
      const countryID= id;
      const docRef= doc(db,'visaCountries', countryID);
      const docSnap= await getDoc(docRef);
      const countryDetails= JSON.stringify(docSnap.data());
      setFetching(false)
    }
  }
  useEffect(()=>{
    getData()
  },[])

  // const country= JSON.parse(countryProps)
  const classes= useStyles();

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
          <div style={{
            maxWidth: '1366px',
            margin: 'auto',
            justifyContent: 'center',
            marginTop: '2rem',
            marginBottom: '3rem',
            height: 'min-content'
          }}>
            <Grid container gap={3} className={classes.gridCenter}>
              <Grid item xs={10} sm={8} md={4} gap={4} sx={{
                boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 12px;',
                padding: '12px',
                backgroundColor: '#CEEAE6',
                borderRadius: '12px'
              }}>
                <Grid item xs={12} sm={10} md={8} >
                  {/* <img style={{
                    width: '430px',
                    height: '200px',
                    [theme.breakpoints.down("md")]: {
                      width: '270px',
                      justifyContent: "center",
                    },
                  }} src={country.img}/> */}
                </Grid>
                <Grid item xs={12} sm={10} md={8} >
                  {/* <h2>{country.name}</h2> */}
                  <p className={classes.imgWidth}> 
                    A Schengen Visa is a Travel Document which can access 26 European Countries. 
                    It Offers Benefits such as seamless Travel, Shorter Processing times, 
                    cost-effective, extended stays, and Versatility for tourism. 
                    {/* not popup: [To obtain the Schengen Visa, 
                    you need to select your main destination, Complete the 
                    Application process, Deposit the fee, Wait for the Processing of 
                    your Schengen Visa, and upon your Arrival, your Schengen visa will be attached 
                    to your Passport. The Requirement for your Schengen visa documents varies from 
                    destination to destination. Schengen visa will open your doors to all the 26 Countries 
                    in Europe with Ease and Comfort.] */}
                  </p>
                </Grid>
              </Grid>
              <Grid item xs={10} sm={8} md={6} sx={{
                padding: '12px',
                backgroundColor: '#CEEAE6',
                borderRadius: '12px'
              }}>
              <h2 style={{textAlign: 'center', marginTop: '-4px'}}>Inquire Us</h2>
                <VisaForm countryName={'test'}/>
              </Grid>
            </Grid>
          </div>
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default CountryVisaDetails

// export const getServerSideProps = async (context) => {
    // const id= context.params.id;
    // const docRef= doc(db,'visaCountries', id);
    // const docSnap= await getDoc(docRef);

//   return {
//     props: { countryProps: JSON.stringify(docSnap.data()) || null},
//   }
// }