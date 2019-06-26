import gameEngine from '..';
import { generationPairQuestionAndBinaryAnswer } from '../utils';

const minNum = 0;
const maxNum = 99;
const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => number % 2 === 0;

export default name => gameEngine(
  name,
  description,
  generationPairQuestionAndBinaryAnswer(minNum, maxNum, isEven),
);
