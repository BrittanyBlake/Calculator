const calculate = (dataObject, buttonName) => {
  let { total, next, operation } = dataObject;

  if (buttonName === "AC") {
    total = 0;
    next = null;
    operation = null;
  } else if (buttonName === "+/-") {
    total *= -1;
    next *= -1;
  } 
};

export default calculate;
