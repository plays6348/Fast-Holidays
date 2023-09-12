import React, { useEffect } from 'react';
import {
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { useState } from 'react';

const FilterSidebar = ({getDepartureFilterData, getDestinationFilterData}) => {

  const [destinations, setDestination] = useState([]);


  useEffect(()=>{
    getDepatureCountries();
    getDestinationCountries();
  }, [])

  const getDepatureCountries = async ()=>{
    const list = [];
    const q = query(
      collection(db, 'fares'),
      where('deptCountry.code', '!=', ''),
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      list.push({ ...doc.data(), _id: doc.id });
    });
    const deptCountry = list.map(val=>val.deptCountry)
    const uniqueDeptCountries = new Set(deptCountry.map(JSON.stringify));
    const result = Array.from(uniqueDeptCountries).map(JSON.parse);
    setDestination([...result])
  }
  const getDestinationCountries = async ()=>{
    const list = [];
    const q = query(
      collection(db, 'fares'),
      where('destCountry.code', '!=', ''),
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      list.push({ ...doc.data(), _id: doc.id });
    });
    const deptCountry = list.map(val=>val.deptCountry)
    const uniqueDeptCountries = new Set(deptCountry.map(JSON.stringify));
    const result = Array.from(uniqueDeptCountries).map(JSON.parse);
    setDestination([...result])
  }



  const check = () => {
    // Your checkbox click handler logic goes here
  };

  return (
    <div className="filterssiderbar">
      <h1>Filter by Destination</h1>
      <div>
        <input type="checkbox" id="Zimbabwe" onClick={check} />
        <label htmlFor="Zimbabwe">Zimbabwe</label>
      </div>
      <div>
          <input type="checkbox" id="Zambia" onClick={check} />
          <label htmlFor="Zambia">Zambia</label>
        </div> 
        <div>
          <input type="checkbox" id="Usa" onClick={check} />
          <label htmlFor="Usa">Usa</label>
        </div> 
        <div>
          <input type="checkbox" id="United Kingdom" onClick={check} />
          <label htmlFor="United Kingdom">United Kingdom</label>
        </div>
        <div>
            <input type="checkbox" id="Thailand" onClick={check} />
            <label htmlFor="Thailand">Thailand</label>
          </div>
          <div>
            <input type="checkbox" id="Tanzania" onClick={check} />
            <label htmlFor="Tanzania">Tanzania</label>
          </div>
          <div>
            <input type="checkbox" id="Sudan" onClick={check} />
            <label htmlFor="Sudan">Sudan</label>
          </div>
          <div>
            <input type="checkbox" id="Sri Lanka" onClick={check} />
            <label htmlFor="Sri Lanka">Sri Lanka</label>
          </div>
          <div>
            <input type="checkbox" id="South Africa" onClick={check} />
            <label htmlFor="South Africa">South Africa</label>
          </div>
          <div>
            <input type="checkbox" id="Singapore" onClick={check} />
            <label htmlFor="Singapore">Singapore</label>
          </div>
          <div>
            <input type="checkbox" id="Sierra Leone" onClick={check} />
            <label htmlFor="Sierra Leone">Sierra Leone</label>
          </div>
          <div>
            <input type="checkbox" id="Senegal" onClick={check} />
            <label htmlFor="Senegal">Senegal</label>
          </div>
          <div>
            <input type="checkbox" id="Saudi Arab" onClick={check} />
            <label htmlFor="Saudi Arab">Saudi Arab</label>
          </div>
          <div>
            <input type="checkbox" id="Rwanda" onClick={check} />
            <label htmlFor="Rwanda">Rwanda</label>
          </div>
          <div>
            <input type="checkbox" id="Philippines" onClick={check} />
            <label htmlFor="Philippines">Philippines</label>
          </div>
          <div>
            <input type="checkbox" id="Pakistan" onClick={check} />
            <label htmlFor="Pakistan">Pakistan</label>
          </div>
          <div>
            <input type="checkbox" id="Nigeria" onClick={check} />
            <label htmlFor="Nigeria">Nigeria</label>
          </div>
          <div>
            <input type="checkbox" id="Malaysia" onClick={check} />
            <label htmlFor="Malaysia">Malaysia</label>
          </div>
          <div>
            <input type="checkbox" id="Malaysia" onClick={check} />
            <label htmlFor="Malaysia">Malaysia</label>
          </div>
          <div>
            <input type="checkbox" id="Kenya" onClick={check} />
            <label htmlFor="Kenya">Kenya</label>
          </div>
          <div>
            <input type="checkbox" id="Jamaica" onClick={check} />
            <label htmlFor="Jamaica">Jamaica</label>
          </div>
          <div>
            <input type="checkbox" id="Ivory Coast" onClick={check} />
            <label htmlFor="Ivory Coast">Ivory Coast</label>
          </div>
          <div>
            <input type="checkbox" id="Ireland" onClick={check} />
            <label htmlFor="Ireland">Ireland</label>
          </div>
          <div>
            <input type="checkbox" id="India" onClick={check} />
            <label htmlFor="India">India</label>
          </div>
          <div>
            <input type="checkbox" id="Hong Kong" onClick={check} />
            <label htmlFor="Hong Kong">Hong Kong</label>
          </div>
          <div>
            <input type="checkbox" id="Grenada" onClick={check} />
            <label htmlFor="Grenada">Grenada</label>
          </div>
          <div>
            <input type="checkbox" id="Ghana" onClick={check} />
            <label htmlFor="Ghana">Ghana</label>
          </div>
          <div>
            <input type="checkbox" id="Gambia" onClick={check} />
            <label htmlFor="Gambia">Gambia</label>
          </div>
          <div>
            <input type="checkbox" id="France" onClick={check} />
            <label htmlFor="France">France</label>
          </div>
          <div>
            <input type="checkbox" id="Ethiopia" onClick={check} />
            <label htmlFor="Ethiopia">Ethiopia</label>
          </div>
          <div>
            <input type="checkbox" id="Egypt" onClick={check} />
            <label htmlFor="Egypt">Egypt</label>
          </div>
          <div>
            <input type="checkbox" id="Dominican Republic" onClick={check} />
            <label htmlFor="Dominican Republic">Dominican Republic</label>
          </div>
          <div>
            <input type="checkbox" id="Dominica" onClick={check} />
            <label htmlFor="Dominica">Dominica</label>
          </div>
          <div>
            <input type="checkbox" id="Democratic Republic Of The Congo" onClick={check} />
            <label htmlFor="Democratic Republic Of The Congo">Democratic Republic Of The Congo</label>
          </div>
          <div>
            <input type="checkbox" id="China" onClick={check} />
            <label htmlFor="China">China</label>
          </div>
          <div>
            <input type="checkbox" id="Canada" onClick={check} />
            <label htmlFor="Canada">Canada</label>
          </div>
          <div>
            <input type="checkbox" id="Cameroon" onClick={check} />
            <label htmlFor="Cameroon">Cameroon</label>
          </div>
          <div>
            <input type="checkbox" id="Burundi" onClick={check} />
            <label htmlFor="Burundi">Burundi</label>
          </div>
          <div>
            <input type="checkbox" id="Benin" onClick={check} />
            <label htmlFor="Benin">Benin</label>
          </div>
          <div>
            <input type="checkbox" id="Dominica" onClick={check} />
            <label htmlFor="Dominica">Dominica</label>
          </div>
          <div>
            <input type="checkbox" id="Belgium" onClick={check} />
            <label htmlFor="Belgium">Belgium</label>
          </div>
          <div>
            <input type="checkbox" id="Barbados" onClick={check} />
            <label htmlFor="Barbados">Barbados</label>
          </div>
          <div>
            <input type="checkbox" id="Bangladesh" onClick={check} />
            <label htmlFor="Bangladesh">Bangladesh</label>
          </div>
          <div>
            <input type="checkbox" id="Australia" onClick={check} />
            <label htmlFor="Australia">Australia</label>
          </div>
    </div>
  );
};

export default FilterSidebar;