const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});
let [row,column]=[0,0];
rl.question('Enter no of rows  >', (rows)=>{
      row = parseInt(rows);
      rl.question('Enter no of columns  >', (columns)=>{
          column = parseInt(columns);
          console.log(twoDArray(row,column));
          rl.close();
      })
})
function twoDArray(R, C) {
    let count = 0;
    let array = [[], []];
    let txt = ""
    for (var i = 0; i < R; i++) {
        for (var j = 0; j < C; j++) {
            txt += `${array[[i][j]] = count++} `;

        }
        
    }
    return `${txt} \n`;
}