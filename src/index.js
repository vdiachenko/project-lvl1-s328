import readlineSync from 'readline-sync';

export default () => {
    const username = readlineSync.question('May I have your name? ');

    if (username) {
        console.log(`Hello, ${username}!`);
    }
}