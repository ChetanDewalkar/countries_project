import React, { useState } from 'react';
import CountriesList from './CountriesList';
import styles from './Main.module.css';
import SearchAndDropdown from './SearchAndDropdown';

export default function Main() {
  //
  const [query, setQuery] = useState('');
  //
  return (
    <div className={styles.main}>
      <SearchAndDropdown setQuery={setQuery} />
      <CountriesList query={query} />
    </div>
  );
}
