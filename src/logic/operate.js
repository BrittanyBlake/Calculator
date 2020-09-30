import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);
  let total;

  switch (operation) {
    case '-':
      total = num1.minus(num2).toString();
      break
    case '+':
      total = num1.plus(num2).toString();
      break;
    case 'X':
      total = num1.times(num2).toString();
      break;
    case '÷':
      if (num1 === 0 || num2 === 0) {
        total = 'NaN';
      } else {
        total = num1.div(num2).toString();
      }
      break;
    case '%':
      total = num1.times("0.01").toString();
      break;
    default:
  }
  return total.toString();
};

export default operate;
