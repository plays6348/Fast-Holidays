import React, { useState, useEffect } from 'react';
import AppContext from '../context/appContext';
import '@/styles/globals.css';
import Layout from '../components/layout';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/theme';
import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }) {
  const [state, setstate] = useState({});

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-N5P3RPG' });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={state}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;