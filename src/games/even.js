import gameEngine from '..';
import randomNum from '../utils';

const minNum = 0;
const maxNum = 99;
const conditions = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => number % 2 === 0;
const genQuestionAndAnswerStr = () => {
  const questionString = randomNum(minNum, maxNum);
  const rightAnswer = (isEven(questionString) ? 'yes' : 'no');
  return `${questionString}|${rightAnswer}`;
};

const startBrainEven = () => gameEngine(conditions, genQuestionAndAnswerStr);
export default startBrainEven;
