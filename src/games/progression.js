import gameEngine from '..';
import randomNum, { cons } from '../utils';

const conditions = 'What number is missing in the progression?';
const genPairQuestionAndAnswerStr = () => {
  const firstNum = randomNum(1, 9);
  let nextNum = firstNum;
  const incNum = randomNum(1, 9);
  let progressionString = '';
  const missPos = randomNum(1, 9);
  let rightAnswerStr = '';
  for (let i = 0; i < 10; i += 1) {
    if (i !== missPos) {
      progressionString += ` ${nextNum}`;
    } else {
      progressionString += ' ..';
      rightAnswerStr = String(nextNum);
    }
    nextNum += incNum;
  }
  const question = progressionString.slice(1, progressionString.length);

  return cons(question, rightAnswerStr);
};

const startBrainGcd = () => gameEngine(conditions, genPairQuestionAndAnswerStr);
export default startBrainGcd;
