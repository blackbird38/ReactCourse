import React from 'react';

const Country = ({ country }) => {
  console.log('Country', country);
  return (
    <div className="ui raised card country">
      <div className="content">
        <div className="header">{country.name}</div>
        <div className="meta">
          <span className="category color">{country.capital}</span>
        </div>
        <div className="meta">
          <span className="category">{country.continent}</span>
        </div>
        <img className="ui avatar image" src={country.flag} />
        <div className="description">
          <p>{country.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Country;
