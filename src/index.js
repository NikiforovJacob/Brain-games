import readlineSync from 'readline-sync';

export const dialog =() =>{
    console.log('Wellcome to Brain Games!');
    const ansverName = readlineSync.question('May I have your name?');
    console.log(`Hello, ${ansverName}!`);
};

