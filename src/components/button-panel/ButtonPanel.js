import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import styles from './ButtonPanel.module.css';

function ButtonPanel({ clickHandler }) {
  return (
    <div className="button-panel">
      <div className={styles.group}>
        <Button name="AC" color="#dfdfdf" clickHandler={clickHandler} />
        <Button name="+/-" color="#dfdfdf" clickHandler={clickHandler} />
        <Button name="%" color="#dfdfdf" clickHandler={clickHandler} />
        <Button name="÷" clickHandler={clickHandler} />
      </div>
      <div className={styles.group}>
        <Button name="7" color="#dfdfdf" clickHandler={clickHandler} />
        <Button name="8" color="#dfdfdf" clickHandler={clickHandler} />
        <Button name="9" color="#dfdfdf" clickHandler={clickHandler} />
        <Button name="X" clickHandler={clickHandler} />
      </div>
      <div className={styles.group}>
        <Button name="4" color="#dfdfdf" clickHandler={clickHandler} />
        <Button name="5" color="#dfdfdf" clickHandler={clickHandler} />
        <Button name="6" color="#dfdfdf" clickHandler={clickHandler} />
        <Button name="-" clickHandler={clickHandler} />
      </div>
      <div className={styles.group}>
        <Button name="1" color="#dfdfdf" clickHandler={clickHandler} />
        <Button name="2" color="#dfdfdf" clickHandler={clickHandler} />
        <Button name="3" color="#dfdfdf" clickHandler={clickHandler} />
        <Button name="+" clickHandler={clickHandler} />
      </div>
      <div className={styles.group}>
        <Button name="0" color="#dfdfdf" wide clickHandler={clickHandler} />
        <Button name="." color="#dfdfdf" clickHandler={clickHandler} />
        <Button name="=" clickHandler={clickHandler} />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {

  clickHandler: PropTypes.func.isRequired,
};
export default ButtonPanel;
