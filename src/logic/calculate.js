import operate from './operate';

const calculate = (dataObject, buttonName) => {
  let { total, next, operation } = dataObject;
  const operators = ['+', '-', '÷', 'X', '%'];

  if (buttonName === 'AC') {
    total = 0;
    next = null;
    operation = null;
  } else if (buttonName === '+/-') {
    next = (next * -1).toString();
    total =(total * -1).toString();
    
    // total *= -1;
    // next *= -1;
  } else if (buttonName === '.' && next) {
    if (!next.includes('.')) {
      next += '.';
    }
  } else if (buttonName === '=') {
    if (next && total && operation) {
      total = operate(total, next, operation).toString();
      next = null;
      operation = null;
    }
  } else if (operators.includes(buttonName)) {
    total = operate(total, next, operation).toString();
  }

  return { total, next, operation };
};

export default calculate;
