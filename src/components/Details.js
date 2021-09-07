import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const Details = ({ name }) => (
  <>
    <Header title="Contry details" backButton="Countries" />
    <h2>Details Page</h2>
    <p>{name}</p>
    <p>Today's Death: </p>
    <p>{}</p>
  </>
);

Details.propTypes = ({
  name: PropTypes.string,
}).isRequired;

export default Details;