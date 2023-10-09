import React, { useEffect, useRef } from 'react';
import {
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { useState } from 'react';
import styles from '@/styles/components/common/filterssidebar.module.css';
import Checkbox from './Checkbox'

const FilterSidebar = ({ getDepartureFilterData, getDestinationFilterData }) => {

  const [destinations, setDestination] = useState([]);
  const [checkBox, setCheckBox] = useState([]);

  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    // getDepatureCountries();
    getDestinationCountries();
    if (typeof window === "undefined") {
      return;
    }
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [])

  const areObjectsEqual = (obj1, obj2) => {
    return obj1.name === obj2.name;
  }

  // const getDepatureCountries = async () => {
  //   const list = [];
  //   const q = query(
  //     collection(db, 'fares'),
  //     where('deptCountry.code', '!=', ''),
  //   );

  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((doc) => {
  //     list.push({ ...doc.data(), _id: doc.id });
  //   });

  //   const deptCountry = list.map(val => val.deptCountry);

  //   const uniqueArray = deptCountry.filter((obj, index, self) =>
  //     self.findIndex(o => areObjectsEqual(o, obj)) === index
  //   );

  //   setDestination([...uniqueArray])
  // }
  const getDestinationCountries = async () => {
    const list = [];
    const q = query(
      collection(db, 'fares'),
      where('destCountry.code', '!=', ''),
      // where('deptCountry.code', '!=', ''),
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      list.push({ ...doc.data(), _id: doc.id });
    });
    const destCountry = list.map(val => val.destCountry)
    const uniqueArray = destCountry.filter((obj, index, self) =>
      self.findIndex(o => areObjectsEqual(o, obj)) === index
    );
    setDestination([...uniqueArray])
  }

  const [isHide, setIsHide] = useState(false);

  const modelClick = () => {
    setIsHide(true)
  }

  const check = (code) => {
    let codeArray = [...checkBox];
    if (codeArray.includes(code)) {
      const findIndex = codeArray.findIndex(val => val.code === code);
      codeArray.splice(findIndex)
    } else {
      codeArray.push(code);
    }
    setCheckBox([...codeArray])
    
    getDestinationFilterData(codeArray)
    // Your checkbox click handler logic goes here

    // const handleOnChange = useCallback(
    //   (e) => {
    //     const index = e.target.name
    //     let items = [...checkBox];
    //     items[index].isChecked = e.target.checked;
    //     setCheckeditems(items);
    //   }, [checkedItems]
    // );
    // handleOnChange();
  };


const handleReset=(e)=>{
  // console.log(e.target.checked)
}

  return (
    <>
      {
        width && width < 767 ?
          <>
            <div className={styles.mobilefilterbtn} onClick={modelClick}>
              Select by Filter
            </div>
            {
              isHide &&
              <div className={styles.filterssiderbar}>
                <button className={styles.filterclosebtn} onClick={()=>{setIsHide(false)}}>&#x2715;</button>
                {/* <Icon onClick={()=>{setIsHide(false)}}>cross</Icon> */}
                <h2>Filter by Destination</h2>
                {
                  destinations.map((val, key) => {
                    return (
                      <div key={key}>
                          <Checkbox label={val.name} handleClick={()=>check(val.code)}/>
                      </div>
                    )
                  })
                }
              </div>
            }
          </>
          :
          <>
            <div className={styles.filterssiderbar}>
              <h2>Filter by Destination</h2>
              <input onClick={(e)=>handleReset(e)} type='checkbox'/>
              <label>Reset</label>
              {
                destinations.map((val, key) => {
                  return (
                    <div key={key}>
                      <Checkbox label={val.name} handleClick={()=>check(val.code)}/>
                    </div>
                    )
                })
              }
            </div>
          </>
      }
    </>
  );
};

export default FilterSidebar;