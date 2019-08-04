/*    10. Find the Fewest Notes to be returned for Vending Machine
        a. Desc -> There is 1, 2, 5, 10, 50, 100, 500 and 1000 Rs Notes which can be 
           returned by Vending Machine. Write a Program to calculate the minimum number of 
           Notes as well as the Notes to be returned by the Vending Machine as a Change
        b. I/P -> read the Change in Rs to be returned by the Vending Machine
        c. Logic -> Use Recursion and check for largest value of the Note to return change 
           to get to minimum number of Notes. 
        d. O/P-> Two Outputs - one the number of minimum Note needed to give the change and
           second list of Rs Notes that would given in the Change 
*/


let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("Enter the amount you want change >", (userValue) => {
    enteredAmount = parseInt(userValue);
    console.log(notesCount(enteredAmount));
    readline.close();
})
let index = 0;
let currencyAvailable = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
let txt = "";
function notesCount(amount) {
    if (index < currencyAvailable.length) {
        let remain = amount % currencyAvailable[index];
        let notes = parseInt(amount / currencyAvailable[index]);
        txt += `${notes} notes of ${currencyAvailable[index]} \n`;
        index++;
        notesCount(remain);
    }
    return (txt);
}



