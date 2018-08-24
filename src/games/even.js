import random from 'random';
import gameEngine from '../game-engine';

const isEven = num => num % 2 === 0;
const description = 'Answer "yes" if number even otherwise answer "no".';

const game = () => {
  const question = random.int(1, 10);
  const answer = isEven(question) ? 'yes' : 'no';

  return {
    question,
    answer,
  };
};

export default () => gameEngine(game, description);
