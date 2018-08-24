import random from 'random';
import GameEngine from '../game-engine';

const config = {
  description: 'What is the result of the expression?',
};

const operations = [
  {
    fn: (a, b) => a + b,
    operation: '+',
  },
  {
    fn: (a, b) => a - b,
    operation: '-',
  },
  {
    fn: (a, b) => a * b,
    operation: '*',
  },
];

const game = () => {
  const num1 = random.int(0, 10);
  const num2 = random.int(0, 10);
  const {
    operation,
    fn,
  } = operations[random.int(0, operations.length - 1)];
  const question = `${num1} ${operation} ${num2}`;
  const answer = fn(num1, num2).toString();

  return {
    question,
    answer,
  };
};

export default () => GameEngine(game, config);
