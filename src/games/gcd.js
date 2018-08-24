import random from 'random';
import gameEngine from '../game-engine';

const getGCD = (a, b) => {
  if (a === 0) {
    return b;
  }

  if (b === 0) {
    return a;
  }

  if (a !== b) {
    return a > b ? getGCD(a - b, b) : getGCD(a, b - a);
  }

  return a;
};
const config = {
  description: 'Find the greatest common divisor of given numbers.',
};

const game = () => {
  const num1 = random.int(0, 10);
  const num2 = random.int(0, 10);
  const question = `${num1} ${num2}`;
  const answer = getGCD(num1, num2).toString();

  return {
    question,
    answer,
  };
};

export default () => gameEngine(game, config);
