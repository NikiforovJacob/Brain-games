import gameEngine from '..';
import randomNum, { cons } from '../utils';

const minNum = 0;
const maxNum = 99;
const conditions = 'What is the result of the expression?';
const genPairQuestionAndAnswerStr = () => {
  const randomNum1 = randomNum(minNum, maxNum);
  const randomNum2 = randomNum(minNum, maxNum);
  const choiserOperator = randomNum(1, 3);
  let question;
  let rightAnswerStr;
  switch (choiserOperator) {
    case 1:
      question = `${randomNum1} + ${randomNum2}`;
      rightAnswerStr = String(randomNum1 + randomNum2);
      break;
    case 2: question = `${randomNum1} - ${randomNum2}`;
      rightAnswerStr = String(randomNum1 - randomNum2);
      break;
    default: question = `${randomNum1} * ${randomNum2}`;
      rightAnswerStr = String(randomNum1 * randomNum2);
  }
  return cons(question, rightAnswerStr);
};

const startBrainCalc = () => gameEngine(conditions, genPairQuestionAndAnswerStr);
export default startBrainCalc;
