/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import CitySelector from './CitySelector';
import StateTypes from './../functions/StateTypes';

const FormDelivery = (props) => {
  const [city, setCity] = useState('');
  const [cityList, setCityList] = useState([]);
  const [zipCode, setZipCode] = useState('');
  //const [address, setAddress] = useState('');
  //const [number, setNumber] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!StateTypes.number(Number(zipCode))) {
      setError('Mauvais code postal');
    } else {
      setError('');
    }
  }, [zipCode]);

  useEffect(() => {
    if (!StateTypes.string(city)) {
      setError('Ville incorrect');
    } else {
      setError('');
    }
  }, [city]);

  const handleZipChange = (e) => {
    if (!isNaN(e.target.value)) {
      if (e.target.value.length === 5) {
        const url = `https://apicarto.ign.fr/api/codes-postaux/communes/${e.target.value}`;
        fetch(url)
          .then(response => {
            if (response.status === 200) {
              return response.json();
            } else {
              throw new Error(`Aucune ville trouvée au code postal : ${e.target.value}`);
            }
          })
          .then(res => {
            if (res.length > 0) {
              setCityList(res);
              setError(''); // Clear error on successful fetch
            } else {
              setCityList([]);
              setError(`Aucune ville trouvée au code postal : ${e.target.value}`);
            }
          })
          .catch(err => {
            setError(err.message);
            console.error(err);
          });
      }
      setZipCode(e.target.value);
    }
  };

  return (
    <div>
      <h1>Quel est votre adresse ? S'il vous plaît</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label htmlFor='zipCode'>Code Postal : </label>
      <input
        type='number'
        id='zipCode'
        name='zipCode'
        value={zipCode}
        onChange={handleZipChange}
      />
      {cityList.length > 0 ? (
        <CitySelector data={cityList} />
      ) : null}
      {zipCode.length === 5 || zipCode.length === 2 ? (
        <p>LE CODE POSTAL EST : {zipCode} !!!!!! La force est avec vous</p>
      ) : (
        <p>Mauvais code postal, essayez encore</p>
      )}
    </div>
  );
}

export default FormDelivery;
