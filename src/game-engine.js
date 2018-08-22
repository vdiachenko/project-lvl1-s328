import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (game) => {
  let gameData = game();

  console.log('Welcome to the Brain Games!');
  console.log(gameData.description);

  const username = readlineSync.question('\nMay I have your name? ', {
    defaultInput: 'anonymous',
  });

  console.log(`Hello, ${username}!\n`);

  for (let i = 0; i < roundsCount; i += 1) {
    gameData = game();

    console.log('Question:', gameData.question);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== gameData.answer) {
      console.log(`\n"${answer}" is wrong answer ;(. Correct answer was "${gameData.answer}".`);
      console.log(`Let's try again, ${username}!`);

      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${username}!`);
};
