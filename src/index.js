import readlineSync from 'readline-sync';

export const dialog = () => {
  console.log('Wellcome to Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
};

const gameEngine = (conditions, generateQuestion, generateRightAnsver) => {
  const wellcome = 'Wellcome to the Brain Games!';
  const roundCounts = 3;
  console.log(wellcome);
  console.log(conditions);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  for (let i = 0; i < roundCounts; i += 1) {
    const question = generateQuestion();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    const rightAnsver = generateRightAnsver(question);
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
