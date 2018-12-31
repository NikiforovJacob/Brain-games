import gameEngine from '..';
import randomNum, { cons } from '../utils';

const minNum = 0;
const maxNum = 99;
const description = 'What is the result of the expression?';
const generationPairQuestionAndAnswer = () => {
  const randomNum1 = randomNum(minNum, maxNum);
  const randomNum2 = randomNum(minNum, maxNum);
  const choiserOperator = randomNum(1, 3);
  let question;
  let rightAnswer;
  switch (choiserOperator) {
    case 1:
      question = `${randomNum1} + ${randomNum2}`;
      rightAnswer = String(randomNum1 + randomNum2);
      break;
    case 2: question = `${randomNum1} - ${randomNum2}`;
      rightAnswer = String(randomNum1 - randomNum2);
      break;
    default: question = `${randomNum1} * ${randomNum2}`;
      rightAnswer = String(randomNum1 * randomNum2);
  }
  return cons(question, rightAnswer);
};

export default () => gameEngine(description, generationPairQuestionAndAnswer);
