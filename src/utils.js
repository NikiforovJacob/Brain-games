const randomNum = (min, max) => Math.round(Math.random() * (max - min)) + min;
export default randomNum;

export const cons = (x, y) => f => f(x, y);
export const car = pair => pair(x => x);
export const cdr = pair => pair((x, y) => y);

export const generationPairQuestionAndBinaryAnswer = (minNum, maxNum, isEven) => () => {
  const question = String(randomNum(minNum, maxNum));
  const rightAnswer = (isEven(question) ? 'yes' : 'no');
  return cons(question, rightAnswer);
};
