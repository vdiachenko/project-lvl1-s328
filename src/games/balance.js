import random from 'random';
import gameEngine from '../game-engine';

const sortByAsc = arr => arr.sort((a, b) => +a - +b);

const getBalancedNumber = (num) => {
  const arr = num.toString().split('');
  const sortedArr = sortByAsc(arr);
  const minIndex = 0;
  const maxIndex = sortedArr.length - 1;
  const min = +sortedArr[minIndex];
  const max = +sortedArr[maxIndex];
  const diff = max - min;
  if (diff <= 1) {
    return sortedArr.join('');
  }

  sortedArr[minIndex] = +min + 1;
  sortedArr[maxIndex] = +max - 1;

  return getBalancedNumber(sortedArr.join(''));
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
