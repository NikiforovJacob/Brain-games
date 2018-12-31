import gameEngine from '..';
import randomNum, { cons } from '../utils';

const minNum = 0;
const maxNum = 99;
const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => number % 2 === 0;
const genPairQuestionAndAnswer = () => {
  const question = randomNum(minNum, maxNum);
  const rightAnswer = (isEven(question) ? 'yes' : 'no');
  return cons(question, rightAnswer);
};

export default () => gameEngine(description, genPairQuestionAndAnswer);
