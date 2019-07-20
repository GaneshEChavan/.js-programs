/*var a=process.argv[2];
var v = process.argv;
var n=process.argv.length;
var arr= [];
for(var i = 2;i<process.argv.length;i++){
    console.log(v[i]);
    arr.push(v[i]);
}
console.log(arr)*/
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter numbers to check possibility  >', (argument) => {
    //array = val;
   const argument = process.argv.slice(2);
   console.log(argument);
readline.close();
});
