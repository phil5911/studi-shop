import React from 'react';
import PropTypes from 'prop-types';

const CitySelector = (props) => {
  const cityList = props.data.map((city, index) => {
    if (city.nomCommune) return <option key={index} value={city.nomCommune}>{city.nomCommune}</option>;
    return null;
  })

  return (
    <select name='city' id='city'>
      {cityList}
    </select>
  )
}

CitySelector.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      codePostal: PropTypes.string,
      nomCommune: PropTypes.string,
      codeCommune: PropTypes.string,
      libelleAcheminement: PropTypes.string
    })
  ).isRequired
}

export default CitySelector
