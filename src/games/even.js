import random from 'random';
import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;
const isEven = num => num % 2 === 0;

const messages = {
  welcome: 'Welcome to the Brain Games!',
  description: 'Answer "yes" if number even otherwise answer "no".',
  error: '"%s" is wrong answer ;(. Correct answer was "%s".\nLet\'s try again, %s!',
  success: 'Correct!',
  congratulations: 'Congratulations, %s!',
};

export default () => {
  let currentRound = 0;
  let passed = false;

  console.log(`${messages.welcome}\n${messages.description}\n`);

  const username = readlineSync.question('May I have your name? ', {
    defaultInput: 'anonymous',
  });

  console.log(`Hello, ${username}!\n`);

  while (currentRound < ROUNDS_COUNT) {
    const num = random.int(1, 10);
    currentRound += 1;

    console.log('Question:', num);

    const answer = readlineSync.question('Your answer: ');

    if (answer === 'yes' && !isEven(num)) {
      console.log(messages.error, 'yes', 'no', username);
      passed = false;
      break;
    } else if (answer === 'no' && isEven(num)) {
      console.log(messages.error, 'no', 'yes', username);
      passed = false;
      break;
    } else {
      console.log(messages.success);
      passed = true;
    }
  }

  if (passed) {
    console.log(messages.congratulations, username);
  }
};
