const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter the values of (a,b,c) of quadratic equation (ax^2+bx+c) >a=...', val => {
    first = parseInt(val);
    readline.question('>b=...', val => {
        second = parseInt(val);
        readline.question('>c=...', val => {
            third = parseInt(val);
            console.log(Quadra(first, second, third));
            readline.close();
        })
    })
});
function Quadra(a, b, c) {
    let sqt = (Math.pow(b, 2)) - (4 * a * c);
    if (sqt < 0) {
        sqt *= (-1);
        let sqrtTerm = Math.sqrt(sqt);
        return `((${-b})+${sqrtTerm}i/${2 * a}) and ((${-b})-${sqrtTerm}i/${2 * a}) are roots`;
    }
    else {
        let sqrtTerm = Math.sqrt(sqt);
        let root1 = (((-b) + sqrtTerm) / (2 * a));
        let root2 = (((-b) - sqrtTerm) / (2 * a));
        return `${root1} and ${root2} are roots`;

    }
};