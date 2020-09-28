import React from 'react';
import PropTypes from 'prop-types';

function Display({ result }) {
  return (
    <div>
      <h3>
        {' '}
        {result}
        {' '}
      </h3>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};
Display.defaultProps = {
  result: '0',
};

export default Display;
