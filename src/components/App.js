import React, { useState } from 'react';
import Header from './Header';
import '../../index.css';
import Main from './Main';
import { ThemeContext } from '../ThemeContext';
import styles from './App.module.css';

export default function App() {
  //
  const [isDarkMode, setIsDarkMode] = useState(false);
  //
  const handleModeClick = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={isDarkMode ? `${styles.app} ${styles.dark}` : styles.app}>
      <ThemeContext.Provider
        value={{ handleModeClick, isDarkMode, setIsDarkMode }}
      >
        <Header />
        <Main />
      </ThemeContext.Provider>
    </div>
  );
}
