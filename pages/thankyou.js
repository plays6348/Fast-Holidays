// pages/thankyou.js
import { Button, ThemeProvider } from '@mui/material';
import { theme } from '@/styles/theme';
import Link from 'next/link';
import styles from '@/styles/thankyou.module.css';
import React from 'react';
import Layout from '@/components/layout';

const ThankYouPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.thankyoucontainer}>
        <h1 className={styles.thankyouheading}>Thank You!</h1>
        <p className={styles.thankyoumessage}>Your message has been received.</p>
        <Link href="/" passHref >
          <button className={styles.textColor}>Back to Website</button>
        </Link>
      </div>
    </ThemeProvider>
  );
};

export default ThankYouPage;