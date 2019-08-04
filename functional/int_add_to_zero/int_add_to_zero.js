/*const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter numbers to check possibility  >', (val) => {
    array = [val];
    console.log(check(array));
    readline.close();
});*/
const argument = process.argv.slice(2);
console.log(check(argument));
function check(...arr) {
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 1; j < arr.length - 1; j++) {
            for (let k = 2; k < arr.length; k++) {
                if ((arr[i] + arr[j] + arr[k]) == 0) {
                    return `${arr[i]},${arr[j]},${arr[k]}`
                }
            }
        }
    }
};