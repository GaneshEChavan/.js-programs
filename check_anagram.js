/*const statementFirst = "rail safety";
   const statementSecond = "fairy tales";

   let arr1 = statementFirst.split("").sort();
   let arr2 = statementSecond.split("").sort();

   var count = 0;

   if (arr1.length == arr2.length) {

       for (let i = 0; i < arr1.length; i++) {

           (arr1[i] == arr2[i]) ? count++ : "Not Anagram";

       }
       (count == arr1.length) ? console.log("Anagram") : console.log("Not Anagram");
   }
   else{
       console.log("Not Anagram")
   }*/


// Solve by using forEach method (ES6)

const statementFirst = "rail safety";
const statementSecond = "fairy tales";

let arr1 = statementFirst.split("").sort();
let arr2 = statementSecond.split("").sort();

(arr1.forEach((element) => {
    element == arr2[index]
});)
