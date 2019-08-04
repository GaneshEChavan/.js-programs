/*const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});
readline.question('Enter your first text  >', userInput=>{
    statementFirst = userInput ;
    readline.question('Enter your second text   >', userInput=>{
        statementSecond = userInput ;
        let arrayFirst = statementFirst.split("").sort();
        let arraySecond = statementSecond.split("").sort();
        console.log(compare(arrayFirst,arraySecond));
        var count = 0;
        for (let i = 0; i < arrayFirst.length; i++) {
    
            (arrayFirst[i] == (arraySecond[i] || '')) ? count++ : "It's not Anagram";
    
        }
        (count == arrayFirst.length) ? console.log("It's Anagram") : console.log("It's not Anagram");
        readline.close(); 
    })
})*/




// Solve by using forEach method (ES6)
let arr1 = [1,2,3,4,5];
let arr2 = [1,2,3,4,5];

function compare(arr1,arr2){
    let finalArray = [];
    arr1.forEach((element, inx) => {
        if(element === (arr2[inx] )){
            finalArray.push(element);
        }
    });
    console.log(finalArray, arr1)
    if(finalArray.length == arr1.length){
        console.log("It's Anagram") ;
    }
    else{
        console.log("It's not Anagram");
    }
}
compare(arr1,arr2);
