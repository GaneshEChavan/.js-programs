/*
    Write a Util Static Function to calculate monthlyPayment that reads in three command
    line arguments P, Y, and R and calculates the monthly payments you would have to make
    over Y years to pay off a P principal loan amount at R per cent interest compounded 
    monthly. The formula is The formula is 
    Compound Interest = P*(1+(R/100)^Y);
    Simple Interest = PYR/100 
*/
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
let [amount, years, rate] = [0, 0, 0];
readline.question('amount to be credited  ', (userInput) => {
    amount = parseFloat(userInput);
    readline.question('number of years  ', (userInput) => {
        years = parseFloat(userInput);
        readline.question('rate of interet  ', (userInput) => {
            rate = parseFloat(userInput);
            readline.question('type 1 for compound interest, 2 for simple interest', userChoice => {
                userChoice = parseInt(userChoice)
                switch (userChoice) {
                    case 1:  
                        let rateCalc = Math.pow((1 + (rate / 100)), years)
                        let compoundInterest = amount * (rateCalc - 1);
            
                        console.log(`${compoundInterest.toFixed(2)} per year`);
                        break;
            
                    case 2:  
                        let simpleInterest = ((amount * years * rate) / 100);
            
                        console.log(simpleInterest.toFixed(2) + " per year");
                        break;
                    default: console.log('no choice');
                    
                }
                rl.close();
            });
        });
    });
});





