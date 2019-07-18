let readline = require('readline')

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the amount you want change >", (user_value) => {
    user_value = parseInt(user_value);
    console.log(notes_count(user_value));
    rl.close();
})
let i = 0;
let currency_available = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
let txt = "";
function notes_count(amount) {
    if (i < currency_available.length) {
        let remain = amount % currency_available[i];
        let notes = parseInt(amount / currency_available[i]);
        txt += `${notes} notes of ${currency_available[i]} \n`;
        i++;
        notes_count(remain);
    }
    return (txt);
}

