import readlineSync from 'readline-sync';
import { car, cdr } from './utils';

const wellcome = 'Wellcome to the Brain Games!';
const roundCounts = 3;
const newLine = '\n';
export const dialog = () => {
  console.log(wellcome);
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
};

const gameEngine = (description, genPairQuestionAndAnswer) => {
  console.log(wellcome);
  console.log(description, newLine);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!${newLine}`);
  for (let i = 0; i < roundCounts; i += 1) {
    const PairQuestionAndAnswer = genPairQuestionAndAnswer();
    const question = car(PairQuestionAndAnswer);
    const rightAnswer = cdr(PairQuestionAndAnswer);
    const userAnswer = readlineSync.question(`Question: ${question}${newLine}Your answer: `);
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameEngine;
