import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Category = ({ category, onSelectCategory }) => {
  const onClickCategory = () => {
    onSelectCategory(category);
  };
  return <Container onClick={onClickCategory}>{category.name}</Container>;
};

const Container = styled.div`
  height: 30px;
`;

Category.propTypes = {
  category: PropTypes.object.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
};

export default Category;
