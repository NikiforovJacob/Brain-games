import gameEngine from '..';

const conditions = 'What is the result of the expression?\n';
const question = () => {
  const randomNum1 = Math.round(Math.random() * 100);
  const randomNum2 = Math.round(Math.random() * 100);
  const choiserOperator = Math.round(Math.random() * 3);
  let result;
  switch (choiserOperator) {
    case 1: result = `${randomNum1} + ${randomNum2}`; break;
    case 2: result = `${randomNum1} - ${randomNum2}`; break;
    default: result = `${randomNum1} * ${randomNum2}`;
  }
  return result;
};
const rightAnsver = (questionString) => {
  const operatorPosition = questionString.indexOf(' ') + 1;
  const num1 = parseInt(questionString.slice(0, operatorPosition - 1), 10);
  const num2 = parseInt(questionString.slice(operatorPosition + 2, questionString.lenght), 10);
  const operator = questionString.charAt(operatorPosition);
  let result;
  switch (operator) {
    case '+': result = String(num1 + num2); break;
    case '-': result = String(num1 - num2); break;
    default: result = String(num1 * num2);
  }
  return result;
};

const startBrainCalc = () => gameEngine(conditions, question, rightAnsver);
export default startBrainCalc;
