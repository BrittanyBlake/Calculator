import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Button.module.css";


function Button({ name, color, wide }) {
  return (
    <div>
      <button
        type="button"
        className={wide ? styles.wide : styles.normal}
        style={{ backgroundColor: color }}
        // className={styles.button}
        // style={{ backgroundColor: color, width: wide ? "50%" : "25%" }}
      >
        {name}
      </button>
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: "#fe9241",
  wide: false,
};

export default Button;
