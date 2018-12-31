import gameEngine from '..';
import randomNum, { cons } from '../utils';

const description = 'What number is missing in the progression?';
const progressionLength = 10;
const generationPairQuestionAndAnswer = () => {
  const firstNum = randomNum(1, 9);
  const progressionStep = randomNum(1, 9);
  const positionMissingNum = randomNum(1, 9);
  let progression = '';
  for (let i = 0; i < progressionLength; i += 1) {
    const nextNum = firstNum + progressionStep * i;
    if (i !== positionMissingNum) {
      progression += ` ${nextNum}`;
    } else {
      progression += ' ..';
    }
  }
  const rightAnswer = firstNum + progressionStep * positionMissingNum;
  const question = progression.trim();
  return cons(question, rightAnswer);
};

export default () => gameEngine(description, generationPairQuestionAndAnswer);
