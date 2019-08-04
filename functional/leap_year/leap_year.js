const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});
rl.question('Enter Year   >>', (year)=>{
  year = parseInt(year);
  console.log(leapYear(year));
  rl.close();  
})
function leapYear(check){
return ((check%4)==0) ? `${check} is Leap Year` :`${check} is not Leap Year`;
}
