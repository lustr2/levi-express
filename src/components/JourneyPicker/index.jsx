import React, { useEffect, useState } from 'react';
import { CityOptions } from '../CityOptions';
import './style.css';
import { DatesOptions } from '../DatesOptions';

export const JourneyPicker = ({ onJourneyChange }) => {
  const cities1 = [
    { name: 'Praha', code: 'CZ-PRG' },
    { name: 'Brno', code: 'CZ-BRQ' },
  ];

  const dates1 =  [
    {
      "dateBasic": "28.05.2021",
      "dateCs": "pá 28. květen 2021"
    },
    {
      "dateBasic": "29.05.2021",
      "dateCs": "so 29. květen 2021"
    }
  ];
  
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [cities, setCities] = useState(cities1);
  const [dates, setDates] = useState(dates1);
  const [journey, setJourney] = useState(null);
  const [sendForm, setSendForm] = useState(false);
  
  useEffect (() => {
    
    const loadData= async() => {
      try {
        const responseC = await fetch('https://apps.kodim.cz/daweb/leviexpress/api/cities');
        const dataC = await responseC.json();
        const responseD = await fetch('https://apps.kodim.cz/daweb/leviexpress/api/dates');
        const dataD = await responseD.json();

        //console.log("Nahravam data ...");
        setLoading(false);
        setCities(dataC.results);
        setDates(dataD.results);
      } catch (ex) {
        setError('Load data error: ' + ex);
        setLoading(false);
      }
    };

    loadData();

  }, []);

  // useEffect (() => {
  //   const loadJourney = async() => {
  //     try {
  //       const responseJ = await fetch (`https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`);
  //       const  dataJ = await responseJ.json();
  //       setJourney(dataJ);
  //     } catch (ex) {
  //       setError('Load journey error: ' + ex);
  //     };
  //   };
  //   loadJourney();

  // }, [sendForm]);

  if (loading) return (<div>Loading cities and dates ...</div>);
  if (!!error) return (<div className='error'>{error}</div>);

  
  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log('Cesta: ' + event);
    console.log('Odesílám formulář s cestou ...');
    console.log('Odkud:' + fromCity);
    console.log('Kam: ' + toCity);
    console.log('Kdy: ' + date);
    console.log(`https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`);

    try {
      const responseJ = await fetch (`https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`);
      const  dataJ = await responseJ.json();
      setJourney(dataJ.results);
      onJourneyChange(dataJ.results);
    } catch (ex) {
      setError('Load journey error: ' + ex);
    };
  
    
 //   setSendForm(false);

};

  return ( 
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form className="journey-picker__form" 
              onSubmit={(e) => { setSendForm(true);
                                 handleSubmit(e);
                                
        } }>
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
              <DatesOptions dates={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button 
              className="btn" 
              type="submit"
              disabled={((fromCity==='') || (toCity==='') || (date==='')) ? true : false}
            > 
              Vyhledat spoj
            </button>
          </div>
        </form> 
        <img className="journey-picker__map" src="/map.svg" />
      </div>
    </div>
  );
};
