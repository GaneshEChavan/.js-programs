const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function converted_value() {
    rl.question('Enter the Fahrenheit value to convert in celcius > ', Fahrenheit => {
        Fahrenheit = parseInt(Fahrenheit);
        toCelcius(Fahrenheit);
        rl.close();
    });
    function toCelcius(fahrenheitValue) {
        var tempCheck = ((fahrenheitValue - 32) * (5 / 9));
      console.log(tempCheck);
    }
    /*let toCelcius =  (fahrenheitValue) => {
        var tempCheck = ((fahrenheitValue - 32) * (5 / 9));
      console.log(tempCheck);*/
}
converted_value();