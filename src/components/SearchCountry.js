import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import styles from './SearchCountry.module.css';

export default function SearchCountry({ setQuery }) {
  //
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={styles['search-container']}>
      <input
        className={
          isDarkMode
            ? `${styles.SearchInput} ${styles.darked}`
            : styles.SearchInput
        }
        type="text"
        placeholder="Search the country"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
    </div>
  );
}
