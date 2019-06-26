import readlineSync from 'readline-sync';
import { car, cdr } from './utils';

const roundCounts = 3;
const newLine = '\n';
const parting = `Mathematical practice makes your brain obedient.${newLine}See you soon! (=`;

export const dialog = (games) => {
  console.log('Wellcome to the Brain Games!');
  const name = readlineSync.question(`May I have your name?${newLine}`);
  console.log(`Hello, ${name}!${newLine}Let's begin!${newLine}We have ${games.length} games. Every game has ${roundCounts} rounds. If you give right answer on any offered question it lets you go to the next round otherwise game over, which reports message with correct answer.`);
  const gameChoice = () => {
    const gamesNames = ['Calc', 'Even', 'GCD', 'Prime', 'Progression'];
    const index = readlineSync.keyInSelect(gamesNames, 'Which game?');
    if (index < 0) {
      console.log(parting);
      return;
    }
    games[index](name);
    if (readlineSync.keyInYN('Do you want to play more?')) {
      gameChoice();
    } else {
      console.log(parting);
    }
  };
  gameChoice();
};

const gameEngine = (name, description, generationPairQuestionAndAnswer) => {
  console.log(description, newLine);
  for (let i = 0; i < roundCounts; i += 1) {
    const pairQuestionAndAnswer = generationPairQuestionAndAnswer();
    const question = car(pairQuestionAndAnswer);
    const rightAnswer = cdr(pairQuestionAndAnswer);
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
