/*  PROBLEM STATEMENT >
 Write a program WindChill.js that takes two double command-line arguments t and v and 
prints the wind chill. Use Math.pow(a, b) to compute ab. Given the temperature t 
(in Fahrenheit) and the wind speed v (in miles per hour), the National Weather Service
 defines the effective temperature (the wind chill) to be:
  
 w = 35.74 + 0.6215t + (0.4275t-35.75)v^0.16
Note: the formula is not valid if t is larger than 50 in absolute value or if v is larger
 than 120 or less than 3 (you may assume that the values you get are in that range).*/


const readline = require("readline").createInterface(process.stdin, process.stdout);
readline.question('Enter Temperature must below 50 farheneit  >', userInput => {
    temperature = parseInt(userInput);
    readline.question('Enter Wind speed must between 3 to 120 mph  >', userInput => {
        windSpeed = parseInt(userInput);
        console.log(windchill(temperature, windSpeed));
        readline.close();
    });
});
let windchill = (temp, speed) => {

    if (temp <= 50 && speed < 120 && speed > 3) {
        return (35.74 + (0.6215 * temp) + (((0.4275 * temp) - 35.75) * (Math.pow(speed, 0.16))));
    }
        return "Invalid Inputs";
    }

