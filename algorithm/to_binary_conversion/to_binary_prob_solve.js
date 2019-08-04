const readline = require('readline').createInterface({
    input : process.stdin,
    output: process.stdout
});
readline.question('Enter the Decimal to be converted to Binary', (val)=>{
 val = parseInt(val);
 to_binary(val);
 console.log(reverse());
 readline.close();
});
var txt = "";
function to_binary(decimal){
    if (decimal > 0) {
        txt += `${number % 2}`;
        to_binary(parseInt(number /= 2));
    }
}
function reverse(txt){
    let text = txt.split('').reverse().join();
        for (let i = 0; i < text.length; i++) {
              text.replace(',', '')
        }
        return text ;
}