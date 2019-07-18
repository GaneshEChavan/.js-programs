const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('amount to be credited  ', (val) => {
    var amount = parseFloat(val);
});

rl.question('number of years  ', (valu) => {
    var years = parseFloat(valu);
});

rl.question('rate of interet  ', (value) => {
    var rate = parseFloat(value);
});

rl.question('type 1 for compound interest, 2 for simple interest', cases => {
    cases = parseInt(cases)
    switch (cases) {
        case 1:
            /*let years = rl.questionfloat('years for which invested')
            let rate = rl.questionfloat('enter rate of interest')*/

            let rateCalc = Math.pow((1 + (rate / 100)), years)
            let compoundInterest = amount * (rateCalc - 1);

            console.log(`${compoundInterest.toFixed(2)} per year`);

        case 2:  
            let simpleInterest = ((amount * years * rate) / 100);

            console.log(simpleInterest.toFixed(2) + " per year");


    }
});
