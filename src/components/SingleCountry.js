import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './SingleCountry.module.css';
import { ThemeContext } from '../ThemeContext';

export default function SingleCountry() {
  //
  const [country, setCountry] = useState([]);
  const { name } = useParams();
  //
  const { isDarkMode } = useContext(ThemeContext);
  //
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    const getSingleCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        setCountry(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getSingleCountry();
  }, []);

  return (
    <div
      className={
        isDarkMode
          ? `${styles['single-country-wrapper']} ${styles.dark}`
          : styles['single-country-wrapper']
      }
    >
      <button className={styles['back-btn']} onClick={goBack}>
        Back
      </button>
      <section className={styles['single-country']}>
        {country.map((singleCountry) => (
          <div
            className={styles['single-country-wrapper-inner']}
            key={singleCountry.population}
          >
            <div className={styles['img-container']}>
              <img src={singleCountry.flags.svg} />
            </div>
            <div className={styles['info-container']}>
              <h2 className={styles['single-country-heading']}>
                {singleCountry.name.official}
              </h2>
              <ul className={styles['single-country-ul']}>
                <li>
                  <p>
                    <b>Capital: </b>
                    {singleCountry.capital[0]}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Population:</b>{' '}
                    {singleCountry.population.toLocaleString('en-IN')}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Region: </b>
                    {singleCountry.region}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Subregion: </b>
                    {singleCountry.subregion}
                  </p>
                </li>
              </ul>

              {singleCountry.borders && (
                <>
                  <h3 className={styles['single-country-borders']}>
                    Border Countries:
                  </h3>
                  <ul className={styles['border-country-ul']}>
                    {singleCountry.borders.map((borderCountry, i) => (
                      <li key={i}>{borderCountry}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
