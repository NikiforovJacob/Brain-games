import gameEngine from '..';
import { generationPairQuestionAndBinaryAnswer } from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNum = -10;
const maxNum = 100;
const isPrime = (num) => {
  if (num <= 1) { return false; }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export default name => gameEngine(
  name,
  description,
  generationPairQuestionAndBinaryAnswer(minNum, maxNum, isPrime),
);
