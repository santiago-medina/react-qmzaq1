import React from 'react';
import PropTypes from 'prop-types';

const comp = props => <a>a{props.titulo}b</a>;

comp.propTypes = {
  titulo: PropTypes.string.isRequired,
  productPrice: PropTypes.text
};

export default comp;
