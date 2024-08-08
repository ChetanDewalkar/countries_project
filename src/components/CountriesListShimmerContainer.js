import React from 'react';
import CountriesListShimmer from './CountriesListShimmer';
import styles from './CountriesListShimmerContainer.module.css';

export default function CountriesListShimmerContainer() {
  return (
    <div className={styles.shimmerContainer}>
      <CountriesListShimmer />
      <CountriesListShimmer />
      <CountriesListShimmer />
      <CountriesListShimmer />
      <CountriesListShimmer />
      <CountriesListShimmer />
      <CountriesListShimmer />
      <CountriesListShimmer />
      <CountriesListShimmer />
      <CountriesListShimmer />
      <CountriesListShimmer />
      <CountriesListShimmer />
      <CountriesListShimmer />
      <CountriesListShimmer />
    </div>
  );
}
