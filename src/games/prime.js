import random from 'random';
import gameEngine from '../game-engine';

const isPrime = (num) => {
  for (let i = num - 1; i > 1; i -= 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};
const description = 'Is this number prime?';

const game = () => {
  const question = random.int(1, 99);
  const answer = isPrime(question) ? 'yes' : 'no';

  return {
    question,
    answer,
  };
};

export default () => gameEngine(game, description);
