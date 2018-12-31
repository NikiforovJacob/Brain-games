import gameEngine from '..';
import randomNum, { cons } from '../utils';

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

const generationPairQuestionAndAnswer = () => {
  const question = randomNum(minNum, maxNum);
  const rightAnswer = (isPrime(question) ? 'yes' : 'no');
  return cons(question, rightAnswer);
};

export default () => gameEngine(description, generationPairQuestionAndAnswer);
