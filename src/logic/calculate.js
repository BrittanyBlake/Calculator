import operate from './operate';
/* eslint-disable no-param-reassign */
const calculate = ({ total, next, operation }, buttonName) => {
  const operators = ['+', '-', '÷', 'x', '%'];

  if (buttonName === 'AC') {
    total = 0;
    next = null;
    operation = null;
  } else if (buttonName === '=' && next && total && operation) {
    total = operate(total, next, operation);
    next = null;
    operation = null;
  } else if (operators.includes(buttonName)) {
    if (buttonName === '%') {
      next = (next *= 0.01).toString();
      operation = null;
    }

    if (total && next && operation) {
      total = operate(total, next, operation);
      operation = buttonName;
      next = null;
    } else if (next && !operation) {
      total = next;
      operation = buttonName;
      next = null;
    } else {
      operation = buttonName;
    }
  } else if (buttonName === '+/-') {
    next = (next * -1).toString();
    total = (total * -1).toString();
  } else if (buttonName === '.' && next) {
    if (!next.includes('.')) {
      next += '.';
    }
  } else if (next) {
    if (
      !operators.includes(buttonName)
      && buttonName !== '='
      && buttonName !== '.'
    ) {
      next += buttonName;
    }
  } else {
    next = buttonName;
  }
  return { total, next, operation };
};
/* eslint-enable no-param-reassign */

export default calculate;
