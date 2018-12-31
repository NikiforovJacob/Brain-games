import gameEngine from '..';
import randomNum from '../utils';

const minNum = 0;
const maxNum = 99;
const conditions = 'Find the greatest common divisor of given numbers.';
const gcd = (num1In, num2In) => {
  let num1 = num1In;
  let num2 = num2In;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  return num1 + num2;
};

const genQuestionAndAnswerStr = () => {
  const randomNum1 = randomNum(minNum, maxNum);
  const randomNum2 = randomNum(minNum, maxNum);
  const question = `${randomNum1} ${randomNum2}`;
  const rightAnswer = gcd(randomNum1, randomNum2);
  return `${question}|${rightAnswer}`;
};

const startBrainGcd = () => gameEngine(conditions, genQuestionAndAnswerStr);
export default startBrainGcd;
