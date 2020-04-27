import React from 'react';
import PropTypes from 'prop-types';

export const Counter = ({ count, handleClick }) => (
  <>
    <h1>
      Count:
      {count}
    </h1>
    <button type="button" onClick={handleClick}>+</button>
  </>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  handleClick: PropTypes.arrayOf(PropTypes.object).isRequired,
};
