import operate from "./operate";

const calculate = (dataObject, buttonName) => {
  let { total, next, operation } = dataObject;
  const operators = ["+", "-", "÷", "X", "%"];

 
  //running clear

  if (buttonName === "AC") {
    total = 0;
    next = null;
    operation = null;
    //if teh button clicked is equal and there is a next total and operation 
  } else if ((buttonName === "=") &&( next && total && operation)) {
    total = operate(total, next, operation);
    next = null;
    operation = null;
    //if the button clicked is one of the operators
  } else if (operators.includes(buttonName)){
    //if the button is the mod button
    if (buttonName === '%') {
      next = (next *= 0.01).toString();
      operation = null;
    }
    //if there is a total a next and an operation
    if (total && next && operation){
      total = operate(total, next, operation)
      operation = buttonName
      next = null
      // if there is a next but no operation
    } else if (next && !operation){
      total = next
      operation = buttonName
      next = null
    } else {
      operation = buttonName
    }
    //if you click the positive negatice button
  } else if (buttonName === "+/-") {
    //if next isnt null
    if (next !== null) {
      next = (next * -1).toString();
    } else {
      total = (total * -1).toString();
    }
    //if you click the point and there is a next
  }  else if (buttonName === "." && next){
    if (!next.includes('.')){
      next += ".";
    }

  } else if (buttonName === "."){
    if (!next) {
      next = '0.'
    }
  } else if (next) {
    //if its not an operator or = or .
    if (
      !operators.includes(buttonName) &&
      buttonName !== "=" &&
      buttonName !== "."
    ) {
      next += buttonName;
    }
  } else {
     next = buttonName;
  }
  return { total, next, operation };
};

export default calculate;
