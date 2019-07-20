const readline = require ('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});
rl.question('Enter the max. number of tosses...', (user_input) => {
    user_input = parseInt(user_input);
    console.log(toss_percentage(user_input));
    rl.close();
});
function toss_percentage(no_of_tosses) {
        let count = 0;
        let cHead = () => {
            return (Math.random() < 0.5) ? 'Heads' : 'Tails';
        };
        for (let i = 0; i <= no_of_tosses; i++) {
        (cHead() === 'Heads') ?  count++ : 'move on' ;  
    }
    return ((count/no_of_tosses)*100);
};
