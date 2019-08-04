const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("Enter number of coupons to generate below 11  >", count=>{
    count = parseInt(count);
    console.log(coupon_generate(count));
    rl.close();
});
function coupon_generate(coupons) {
    let array = [];
    if (coupons>10){
        return "invalid input";
    }
    else{
        for (let i = 0; i < coupons; i++) {
            let num = parseInt(Math.random() * 11)
            if (array.length == 0) {
                array.push(num);
            }
            else if (array.includes(num) == true) {
                i--;
            }
            else {
                array.push(num);
            }
        }
    }
    
    return array ;
};