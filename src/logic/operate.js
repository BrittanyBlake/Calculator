import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);
  let total= 0;

  switch (operation) {
    case "-":
      total = num1.minus(num2).toString();
      break;
    case "+":
      total = num1.plus(num2).toString();
      break;
    case "X":
      total = num1.times(num2).toString();
      break;
    case "÷":
      total = (num2 !== 0) ? num1.div(num2).toString() : "NaN" ;
      break;
    case "%":
      total = num1.times("0.01").toString();
      break;
    default:
  }
  return total
};

export default operate;
