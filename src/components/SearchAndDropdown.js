import React from 'react';
import SearchCountry from './SearchCountry';
import DropDownMenu from './DropDownMenu';
import styles from './SearchAndDropdown.module.css';

export default function SearchAndDropdown({ setQuery }) {
  return (
    <div className={styles['search-dropdown']}>
      <SearchCountry setQuery={setQuery} />
      <DropDownMenu />
    </div>
  );
}
