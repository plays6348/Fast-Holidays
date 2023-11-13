import React from "react";
import styles from "@/styles/components/common/airlineCard.module.css";
import Link from "next/link";

export default function AirlineCard({ data }) {
  return (
    <Link href={`/airlines/${data.name}`}>
      <div className={styles.airlineLogoContainer}>
        <img
          src={data.img}
          className={styles.airlineLogo}
          alt={`${data.name} logo`}
        />
      </div>
    </Link>
  );
}
