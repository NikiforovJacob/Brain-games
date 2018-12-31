import readlineSync from 'readline-sync';

const wellcome = 'Wellcome to the Brain Games!';
const roundCounts = 3;
const newLine = '\n';
export const dialog = () => {
  console.log(wellcome);
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
};

const gameEngine = (conditions, genQuestionAndAnswerStr) => {
  console.log(wellcome);
  console.log(conditions, newLine);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!${newLine}`);
  for (let i = 0; i < roundCounts; i += 1) {
    const questAndAnswerStr = genQuestionAndAnswerStr();
    const separatorPosition = questAndAnswerStr.indexOf('|');
    const question = questAndAnswerStr.slice(0, separatorPosition);
    const rightAnswer = questAndAnswerStr.slice(separatorPosition + 1, questAndAnswerStr.length);
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
