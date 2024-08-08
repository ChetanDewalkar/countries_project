import React, { useContext, useState } from 'react';
import { ThemeContext } from '../ThemeContext';
import { FaMoon } from 'react-icons/fa';
import { IoSunny } from 'react-icons/io5';
import styles from './Header.module.css';

export default function Header() {
  //
  const { handleModeClick, isDarkMode } = useContext(ThemeContext);
  console.log(styles);
  return (
    <div
      className={
        isDarkMode ? `${styles.header} ${styles.darked}` : styles.header
      }
    >
      <h2 className={styles.heading}>Where in the world?</h2>
      <p className={styles.darkModeDetails}>
        <span className={styles.modeIcon} onClick={handleModeClick}>
          {isDarkMode ? <IoSunny /> : <FaMoon />}
        </span>
        <span className={styles['mode-text']}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </span>
      </p>
    </div>
  );
}
