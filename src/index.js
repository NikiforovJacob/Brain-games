import readlineSync from 'readline-sync';

export const dialog = () => {
  console.log('Wellcome to Brain Games!');
  const ansverName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${ansverName}!`);
};

export const dialogIsEven = () => {
  const wellcome = 'Wellcome to the Brain Games!';
  const conditions = 'Answer "yes" if number even otherwise answer "no".\n';
  const roundCounts = 3;
  console.log(wellcome);
  console.log(conditions);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  for (let i = 0; i < roundCounts; i += 1) {
    const question = Math.round(Math.random() * 10);
    const isEven = number => number % 2 === 0;
    const rightAnsver = (isEven(question) ? 'yes' : 'no');
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

export const gameEngine = (conditions, question2, rightAnsver2) => {
  const wellcome = 'Wellcome to the Brain Games!';
  const roundCounts = 3;
  console.log(wellcome);
  console.log(conditions);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  const question5 = f => f();
  for (let i = 0; i < roundCounts; i += 1) {
    const question = question5(question2);
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    const rightAnsver = rightAnsver2(question);
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
