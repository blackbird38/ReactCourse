import React from 'react';
import Category from './Category';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CategoryList = ({ categories, onSelectCategory }) => {
  const renderList = () => {
    return categories.map((category) => (
      <Category
        onSelectCategory={onSelectCategory}
        key={category.id}
        category={category}
      ></Category>
    ));
  };
  return <Container>{renderList()}</Container>;
};

const Container = styled.div`
  padding: 1em;
  width: 450px;
  border-left: solid 0.05em black;
  border-right: solid 0.05em black;
  border-bottom: solid 0.05em black;
`;

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
};

export default CategoryList;
