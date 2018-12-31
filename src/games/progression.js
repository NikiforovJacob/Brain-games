import gameEngine from '..';
import randomNum from '../utils';

const conditions = 'What number is missing in the progression?';
const genQuestionAndAnswerStr = () => {
  const firstNum = randomNum(1, 9);
  let nextNum = firstNum;
  const incNum = randomNum(1, 9);
  let progressionString = '';
  const missPos = randomNum(1, 9);
  let rightAnswer = '';
  for (let i = 0; i < 10; i += 1) {
    if (i !== missPos) {
      progressionString += ` ${nextNum}`;
    } else {
      progressionString += ' ..';
      rightAnswer = nextNum;
    }
    nextNum += incNum;
  }
  const question = progressionString.slice(1, progressionString.length);

  return `${question}|${rightAnswer}`;
};

const startBrainGcd = () => gameEngine(conditions, genQuestionAndAnswerStr);
export default startBrainGcd;
