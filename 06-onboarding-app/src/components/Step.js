import React from 'react';

const Step = ({ currentStep }) => {
  let status1,
    status2,
    status3,
    status4 = '';
  if (currentStep === 'enterCityResidence') {
    status1 = 'active';
    status2 = status3 = status4 = 'disabled';
  }
  if (currentStep === 'enterFavoriteTransportation') {
    status1 = 'completed';
    status2 = 'active';
    status3 = status4 = 'disabled';
  }
  if (currentStep === 'enterNextContriesDestination') {
    status1 = status2 = 'completed';
    status3 = 'active';
    status4 = 'disabled';
  }
  if (currentStep === 'enterPersonalDetails') {
    status1 = status2 = status3 = 'completed';
    status4 = 'active';
  }
  return (
    <div className="ui ordered steps">
      <div className={`${status1} step`}>
        <div className="content">
          <div className="title">Residence</div>
          <div className="description">Where are you coming from?</div>
        </div>
      </div>
      <div className={`${status2} step`}>
        <div className="content">
          <div className="title">Transportation</div>
          <div className="description">How do you like to travel?</div>
        </div>
      </div>
      <div className={`${status3} step`}>
        <div className="content">
          <div className="title">Countries</div>
          <div className="description">What countries do you plan to visit?</div>
        </div>
      </div>
      <div className={`${status4} step`}>
        <div className="content">
          <div className="title">Your details</div>
          <div className="description">One more thing.</div>
        </div>
      </div>
    </div>
  );
};

export default Step;
