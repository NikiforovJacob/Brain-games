import readlineSync from 'readline-sync';

const wellcome = 'Wellcome to the Brain Games!';
const roundCounts = 3;

export const dialog = () => {
  console.log(wellcome);
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
};

const gameEngine = (conditions, genQuestionAndAnswerStr) => {
  console.log(wellcome);
  console.log(conditions);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  for (let i = 0; i < roundCounts; i += 1) {
    const questAndAnswerStr = genQuestionAndAnswerStr();
    const separatorPosition = questAndAnswerStr.indexOf('|');
    const question = questAndAnswerStr.slice(0, separatorPosition);
    const rightAnsver = questAndAnswerStr.slice(separatorPosition + 1, questAndAnswerStr.length);
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (userAnswer === rightAnsver) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnsver}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameEngine;
