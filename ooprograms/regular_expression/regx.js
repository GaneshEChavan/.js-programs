const fs = require('fs');
const readline = require('readline').createInterface(process.stdin,process.stdout);

let str = 'Hello John, We have your full name as John Carter in our system. your contact number is +91-9876543210'
readline.question('Enter your Name --->', userValue =>{
    name = userValue;
    readline.question('Enter your full-name--->', userValue =>{
        fullName = userValue;
        readline.question('Enter your mobile number--->', userValue=>{
            number = userValue;
            
            let s = str.replace(/john/i , name);
           // let st = str.replace(/john carter/i , fullName);
            console.log(s);
            readline.close();
        })
    })  
})