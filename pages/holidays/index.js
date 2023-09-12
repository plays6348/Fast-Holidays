import RandomFooter from '@/components/common/randomFooter';
import Layout from '@/components/layout';
import React from 'react';
import styles from '@/styles/txtpages.module.css';
import { Typography } from '@mui/material';
import { seoForHolidays } from 'utils/seo';
import { appName, number } from 'utils/constants';
import { LinkOff } from '@mui/icons-material';
import Link from 'next/link';

export default function Holidays() {
  return (
    <Layout
      title={seoForHolidays.title}
      keywords={seoForHolidays.keywords}
      description={seoForHolidays.description}
      canonical={seoForHolidays.canonical}
      ogLocale={seoForHolidays.ogLocale}
      ogType={seoForHolidays.ogType}
      ogTitle={seoForHolidays.ogTitle}
      ogDescription={seoForHolidays.ogDescription}
      ogUrl={seoForHolidays.ogUrl}
      ogSiteName={seoForHolidays.ogSite_name}
      twitterCard={seoForHolidays.twitterCard}
      twitterLabel1={seoForHolidays.twitterLabel1}
      twitterDescription={seoForHolidays.twitterDescription}
      twitterSite={seoForHolidays.twitterSite}
      twitterCreator={seoForHolidays.twitterCreator}
    >

<div className={styles.holidaybanner}>
        </div>
        <h1 className={styles.holidayheading}>Holiday Packages</h1>
        {/* <h2 className={styles.holidayheading}>Maldives</h2> */}

      <div>
        <div className={styles.showcase}>

          {/* Dubai Packages..................... */}

        <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 10% off</div>
        </div>
        <Link className={styles.package_image4} href={`tel:${number}`}>
        <div className={styles.package_image4}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h1 className={styles.topic}>TH8 Palm Dubai Flights are included with Baggage<span className={styles.carddestinationtxt}>(Dubai)</span></h1>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 5 Nights</div>
            <div className={styles.original_price}>£700</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 5% off</div>
        </div>
        <Link className={styles.package_image5} href={`tel:${number}`}>
        <div className={styles.package_image5}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h1 className={styles.topic}>Royal Central Palm Dubai Flights are included with Baggage<span className={styles.carddestinationtxt}>(Dubai)</span></h1>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 5 Nights</div>
            <div className={styles.original_price}>£690</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 10% off</div>
        </div>
        <Link className={styles.package_image6} href={`tel:${number}`}>
        <div className={styles.package_image6}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h1 className={styles.topic}>Jumeirah Mina A'Salam Dubai (Deluxe Room) with breakfast<span className={styles.carddestinationtxt}>(Dubai)</span></h1>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 5 Nights</div>
            <div className={styles.original_price}>£698</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 5% off</div>
        </div>
        <Link className={styles.package_image22} href={`tel:${number}`}>
        <div className={styles.package_image22}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h1 className={styles.topic}>Luxury 5-Night Stay at Marriott Resort Palm Jumeirah with Palm<span className={styles.carddestinationtxt}>(Dubai)</span></h1>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 5 Nights</div>
            <div className={styles.original_price}>£999</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 15% off</div>
        </div>
        <Link className={styles.package_image23} href={`tel:${number}`}>
        <div className={styles.package_image23}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h1 className={styles.topic}>Holiday at Anantara the Palm with Half Board Flights are included<span className={styles.carddestinationtxt}>(Dubai)</span></h1>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 3 Nights</div>
            <div className={styles.original_price}>£939</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 20% off</div>
        </div>
        <Link className={styles.package_image24} href={`tel:${number}`}>
        <div className={styles.package_image24}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h1 className={styles.topic}>Holiday at Fairmont the Palm with Half Board<span className={styles.carddestinationtxt}>(Dubai)</span></h1>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 3 Nights</div>
            <div className={styles.original_price}>£930</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 15% off</div>
        </div>
        <Link className={styles.package_image25} href={`tel:${number}`}>
        <div className={styles.package_image25}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h1 className={styles.topic}> Walfdorf Astoria Dubai the Palm with Half Board<span className={styles.carddestinationtxt}>(Dubai)</span></h1>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 3 Nights</div>
            <div className={styles.original_price}>£899</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 5% off</div>
        </div>
        <Link className={styles.package_image26} href={`tel:${number}`}>
        <div className={styles.package_image26}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h1 className={styles.topic}>Taj Exotica Resort & Spa with Half Board<span className={styles.carddestinationtxt}>(Dubai)</span></h1>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 3 Nights</div>
            <div className={styles.original_price}>£889</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 20% off</div>
        </div>
        <Link className={styles.package_image27} href={`tel:${number}`}>
        <div className={styles.package_image27}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h1 className={styles.topic}>Sofitel the Palm with Half Board<span className={styles.carddestinationtxt}>(Dubai)</span></h1>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 3 Nights</div>
            <div className={styles.original_price}>£879</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 20% off</div>
        </div>
        <Link className={styles.package_image28} href={`tel:${number}`}>
        <div className={styles.package_image28}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h1 className={styles.topic}>Hilton Dubai Jumeirah Beach with Flight<span className={styles.carddestinationtxt}>(Dubai)</span></h1>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 5 Nights</div>
            <div className={styles.original_price}>£615</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 20% off</div>
        </div>
        <Link className={styles.package_image29} href={`tel:${number}`}>
        <div className={styles.package_image29}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h1 className={styles.topic}>Amwaj Rotana Jumeirah Beach Dubai<span className={styles.carddestinationtxt}>(Dubai)</span></h1>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£680</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 5% off</div>
        </div>
        <Link className={styles.package_image30} href={`tel:${number}`}>
        <div className={styles.package_image30}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h1 className={styles.topic}>Rixos Premium Dubai JBR with Flight<span className={styles.carddestinationtxt}>(Dubai)</span></h1>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 5 Nights</div>
            <div className={styles.original_price}>£680</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      {/* Dubai packages end................... */}

      
    </div>

    <div className={styles.showcase2}>

    <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 10% off</div>
        </div>
        <Link className={styles.package_image} href={`tel:${number}`}>
        <div className={styles.package_image}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h1 className={styles.topic}>Taj Coral Reef Resort & Spa (PREMIUM WATER VILLA) Flights are included with Baggage<span className={styles.carddestinationtxt}>(Maldives)</span></h1>
          
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£979</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 5% off</div>
        </div>
        <Link className={styles.package_image2} href={`tel:${number}`}>
        <div className={styles.package_image2}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h1 className={styles.topic}>Nova Maldives (Water Villa) Flights are included with Baggage<span className={styles.carddestinationtxt}>(Maldives)</span></h1>
          
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£881</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 30% off</div>
        </div>
        <Link className={styles.package_image19} href={`tel:${number}`}>
        <div className={styles.package_image19}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h1 className={styles.topic}>Siyam World Maldives (Water Villa + Slide) Flights are included<span className={styles.carddestinationtxt}>(Maldives)</span></h1>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£2,649</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 15% off</div>
        </div>
        <Link className={styles.package_image3} href={`tel:${number}`}>
        <div className={styles.package_image3}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h1 className={styles.topic}>Holiday in Crown Paradise Club Cancun & Canyon Flights are included with Baggage<span className={styles.carddestinationtxt}>(Mexico)</span></h1>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 12 Nights</div>
            <div className={styles.original_price}>£754</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 25% off</div>
        </div>
        <Link className={styles.package_image7} href={`tel:${number}`}>
        <div className={styles.package_image7}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h1 className={styles.topic}>InterContinental Mauritius Resort Balaclava Fort (Standard Room)<span className={styles.carddestinationtxt}>(Mauritius)</span></h1>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£1,299</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 30% off</div>
        </div>
        <Link className={styles.package_image8} href={`tel:${number}`}>
        <div className={styles.package_image8}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h1 className={styles.topic}>Paradise Cove Boutique Hotel (Deluxe Premium Room) (Including Flights with Baggage)<span className={styles.carddestinationtxt}>(Mauritius)</span></h1>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£1,629</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 15% off</div>
        </div>
        <Link className={styles.package_image9} href={`tel:${number}`}>
        <div className={styles.package_image9}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h1 className={styles.topic}>Shandrani Beachcomber Resort & Spa (Deluxe Room) With Half Board<span className={styles.carddestinationtxt}>(Mauritius)</span></h1>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£1,499</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 5% off</div>
        </div>
        <Link className={styles.package_image10} href={`tel:${number}`}>
        <div className={styles.package_image10}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h1 className={styles.topic}>Heritage Le Telfair Golf & Wellness Resort (Sea View Suite) With Breakfast<span className={styles.carddestinationtxt}>(Mauritius)</span></h1>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£1,379</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 10% off</div>
        </div>
        <Link className={styles.package_image11} href={`tel:${number}`}>
        <div className={styles.package_image11}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h1 className={styles.topic}>Sofitel Mauritius L'Imperial Resort & Spa (Luxury Room) Breakfast<span className={styles.carddestinationtxt}>(Mauritius)</span></h1>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£1,549</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 25% off</div>
        </div>
        <Link className={styles.package_image12} href={`tel:${number}`}>
        <div className={styles.package_image12}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h1 className={styles.topic}>Outrigger Mauritius Beach Resort ( JUNIOR SUITE BEACH FRONT)<span className={styles.carddestinationtxt}>(Mauritius)</span></h1>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£1,599</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 10% off</div>
        </div>
        <Link className={styles.package_image13} href={`tel:${number}`}>
        <div className={styles.package_image13}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h1 className={styles.topic}>Aska Lara Resort & Spa Double Annex Room All-Inclusive<span className={styles.carddestinationtxt}>(Turkey)</span></h1>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£849</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 5% off</div>
        </div>
        <Link className={styles.package_image14} href={`tel:${number}`}>
        <div className={styles.package_image14}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h1 className={styles.topic}>Queens Park Hotel Goynuk Kemer Family Bungalow<span className={styles.carddestinationtxt}>(Turkey)</span></h1>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£699</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 25% off</div>
        </div>
        <Link className={styles.package_image15} href={`tel:${number}`}>
        <div className={styles.package_image15}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h1 className={styles.topic}>Delphin Imperial- All Inclusive Double Superior Land Side<span className={styles.carddestinationtxt}>(Turkey)</span></h1>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£1,049</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 5% off</div>
        </div>
        <Link className={styles.package_image16} href={`tel:${number}`}>
        <div className={styles.package_image16}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h1 className={styles.topic}>Kuta Paradiso Hotel Bali (Deluxe Room) (Including Flights with Baggage)<span className={styles.carddestinationtxt}>(Bali)</span></h1>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£949</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 15% off</div>
        </div>
        <Link className={styles.package_image17} href={`tel:${number}`}>
        <div className={styles.package_image17}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h1 className={styles.topic}>Hotel Nikko Bali Benoa Beach (Deluxe Room) (Including Flights with Baggage)<span className={styles.carddestinationtxt}>(Bali)</span></h1>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£1,099</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 5% off</div>
        </div>
        <Link className={styles.package_image18} href={`tel:${number}`}>
        <div className={styles.package_image18}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h1 className={styles.topic}>Lv8 Resort Hotel in Bali (Including Flights, Room with Baggage)<span className={styles.carddestinationtxt}>(Bali)</span></h1>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£1,149</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 25% off</div>
        </div>
        <Link className={styles.package_image20} href={`tel:${number}`}>
        <div className={styles.package_image20}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h1 className={styles.topic}>Las Vegas & Punta Cana (All-Inclusive) Combine Deal<span className={styles.carddestinationtxt}>(United States & Dominican Republic)</span></h1>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 10 Nights</div>
            <div className={styles.original_price}>£1,799</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

      <div className={styles.travel_card}>
        <div className={styles.box}>
          <div className={styles.ribbon_2}>save upto 25% off</div>
        </div>
        <Link className={styles.package_image21} href={`tel:${number}`}>
        <div className={styles.package_image21}>
          {/* <img src="/public/assets/card\ package\ image.jpg" alt="Holiday Destination" /> */}
        </div>
        </Link>
        <div className={styles.content}>
          <label className={styles.category}>ADVENTURE</label>
          <h1 className={styles.topic}>Angaga Island Resort & Spa Maldives (WATER BUNGALOW)<span className={styles.carddestinationtxt}>(Maldives)</span></h1>
          <div className={styles.price}>
            <div className={styles.discount_info}>&#128339; 7 Nights</div>
            <div className={styles.original_price}>£2,629</div>
          </div>
          <div className={styles.cardButtons}>
          <Link href={`tel:${number}`}>{number}</Link>
          <Link href="/send-inquiry">Book Now</Link>
          </div>
        </div>
      </div>

    </div>

        <div className={styles.txtPage}>
          <div className={styles.section11}>
            <h2>Unforgettable Holidays - Where Memories Are Made </h2>
            <Typography>
            {appName} takes pride in creating holiday stories that are etched in your coronary heart all the time. From completely happy beach escapes to cultural immersions and thrilling adventures, we curate Unforgettable Holidays that inspire and captivate, leaving you with memories to cherish for your entire life.
            </Typography>
            <h3>Types of Holidays </h3>
            <Typography>
            At {appName}, we recognize that each visitor's definition of an appropriate holiday is particular. This is why we take first-rate care to craft bespoke experiences that cater to your goals and pursuits. Our team of journey experts is committed to curating incredible journeys that leave you with loved memories for a lifetime.
            </Typography>
            <h3>1. Beach Escapes:</h3>
            <Typography>
            For the ones searching for relaxation and quietness, our handpicked beach escapes provide the right getaway. Whether it is the sandy shores of Bali or the turquoise waters of the Maldives, we make certain that you unwind in pricey lodges, surrounded by nature's splendor.
            </Typography>
            <h3>2. Cultural Immersion:</h3>
            <Typography>
            Immerse yourself within the customs and traditions of your selected destination with our cultural immersion Unforgettable holidays. Explore historic temples, partake in traditional rituals, and engage with nearby communities, gaining deeper know-how of numerous cultures.
            </Typography>
            <h3>3. Adventure Getaways:</h3>
            <Typography>
            If the journey is what you are searching for, our interesting journey holidays are tailor-made for you. From exhilarating safaris within the African barren region to adrenaline-pumping activities like skydiving and bungee leaping, we create reviews that get your heart racing.
            </Typography>
            <h3>4. City Breaks:</h3>
            <Typography>
            Discover the heartbeat of vibrant towns with our fascinating town breaks. Whether you want to discover the historic landmarks of Rome or embrace the modernity of Dubai, our town breaks offer a mix of lifestyle, leisure, and exploration.
            </Typography>
            <h3>5. Wildlife Safaris:</h3>
            <Typography>
            Witness nature's wonders up near and personal with our thoughtfully curated flora and fauna safaris. Experience the joys of encountering majestic wildlife on safari, from the iconic Big Five of Africa to the various marine life of the Galapagos Islands.
            </Typography>
          </div>
        </div>

        <RandomFooter />
      </div>
    </Layout>
  );
}
