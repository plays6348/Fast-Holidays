import React, { useState, useEffect } from 'react';
import AppContext from '../context/appContext';
import '@/styles/globals.css';
import Layout from '../components/layout';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/theme';
import TagManager from 'react-gtm-module';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  const [state, setstate] = useState({});

//   <!-- Start of HubSpot Embed Code -->
//  
// <!-- End of HubSpot Embed Code -->


  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-N5P3RPG' });
  }, []);

  return (
    <ThemeProvider theme={theme}>
       <Script 
       type="text/javascript" 
       id="hs-script-loader" 
       async 
       defer 
       src="//js-eu1.hs-scripts.com/143466160.js"/>
      <AppContext.Provider value={state}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;