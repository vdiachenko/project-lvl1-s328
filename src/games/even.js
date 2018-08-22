import random from 'random';
import GameEngine from '../game-engine';

const isEven = num => num % 2 === 0;

const game = () => {
  const question = random.int(1, 10);
  const answer = isEven(question) ? 'yes' : 'no';
  const description = 'Answer "yes" if number even otherwise answer "no".';

  return {
    question,
    answer,
    description,
  };
};

export default () => GameEngine(game);
