const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let [amount, years, rate] = [0, 0, 0];
rl.question('amount to be credited  ', (val) => {
    amount = parseFloat(val);
    rl.question('number of years  ', (val) => {
        years = parseFloat(val);
        rl.question('rate of interet  ', (val) => {
            rate = parseFloat(val);
            rl.question('type 1 for compound interest, 2 for simple interest', cases => {
                cases = parseInt(cases)
                switch (cases) {
                    case 1:
                        /*let years = rl.questionfloat('years for which invested')
                        let rate = rl.questionfloat('enter rate of interest')*/
            
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





