const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('please enter a decimal value to be converted ...', ans => {
    // rl.prompt(true)
    ans = parseInt(ans);
    to_binary(ans);
    let str = ((txt) => {
        let text = txt.split('').reverse().join();
        for (let i = 0; i < text.length; i++) {
           return text.replace(',', '')
        }
    });
     console.log(str());
    rl.close();
})

var txt = " ";
function to_binary(number) {
    if (number > 0) {
        txt += `${number % 2}`;
        to_binary(parseInt(number /= 2));

    }
}

/*function string_reverse(txt) {
    let text = txt.split('').reverse().join();
    for (let i = 0; i < text.length; i++) {
        text.replace(',', '')
    }
}*/

