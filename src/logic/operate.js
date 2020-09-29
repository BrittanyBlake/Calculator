import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);
  let total = 0;

  if (operation === '-') {
    total = num1.minus(num2);
  } else if (operation === '+') {
    total = num1.plus(num2);
  } else if (operation === 'X') {
    total = num1.times(num2);
  } else if (operation === '÷') {
    total = num1.div(num2);
  } else if (operation === '%') {
    total = num1.mod(num2);
  }
  return total;
};

export default operate;
