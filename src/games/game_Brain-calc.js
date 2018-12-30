import { gameEngine } from '..';

const conditions = 'What is the result of the expression?\n';

const question = () => () => {
  const randomNum1 = Math.round(Math.random() * 100);
  const randomNum2 = Math.round(Math.random() * 100);
  const choiserOperator = Math.round(Math.random() * 3);
  if (choiserOperator === 1) {
    return `${randomNum1()} + ${randomNum2()}`;
  }
  if (choiserOperator === 2) {
    return `${randomNum1()} - ${randomNum2()}`;
  }
  return `${randomNum1()} * ${randomNum2()}`;
};
const rightAnsver = (rightAnsverString) => {
  const operatorPosition = () => rightAnsverString.indexOf(' ') + 1;
  const num1 = parseInt(rightAnsverString.slice(0, operatorPosition - 1), 10);
  const num2 = parseInt(rightAnsverString.slice(operatorPosition + 2, rightAnsverString.lenght), 10);
  const operator = rightAnsverString.charAt(operatorPosition);
  if (operator === '+') {
    return `${num1} + ${num2}`;
  }
  if (operator === '-') {
    return `${num1} - ${num2}`;
  }
  return `${num1} * ${num2}`;
};


const startBrainCalc = () => gameEngine(conditions, question(), rightAnsver());
export default startBrainCalc;
