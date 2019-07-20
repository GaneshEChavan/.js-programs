const readline = require('readline').createInterface({
    input: process.stdin,
    output:process.stdout
});
readline.question('Enter string to check palindrome  >', text => {
    txt = text ;
    console.log(palindrome(txt));
    readline.close();
});
function palindrome(str) {
    let flag = false;
    ( str.split("") == str.split('').reverse().join()) ? flag = true : flag = false ;
    return ((flag == true) ?  " It's Palindrome" : " It's not Palindrome ");    
};