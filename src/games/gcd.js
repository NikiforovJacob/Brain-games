import gameEngine from '..';

const conditions = 'What is the result of the expression?\n';
const question = () => {
  const randomNum1 = Math.round(Math.random() * 100);
  const randomNum2 = Math.round(Math.random() * 100);
  return String(`${randomNum1} ${randomNum2}`);
};
const rightAnsver = (questionString) => {
  const spacePosition = questionString.indexOf(' ');
  let num1 = parseInt(questionString.slice(0, spacePosition), 10);
  let num2 = parseInt(questionString.slice(spacePosition + 1, questionString.lenght), 10);
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  return String(num1 + num2);
};

const startBrainGcd = () => gameEngine(conditions, question, rightAnsver);
export default startBrainGcd;
