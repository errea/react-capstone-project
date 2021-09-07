import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  useRouteMatch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import getDetails from '../redux/slices/detailsSlice.js';

const Details = ({ name }) => (
  <>
    <Header title="Contry details" backButton="Countries" />
    <h2>Details Page</h2>
    <p>{name}</p>
    <p>Today Death: </p>
    <p>{}</p>
  </>
);

Details.propTypes = ({
  name: PropTypes.string,
}).isRequired;

export default Details;
