import React, { useState } from 'react';

const PersonalDetailsForm = ({ header, goNext, checked, getPersonalDetails }) => {
  const [firstName, setFirstName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [genre, setGenre] = useState('');

  const nextClicked = (e) => {
    const person = {
      firstName,
      familyName,
      address,
      email,
      country,
      genre,
    };
    getPersonalDetails(person);
    goNext();
  };

  return (
    <>
      <div>
        <h2>{header}</h2>
        <form
          className="ui form raised very padded text container segment"
          wtx-context="5C47BCAC-E731-439B-8C1C-0BE10F647AD3"
        >
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              name="first-name"
              placeholder="First Name"
              wtx-context="E59090E1-8566-4F16-8655-03F52F88F565"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="last-name"
              placeholder="Last Name"
              wtx-context="4E9496A1-A4AD-4932-8AE4-E6AE6A743FF6"
              onChange={(e) => setFamilyName(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              wtx-context="4E9496A1-A4AD-4932-8AE4-E6AE6A743FF6"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              wtx-context="4E9496A1-A4AD-4932-8AE4-E6AE6A743FF6"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Country</label>
            <input
              type="text"
              name="country"
              placeholder="Country"
              wtx-context="4E9496A1-A4AD-4932-8AE4-E6AE6A743FF6"
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>

          <div className="inline fields">
            <label>Genre: </label>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="genre"
                  wtx-context="B998FFD4-4918-4AF7-9540-B0BEC921B185"
                  checked={checked}
                  value="M"
                  onChange={(e) => setGenre(e.target.value)}
                />
                <label>M</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="genre"
                  wtx-context="E57A71C6-FCDA-4DFB-B89F-59545C7E24CF"
                  checked={checked}
                  value="F"
                  onChange={(e) => setGenre(e.target.value)}
                />
                <label>F</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="genre"
                  wtx-context="55C27700-1E75-4D9B-96EE-A7DE05B2A70D"
                  checked={checked}
                  value="Other"
                  onChange={(e) => setGenre(e.target.value)}
                />
                <label>Other</label>
              </div>
            </div>
          </div>
        </form>
      </div>
      <button className="ui green button" onClick={nextClicked}>
        Finish
      </button>
    </>
  );
};

export default PersonalDetailsForm;
