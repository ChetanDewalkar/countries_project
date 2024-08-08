import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import styles from './DropDownMenu.module.css';

export default function DropDownMenu() {
  //
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className="dropdown-container">
      <select
        className={
          isDarkMode ? `${styles.dropdown} ${styles.darked}` : styles.dropdown
        }
      >
        <option className="placeholder">Filter by region</option>
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </div>
  );
}
