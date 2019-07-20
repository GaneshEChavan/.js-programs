let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let number = 21;
let i = 0;
let j = array.length;
function Binary_Search(i,j){
var midTerm = parseInt((i + j) / 2);
return  (number == array[midTerm]) ? console.log(` ${number} is present`) 
       :(number > array[midTerm]) ? Binary_Search (i = midTerm + 1,j)
       :(number < array[midTerm]) ? Binary_Search (i,j = midTerm - 1)
       :console.log(` ${number} is not present`) 
}
Binary_Search(i,j)


//let string = "The sort order can be either alphabetic or numeric";

