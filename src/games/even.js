import gameEngine from '..';

const conditions = 'Answer "yes" if number even otherwise answer "no".\n';
const question = () => Math.round(Math.random() * 100);
const rightAnsver = (questionString) => {
  const isEven = number => number % 2 === 0;
  return isEven(questionString) ? 'yes' : 'no';
};

const startBrainEven = () => gameEngine(conditions, question, rightAnsver);
export default startBrainEven;
