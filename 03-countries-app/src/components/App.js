import './App.css';
import React, { useState } from 'react';
import CountryList from './CountryList';
import SelectedCountries from './SelectedCountries';
import ValidateButton from './ValidateButton';
import EmailInput from './EmailInput';
import SendButton from './SendButton';
import MessageBox from './MessageBox';

const flagsURL = '/images/flags/';

const countries = [
  {
    key: '1',
    name: 'France',
    capital: 'Paris',
    continent: 'Europe',
    description:
      'France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. The country is also renowned for its wines and sophisticated cuisine. Lascaux’s ancient cave drawings, Lyon’s Roman theater and the vast Palace of Versailles attest to its rich history.',
    flag: `${flagsURL}france.png`,
  },
  {
    key: '2',
    name: 'Romania',
    capital: 'Bucharest',
    continent: 'Europe',
    description:
      'Romania is a southeastern European country known for the forested region of Transylvania, ringed by the Carpathian Mountains. Its preserved medieval towns include Sighişoara, and there are many fortified churches and castles, notably clifftop Bran Castle, long associated with the Dracula legend. Bucharest, the country’s capital, is the site of the gigantic, Communist-era Palatul Parlamentului government building.',
    flag: `${flagsURL}romania.png`,
  },
  {
    key: '3',
    name: 'Spain',
    capital: 'Madrid',
    continent: 'Europe',
    description:
      'Spain, a country on Europe’s Iberian Peninsula, includes 17 autonomous regions with diverse geography and cultures. Capital city Madrid is home to the Royal Palace and Prado museum, housing works by European masters. Segovia has a medieval castle (the Alcázar) and an intact Roman aqueduct. Catalonia’s capital, Barcelona, is defined by Antoni Gaudí’s whimsical modernist landmarks like the Sagrada Família church.',
    flag: `${flagsURL}spain.png`,
  },
  {
    key: '4',
    name: 'Turkey',
    capital: 'Ankara',
    continent: 'Western Asia',
    description:
      'Turkey, officially the Republic of Turkey, is a transcontinental Eurasian country located mainly on the Anatolian peninsula in Western Asia, with a smaller portion on the Balkan peninsula in Southeastern Europe.',
    flag: `${flagsURL}turkey.png`,
  },
  {
    key: '5',
    name: 'Italy',
    capital: 'Rome',
    continent: 'Europe',
    description:
      'Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins. Other major cities include Florence, with Renaissance masterpieces such as Michelangelo’s "David" and Brunelleschi\'s Duomo; Venice, the city of canals; and Milan, Italy’s fashion capital.',
    flag: `${flagsURL}italy.png`,
  },
];

const App = () => {
  const [selectedCountries, setSelectedCountries] = useState([
    countries[0],
    countries[1],
  ]);

  const [unselectedCountries, setUnselectedCountries] = useState([
    countries[2],
    countries[3],
    countries[4],
  ]);

  const [showEmailInputForm, setShowEmailInputForm] = useState(false);

  const [showSendButton, setShowSendButton] = useState(false);

  const [emailAddress, setEmailAddress] = useState('');

  const [sendClicked, setSendClicked] = useState(false);

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
      console.log(showEmailInputForm);
    }
  };

  const onEmailTyped = (email) => {
    console.log('email', email);
    const isEmailValid = validateEmail(email);
    setShowSendButton(isEmailValid);
    setEmailAddress(email);
    //  console.log(showSendButton);
    console.log('state EmailAdress', emailAddress);
  };

  const validateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };

  const sendEmail = () => {
    console.log('App', emailAddress);
    setSendClicked(true);
    console.log(sendClicked);
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
