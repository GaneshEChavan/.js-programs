const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Enter the Fahrenheit value to convert in celcius > ', Fahrenheit => {
    Fahrenheit = parseInt(Fahrenheit);
    console.log(toCelcius(Fahrenheit));
    readline.close();
});

function toCelcius(fahrenheitValue) {
    var tempCheck = ((fahrenheitValue - 32) * (5 / 9));
    return (tempCheck);
}
