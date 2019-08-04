const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
function main() {
    rl.question('please enter a decimal value to be converted ...', ans => {
        ans = parseInt(ans);
        to_binary(ans);
        //console.log(string_reverse());
        rl.close();
    })
    var txt = " ";
    let to_binary = function (number) {
        if (number > 0) {
            txt += `${number % 2}`;
            to_binary(parseInt(number /= 2));
        }
        string_reverse(txt);
    }
    function string_reverse(str) {
        let new_txt
        let text = str.split('').reverse().join();
        for (let i = 0; i < text.length; i++) {
             new_txt = text.replace(',', '')
        }
        console.log(new_txt);
    }
}
main();