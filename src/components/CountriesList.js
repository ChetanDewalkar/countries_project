import React, { useEffect, useState } from 'react';
import { apiData } from '../constants/apiData';
import CountryCard from './CountryCard';
import CountriesListShimmer from './CountriesListShimmerContainer';
import styles from './CountriesList.module.css';

export default function CountriesList({ query }) {
  //
  const [countriesData, setCountriesData] = useState([]);
  //
  useEffect(() => {
    fetchData(apiData);
  }, []);

  const fetchData = async (apiData) => {
    try {
      const res = await fetch(apiData);
      const data = await res.json();
      setCountriesData(data);
    } catch (error) {
      console.error(error);
    }
  };
  //
  return !countriesData.length ? (
    <CountriesListShimmer />
  ) : (
    <div className={styles.countriesList}>
      {countriesData
        .filter((country) => country.name.common.toLowerCase().includes(query))
        .map((country) => (
          <CountryCard country={country} key={country.flag} />
        ))}
    </div>
  );
}
