import random from 'random';
import gameEngine from '../game-engine';

const generateProgression = (start, step, length) => {
  const result = [];

  for (let i = 0; i < length; i += 1) {
    result.push(start + step * i);
  }

  return result;
};
const description = 'What number is missing in this progression?';

const game = () => {
  const start = random.int(0, 10);
  const step = random.int(1, 10);
  const length = 10;
  const progression = generateProgression(start, step, length);
  const missingElIndex = random.int(0, progression.length - 1);
  const missingEl = progression[missingElIndex];

  progression[missingElIndex] = '..';

  const question = progression.join(' ');
  const answer = missingEl.toString();

  return {
    question,
    answer,
  };
};

export default () => gameEngine(game, description);
