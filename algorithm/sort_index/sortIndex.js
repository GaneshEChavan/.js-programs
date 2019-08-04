const readline = require('readline');
const insertion = require('./insertionsort');
const bubble = require('./bubbleSort');
const selection = require('./selectionSort');
function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    var array = [84, 54, 28, 67, 19, 83, 256, 483, 2, 954, 1];
    let ans;
    rl.question('Enter 1 for insertion 2 for bubble 3 selection 4 for exit ', choice => {
        choice = parseInt(choice);
        switch (choice) {
            case 1: ans = insertion(array);
                console.log(...ans);
                rl.close();
                break;
            case 2: ans = bubble(array);
                console.log(...ans);
                rl.close();
                break;
            case 3: ans = selection(array);
                console.log(...ans);
                rl.close();
                break;
            default:
                rl.close();
        }
    })
}
main();