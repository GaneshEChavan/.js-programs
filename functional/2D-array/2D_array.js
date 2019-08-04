/*  a. Desc -> A library for reading in 2D arrays of integers, doubles, or booleans from 
       standard input and printing them out to standard output.
    b. I/P -> M rows, N Cols, and M * N inputs for 2D Array. Use Java Scanner Class
    c. Logic -> create 2 dimensional array in memory to read in M rows and N cols 
    d. O/P -> Print function to print 2 Dimensional Array. In Java use PrintWriter with 
       OutputStreamWriter to print the output to the screen. 
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let [row, column] = [0, 0];
readline.question('Enter no of rows  >', (userInput) => {
    row = parseInt(userInput);
    readline.question('Enter no of columns  >', (userInput) => {
        column = parseInt(userInput);
        console.log(twoDArray(row, column));
        readline.close();
    })
})


function twoDArray(rows,columns) {
    let count = 0;
    let array = [[], []];
    let txt = ""
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            txt += `${array[[i][j]] = count++}`;
        }
        txt += "\n";
    }
    return txt;
}