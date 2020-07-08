import React from 'react';
import { withRouter } from 'react-router';

const AlbumPage = ({ match }) => {
  console.log(match);
  return <h1>{match.params.id}</h1>;
};

export default withRouter(AlbumPage);
