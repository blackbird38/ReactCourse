import React, { useState } from 'react';
import LocationForm from './LocationForm';
import TransportationForm from './TransportationForm';
import CountriesForm from './CountriesForm';
import Step from './Step';
import PersonalDetailsForm from './PersonalDetailsForm';
import Modal from './Modal';
import './App.css';

function App() {
  const transportation = [
    { id: 1, name: 'plane', icon: 'plane', selected: false },
    { id: 2, name: 'car', icon: 'car', selected: false },
    { id: 3, name: 'bus', icon: 'bus', selected: false },
    { id: 4, name: 'ship', icon: 'ship', selected: false },
    { id: 5, name: 'motorcycle', icon: 'motorcycle', selected: false },
    { id: 6, name: 'bicycle', icon: 'bicycle', selected: false },
  ];

  const countries = [
    { id: 1, name: 'Romania', selected: false },
    { id: 2, name: 'Spain', selected: false },
    { id: 3, name: 'Rusia', selected: false },
    { id: 4, name: 'Turkey', selected: false },
  ];

  const [currentStep, setCurrentStep] = useState('enterCityResidence');
  const [selectedCity, setSelectedCity] = useState({});
  const [selectedTransportation, setSelectedTransportation] = useState(
    transportation
  );
  const [selectedCountries, setSelectedCountries] = useState(countries);
  const [personalDetails, setPersonalDetails] = useState({});
  const [showModal, setShowModal] = useState(false);

  const selectCity = (city) => {
    setSelectedCity(city);
  };

  const selectTransportation = (transportation) => {
    setSelectedTransportation(
      selectedTransportation.map((t) =>
        t.id === transportation.id ? transportation : t
      )
    );
  };

  const selectCountry = (country) => {
    setSelectedCountries(
      selectedCountries.map((c) => (c.id === country.id ? country : c))
    );
  };

  const getPersonalDetails = (person) => {
    setPersonalDetails(person);
  };

  const onCloseModal = () => {
    setShowModal(false);
    initializeState();
  };

  const headers = [
    'Where from are you coming?',
    'Your favorite means of transportation',
    'What countries do you want to visit next?',
    'Enter your details:',
  ];

  const cities = [
    { id: 1, name: 'Paris' },
    { id: 2, name: 'Cannes' },
    { id: 3, name: 'Nice' },
    { id: 4, name: 'Nantes' },
  ];

  const steps = [
    'enterCityResidence',
    'enterFavoriteTransportation',
    'enterNextContriesDestination',
    'enterPersonalDetails',
  ];

  const goNext = () => {
    if (currentStep === 'enterCityResidence') {
      setCurrentStep('enterFavoriteTransportation');
    }
    if (currentStep === 'enterFavoriteTransportation') {
      setCurrentStep('enterNextContriesDestination');
    }
    if (currentStep === 'enterNextContriesDestination') {
      setCurrentStep('enterPersonalDetails');
    }
    if (currentStep === 'enterPersonalDetails') {
      setShowModal(true);
    }
  };

  const initializeState = () => {
    setCurrentStep('enterCityResidence');
    setSelectedCity({});
    setSelectedTransportation(transportation);
    setSelectedCountries(countries);
    setPersonalDetails({});
  };

  return (
    <div className="App">
      <Step currentStep={currentStep}></Step>

      {currentStep === 'enterCityResidence' && (
        <LocationForm
          header={headers[0]}
          cities={cities}
          goNext={goNext}
          selectCity={selectCity}
        ></LocationForm>
      )}
      {currentStep === 'enterFavoriteTransportation' && (
        <TransportationForm
          header={headers[1]}
          transportation={transportation}
          goNext={goNext}
          selectTransportation={selectTransportation}
        ></TransportationForm>
      )}
      {currentStep === 'enterNextContriesDestination' && (
        <CountriesForm
          header={headers[2]}
          countries={countries}
          goNext={goNext}
          selectCountry={selectCountry}
        ></CountriesForm>
      )}
      {currentStep === 'enterPersonalDetails' && (
        <PersonalDetailsForm
          header={headers[3]}
          goNext={goNext}
          getPersonalDetails={getPersonalDetails}
        ></PersonalDetailsForm>
      )}
      {showModal ? (
        <Modal
          onCloseModal={onCloseModal}
          info={{
            selectedCity,
            selectedTransportation,
            selectedCountries,
            personalDetails,
          }}
        ></Modal>
      ) : null}
    </div>
  );
}

export default App;
