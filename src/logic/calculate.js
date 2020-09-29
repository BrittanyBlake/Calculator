import operate from './operate';

const calculate = (dataObject, buttonName) => {
  let { total, next, operation } = dataObject;
  const operators = ['+', '-', '÷', 'X', '%'];

  if (buttonName === 'AC') {
    total = 0;
    next = null;
    operation = null;
  } else if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
  } else if (buttonName === '.' && next) {
    if (!next.includes('.')) {
      next += '.';
    }
  } else if (buttonName === '=') {
    if (next && total) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  } else if (operators.includes(buttonName)) {
    total = operate(total, next, operation);
  }

  return { total, next, operation };
};

export default calculate;
