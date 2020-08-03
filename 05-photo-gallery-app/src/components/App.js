import React, { useState } from 'react';
import Selector from './Selector';
import Input from './Input';
import CategoryList from './CategoryList';
import Modal from './Modal';
import _ from 'lodash';
import './App.css';

function App() {
  const categ = [
    { id: 1, name: 'Abstract' },
    { id: 2, name: 'Adventure' },
    { id: 3, name: 'Architectural' },
    { id: 4, name: 'Astrophotography' },
    { id: 5, name: 'Black and White' },
    { id: 6, name: 'Business' },
    { id: 7, name: 'Candid' },
    { id: 8, name: 'Cityscape' },
    { id: 9, name: 'Commercial' },
  ];
  const [showInput, setShowInput] = useState(false);
  const [showSelector, setShowSelector] = useState(true);
  const [showList, setShowList] = useState(false);
  const [categories, setCategories] = useState(categ);
  const [selected, setSelected] = useState({});
  const [showModal, setShowModal] = useState(false);

  const onAddedInput = (addedInput) => {
    setShowInput(false);
    setShowSelector(true);
    // setShowList(true);
    const added = { id: _.uniqueId(categories), name: addedInput };
    setCategories([...categories, added]);
    setSelected(added);
  };

  const onAddClick = () => {
    setShowInput(true);
    setShowSelector(false);
    setShowList(false);
  };

  const onShowClick = () => {
    setShowList(!showList);
  };

  const onCloseClick = () => {
    setShowInput(false);
    setShowSelector(true);
    setShowList(true);
  };

  const onSelectCategory = (category) => {
    setSelected(category);
  };

  const onDeleteClick = () => {
    if (!!selected && !_.isEmpty(selected)) {
      setShowModal(!showModal);
    } else {
      console.log('Select something to delete.');
    }
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  const onValidateDelete = () => {
    setShowModal(false);
    deleteSelectedCategory();
  };

  const deleteSelectedCategory = () => {
    setCategories(
      categories.filter((category) => {
        return category.id !== selected.id;
      })
    );
  };

  return (
    <div className="App">
      {showSelector && (
        <Selector
          onDeleteClick={onDeleteClick}
          onAddClick={onAddClick}
          onShowClick={onShowClick}
          selected={selected}
        />
      )}
      {showInput && (
        <Input onAddedInput={onAddedInput} onCloseClick={onCloseClick} />
      )}

      {showList && categories && (
        <CategoryList
          categories={categories}
          onSelectCategory={onSelectCategory}
          className="List"
        />
      )}
      {showModal ? (
        <Modal
          onCloseModal={onCloseModal}
          onValidateDelete={onValidateDelete}
          selected={selected}
        ></Modal>
      ) : null}
    </div>
  );
}

export default App;
