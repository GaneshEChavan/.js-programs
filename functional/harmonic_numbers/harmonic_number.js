const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter the value of n for 2^n  >', (value) => {
    value = parseInt(value);
    console.log(harmonic(value));
    rl.close();
});
function harmonic(n) {
    let equal = 1;
    for (let i = 2; i < n; i++) {
        equal += (1 / i);
    }
    return (equal) ;
};

