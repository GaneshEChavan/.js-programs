const readline = require('readline').createInterface(process.stdin, process.stdout);
let sortedArray = [];
readline.on('line', (userInput) => {
    sortedArray = userInput.split(" ").sort().map(x => parseInt(x));
    readline.question('Enter the number to be checked in provided list  >', userValue => {
        checkNumber = userValue;

        let startIndex = 0;
        let endIndex = sortedArray.length-1;
        console.log(binarySearch(startIndex, endIndex, checkNumber, sortedArray));
        readline.close();
    });
});
console.log("Enter the list of numbers   >");

function binarySearch(start, end, check, sort) {
    let midTerm = parseInt((start + end) / 2);
    if(start> end) return (` ${check} is not present in list`);
    return (check == sortedArray[midTerm]) ? (` ${check} is present in list`)
        : (check > sortedArray[midTerm]) ?  binarySearch(start = midTerm + 1, end, check, sort)
            : (check < sortedArray[midTerm]) ? binarySearch(start, end = midTerm - 1, check, sort)
                : (` ${check} is not present in list`);
}



//let string = "The sort order can be either alphabetic or numeric";

