const readline = require("readline").createInterface(process.stdin, process.stdout);
readline.question('Enter Temperature must below 50 farheneit  >', val => {
    temperature = parseInt(val);
    readline.question('Enter Wind speed must between 3 to 120 mph  >', val => {
        wind_speed = parseInt(val);
        console.log(windchill(temperature, wind_speed));
        readline.close();
    });
});
function windchill(temp, wind) {

    if (temp <= 50 && wind < 120 && wind > 3) {
        return (answer = 35.74 + (0.6215 * temp) + (((0.4275 * temp) - 35.75) * (Math.pow(wind, 0.16))));
    }
    else{
        return "Invalid Inputs";
    }
}
