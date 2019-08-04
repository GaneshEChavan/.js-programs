/*    >>> Flip Coin and print percentage of Heads and Tails <<<
        a. I/P -> The number of times to Flip Coin. Ensure it is positive integer.
        b. Logic -> Use Random Function to get value between 0 and 1. If < 0.5 then tails
           or heads
        c. O/P -> Percentage of Head vs Tails
 */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter the max. number of tosses...', (userInput) => {
    userInput = parseInt(userInput);
    console.log(tossPercentage(userInput));
    readline.close();
});
function tossPercentage(totalToss) {
    let count = 0;
    let cHead = () => (Math.random() < 0.5) ? 'Heads' : 'Tails';
    for (let i = 0; i <= totalToss; i++) {
        (cHead() === 'Heads') ? count++ : 'move on';
    }
    return ((count / totalToss) * 100);
};
