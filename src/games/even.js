import random from 'random';
import readlineSync from 'readline-sync';

const isEven = num => num % 2 === 0;

export default () => {
  const roundsCount = 3;

  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');

  const username = readlineSync.question('\nMay I have your name? ', {
    defaultInput: 'anonymous',
  });

  console.log(`Hello, ${username}!\n`);

  for (let i = 0; i < roundsCount; i += 1) {
    const question = random.int(1, 10);
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    console.log('Question:', question);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`\n"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${username}!`);

      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${username}!`);
};
