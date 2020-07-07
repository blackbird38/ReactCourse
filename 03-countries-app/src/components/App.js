import './App.css';
import React, { useState, useEffect } from 'react';
import CountryList from './CountryList';
import SelectedCountries from './SelectedCountries';
import ValidateButton from './ValidateButton';
import EmailInput from './EmailInput';
import SendButton from './SendButton';
import MessageBox from './MessageBox';

const App = () => {
  const [countries, setCountries] = useState([]);

  const [selectedCountries, setSelectedCountries] = useState([]);

  const [unselectedCountries, setUnselectedCountries] = useState([]);

  const [showEmailInputForm, setShowEmailInputForm] = useState(false);

  const [showSendButton, setShowSendButton] = useState(false);

  const [emailAddress, setEmailAddress] = useState('');

  const [sendClicked, setSendClicked] = useState(false);

  useEffect(() => {
    fetch('http://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const filteredCountries = data.map((item) => {
          const country = {
            name: item.name,
            flag: item.flag,
            capital: item.capital,
            continent: item.region,
            code: item.alpha2Code,
          };
          return country;
        }, {});
        // console.log('App - useEffect() filteredCountries', filteredCountries);
        setCountries(filteredCountries);
        setUnselectedCountries(filteredCountries);
        //console.log('countries', countries);
      })
      .catch((error) => console.log(error));
  }, []);

  const removeCountry = (countryToRemove) => {
    //console.log('App: removeCountry', countryToRemove);
    setSelectedCountries(
      selectedCountries.filter((country) => {
        return country.name !== countryToRemove.name;
      })
    );
    setUnselectedCountries([...unselectedCountries, countryToRemove]);
    if (selectedCountries.length == 1) {
      setShowEmailInputForm(false);
    }
  };

  const selectCountry = (countryToAdd) => {
    //console.log('App: selectCountry', countryToAdd);

    setUnselectedCountries(
      unselectedCountries.filter((country) => {
        return country.name !== countryToAdd.name;
      })
    );
    setSelectedCountries([...selectedCountries, countryToAdd]);
  };

  const showEmailInput = () => {
    if (selectedCountries.length) {
      setShowEmailInputForm(true);
      //console.log(showEmailInputForm);
    }
  };

  const onEmailTyped = (email) => {
    // console.log('email', email);
    const isEmailValid = validateEmail(email);
    setShowSendButton(isEmailValid);
    setEmailAddress(email);
    //  console.log(showSendButton);
    //console.log('state EmailAdress', emailAddress);
  };

  const validateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };

  const sendEmail = () => {
    //console.log('App', emailAddress);
    setSendClicked(true);
    // console.log(sendClicked);
  };

  const closeMessageAndGoHome = () => {
    setSelectedCountries([]);
    setUnselectedCountries(countries);
    setShowEmailInputForm(false);
    setEmailAddress('');
    setShowSendButton(false);
    setSendClicked(false);
  };

  return (
    <div className="App ui two column grid">
      {!sendClicked ? (
        <div className="row">
          {countries.length != 0 ? (
            <>
              <div className="twelve wide column">
                <CountryList
                  className="country-list"
                  countries={unselectedCountries}
                  selectCountry={selectCountry}
                  total={countries.length}
                />
              </div>
              <div className="four wide column divided grid right-panel">
                <div className="row">
                  <SelectedCountries
                    className="selected-countries column"
                    selectedCountries={selectedCountries}
                    removeCountry={removeCountry}
                  />
                </div>
                <div className="row">
                  {selectedCountries.length ? (
                    <ValidateButton showEmailInput={showEmailInput} />
                  ) : (
                    <p className="color">Select at least a country to send.</p>
                  )}
                </div>
                <div className="row">
                  {showEmailInputForm && <EmailInput onEmailTyped={onEmailTyped} />}
                </div>
                <div className="row">
                  {showSendButton && <SendButton sendEmail={sendEmail} />}
                </div>
              </div>
            </>
          ) : (
            <div className="ui segment">
              <div className="ui active inverted dimmer">
                <div className="ui text loader">Loading</div>
              </div>
              <p></p>
            </div>
          )}
        </div>
      ) : (
        <MessageBox
          closeMessageAndGoHome={closeMessageAndGoHome}
          emailAddress={emailAddress}
          selectedCountries={selectedCountries}
        />
      )}
    </div>
  );
};

export default App;
