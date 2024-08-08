import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { Link } from 'react-router-dom';
import styles from './CountryCard.module.css';

export default function CountryCard({ country }) {
  const { flags, name, population, region, capital } = country;
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <Link to={`/${name.common}`}>
      <div
        className={
          isDarkMode
            ? `${styles.darked} ${styles.countryCard}`
            : styles.countryCard
        }
      >
        <div className={styles['img-container']}>
          <img src={flags.svg} />
        </div>
        <div className={styles.countryInfo}>
          <h3 className={styles.capital}>{name.common}</h3>
          <p>{`Population: ${population.toLocaleString('en-IN')}`}</p>
          <p>{`Region: ${region}`}</p>
          <p>{`Capital: ${capital}`}</p>
        </div>
      </div>
    </Link>
  );
}
