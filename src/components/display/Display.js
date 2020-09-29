import React from 'react';
import PropTypes from 'prop-types';
import styles from './Display.module.css'

function Display({ result }) {
  return (
    <div class={styles.display}>
      <h3 class={styles.result}>
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
