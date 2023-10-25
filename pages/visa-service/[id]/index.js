import React from 'react'
import { Grid, ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { theme } from '@/styles/theme';
import styles from '@/styles/destinations.module.css';
import Layout from '@/components/layout';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '@/config/firebaseConfig';
import VisaForm from '@/components/VisaCountryComp/VisaForm';

const useStyles= makeStyles(()=>{
  return {
    divCenter:{
      maxWidth: '1366px',
      margin: 'auto',
      justifyContent: 'center',
      marginTop: '2rem',
      marginBottom: '3rem',
      height: 'min-content',
    },
    gridPad:{
      borderRadius: '5px',
      boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      padding: '12px',
      backgroundColor: 'transparent',
      borderRadius: '12px'
    },
    gridPadMin:{
      borderRadius: '5px',
      boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      // height: "max-content",
      // display: 'block',
      // overflow: 'auto',
      padding: '12px',
      backgroundColor: 'transparent',
      borderRadius: '12px'
    },
    imgWidth:{
      width: '100%',
      height: '200px',
    },
    
    gridCenter:{
      margin: 'auto',
      justifyContent: 'center',
    }
  }
})

const CountryVisaDetails = ({countryProps}) => {
  const country= JSON.parse(countryProps)
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
          <div className={classes.divCenter}>
            <Grid container gap={3} className={classes.gridCenter}>
              <Grid item xs={10} sm={8} md={3} gap={4} className={classes.gridPadMin}>
                <Grid item md={12} >
                  <img alt='images' className={classes.imgWidth} src={country.img}/>
                </Grid>
                <Grid md={12} >
                  <h2>{country.name}</h2>
                  <p>
                    A Schengen Visa is a Travel Document which can access 26 European Countries. 
                    It Offers Benefits such as seamless Travel, Shorter Processing times, 
                    cost-effective, extended stays, and Versatility for tourism. To obtain the Schengen Visa, 
                    you need to select your main destination, Complete the 
                    Application process, Deposit the fee, Wait for the Processing of 
                    your Schengen Visa, and upon your Arrival, your Schengen visa will be attached 
                    to your Passport. The Requirement for your Schengen visa documents varies from 
                    destination to destination. Schengen visa will open your doors to all the 26 Countries 
                    in Europe with Ease and Comfort.
                  </p>
                </Grid>
              </Grid>
              <Grid item xs={10} sm={8} md={6} className={classes.gridPad}>
              <h2 style={{textAlign: 'center', marginTop: '-4px'}}>Inquire Us</h2>
                <VisaForm countryName={country.name}/>
              </Grid>
            </Grid>
          </div>
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default CountryVisaDetails

export const getStaticPaths= async (id) => {
  const snapshot= await getDocs(collection(db, 'visaCountries'));
  const paths= snapshot.docs.map(doc=>{
    return{
      params: { id: doc.id.toString()}
    }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps= async (context) => {
  const id= context.params.id;
  const docRef= doc(db,'visaCountries', id);
  const docSnap= await getDoc(docRef);
  return {
    props: { countryProps: JSON.stringify(docSnap.data()) || null},
  }
}