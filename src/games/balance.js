import random from 'random';
import gameEngine from '../game-engine';

const sortByAsc = arr => arr.sort((a, b) => +a - +b);

const getBalancedNumber = (num) => {
  let result;

  const arr = num.toString().split('');

  while (!result) {
    const sortedArr = sortByAsc(arr);
    const minIndex = 0;
    const maxIndex = sortedArr.length - 1;
    const min = +sortedArr[minIndex];
    const max = +sortedArr[maxIndex];

    if (max - min <= 1) {
      result = sortByAsc(sortedArr).join('');
    }

    sortedArr[minIndex] = +min + 1;
    sortedArr[maxIndex] = +max - 1;
  }

  return result;
};
const description = 'Balance the given number.';

const game = () => {
  const num = random.int(10, 99);
  const question = num;
  const answer = getBalancedNumber(num);

  return {
    question,
    answer,
  };
};

export default () => gameEngine(game, description);
