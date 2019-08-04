const argument = process.argv;
const list = argument.slice(2).sort();

const readline = require('readline').createInterface(process.stdin,process.stdout);
readline.question('Enter the numbr to be checked in provided list  >', userValue =>{
    checkValue = userValue;
    console.log(binarySearch(startIndex,endIndx,checkValue,list));
    readline.close();
});
let startIndex = 0;
let endIndx = list.length-1;
console.log(list);
function binarySearch(startIndex,endIndx,check,list){
    let midTerm = parseInt((startIndex+endIndx)/2);
    if (startIndex > endIndx) return (`${check} is not in list`)
       return (list[midTerm] == check) ? (`${check} is present in list`)
          :(check < list[midTerm]) ?  binarySearch(startIndex,midTerm-1,check,list)
          :(check > list[midTerm]) ? binarySearch(midTerm+1,endIndx,check,list)
          :(`${check} is not present`)
}
