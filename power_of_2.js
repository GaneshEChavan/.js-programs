const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});
rl.question('Enter power value upto   >', (pow)=>{
    pow = parseInt(pow);
    console.log(powers(pow));
    rl.close();
})
function powers(num) {
    let txt = "";
    for (let i = 0; i < num; i++) {
        txt += `${Math.pow(2, i)}, `;
    }
    return (txt);
};

