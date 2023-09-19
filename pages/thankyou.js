// import Link from 'next/link';
import styles from '@/styles/thankyou.module.css';
import React from 'react';

const ThankYouPage = () => {
  return (
    <div className={styles.thankyoucontainer}>
      <h1 className={styles.thankyouheading}>Thank You!</h1>
      <p className={styles.thankyoumessage}>Your message has been received.</p>
      {/* <Link href="/">
        <a>Back to Home</a>
      </Link> */}
    </div>
  );
};

export default ThankYouPage;