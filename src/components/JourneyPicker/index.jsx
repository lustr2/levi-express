import React, { useEffect, useState } from 'react';
import { CityOptions } from '../CityOptions';
import './style.css';

export const JourneyPicker = ({ onJourneyChange }) => {
  const cities1 = [
    { name: 'Praha', code: 'CZ-PRG' },
    { name: 'Brno', code: 'CZ-BRQ' },
  ];
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [cities, setCities] = useState(cities1);
  
  useEffect (() => {
    
    const loadCities = async() => {
      try {
        const response = await fetch('https://apps.kodim.cz/daweb/leviexpress/api/cities');
        const data = await response.json();
        //console.log("Nahravam data ...");
        setLoading(false);
        setCities(data.results);
      } catch (ex) {
        setError('Load data error: ' + ex);
        setLoading(false);
      }
    };

    loadCities();

  }, []);

  if (loading) return (<div>Loading ...</div>);
  if (!!error) return (<div className='error'>{error}</div>);

  const handleSubmit = (event) => {
    console.log('Odesílám formulář s cestou ...' + event);
    console.log('Odkud:' + fromCity);
    console.log('Kam: ' + toCity);
    console.log('Kdy: ' + date);
  };

  return ( 
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form className="journey-picker__form" onSubmit={(e) => handleSubmit(e)}>
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select value={fromCity} onChange={(e) => setFromCity(e.target.value)}>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select value={toCity} onChange={(e) => setToCity(e.target.value)}>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select value={date} onChange={(e) => setDate(e.target.value)}>
              <option value="">Vyberte</option>
              <option value="datum01">Datum 01</option>
              <option value="datum02">Datum 02</option>
              <option value="datum03">Datum 03</option>
              <option value="datum04">Datum 04</option>
              <option value="datum05">Datum 05</option>
            </select>
          </label>
          <div className="journey-picker__controls">
            <button 
              className="btn" 
              type="submit"> 
              Vyhledat spoj
            </button>
          </div>
        </form> 
        <img className="journey-picker__map" src="/map.svg" />
      </div>
    </div>
  );
};
