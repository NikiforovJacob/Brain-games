#!/usr/bin/env node
import readlineSync from 'readline-sync';

const dialogIsEven = () => {
  console.log('Wellcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
  const ansverName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${ansverName}!\n`);
  for (let i = 0; i < 3; i++) {
    const randomInit = Math.round(Math.random() * 10);
    const rightAnsver = (randomInit % 2 === 0 ? 'yes' : 'no');
    const ansverIsEven = readlineSync.question(`Question: ${randomInit}\nYour answer: `);
    if (ansverIsEven === rightAnsver) {
      console.log('Correct!');
    } else {
      console.log(`'${ansverIsEven}' is wrong answer ;(. Correct answer was '${rightAnsver}'.\nLet's try again, ${ansverName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${ansverName}!`);
};


dialogIsEven();
