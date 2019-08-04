//const fs = require('fs');


//fs.writeFileSync('index.txt', 'next statement is appended');
//fs.appendFileSync('index.txt', '. this is appended statement')

// import export own files

//const util = require('./hashingDS');

/*function primeNo() {
    let check = (num) => {
        for (let i = 2; i < num; i++) {
            return ((num % i) === 0) ? false : true;
        }
    }
    let finalArray = [];
    for (let j = 3; j < 100; j++) {
        check(j);
        console.log(check);
        if (check() === true) {
            finalArray.push(num);
        }
    }
    return finalArray;

}
console.log(primeNo());*/

const chalk = require('chalk');

console.log(chalk.white.bgRed.bold('success...'))