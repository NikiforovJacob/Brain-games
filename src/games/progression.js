import gameEngine from '..';
import randomNum, { cons } from '../utils';

const description = 'What number is missing in the progression?';
const genPairQuestionAndAnswer = () => {
  const firstNum = randomNum(1, 9);
  let nextNum = firstNum;
  const incNum = randomNum(1, 9);
  let progression = '';
  const missPos = randomNum(1, 9);
  let rightAnswer = '';
  for (let i = 0; i < 10; i += 1) {
    if (i !== missPos) {
      progression += ` ${nextNum}`;
    } else {
      progression += ' ..';
      rightAnswer = String(nextNum);
    }
    nextNum += incNum;
  }
  const question = progression.slice(1, progression.length);

  return cons(question, rightAnswer);
};

export default () => gameEngine(description, genPairQuestionAndAnswer);
