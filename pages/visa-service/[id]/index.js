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
      maxWidth: '1200px',
      margin: 'auto',
      justifyContent: 'center',
      marginTop: '2rem',
      marginBottom: '3rem',
    },
    gridPad:{
      padding: '12px',
      backgroundColor: '#CEEAE6',
      borderRadius: '12px'
    },
    gridPadMin:{
      boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 12px;',
      height: "min-content",
      border: 'none',
      padding: '12px',
      backgroundColor: '#CEEAE6',
      borderRadius: '12px'
    },
    imgWidth:{
      width: '470px',
      height: '200px',
      [theme.breakpoints.down("md")]: {
        width: '270px',
        justifyContent: "center",
      },
    },
    gridCenter:{
      margin: 'auto',
      justifyContent: 'center'
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
              <Grid item xs={10} sm={8} md={5} gap={4} className={classes.gridPadMin}>
                <Grid item xs={12} sm={10} md={10} >
                  <img className={classes.imgWidth} src={country.img}/>
                </Grid>
                <Grid item xs={12} sm={10} md={10} >
                  <h2>{country.name}</h2>
                  <p>Country Details : {country.details}</p>
                </Grid>
              </Grid>
              <Grid item xs={10} sm={8} md={6} className={classes.gridPad}>
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