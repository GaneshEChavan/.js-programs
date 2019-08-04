function right_tringle(n){
  for(let i=0;i<n;i++){
    let j=0,str='';
    while(j<i){
      str += '*';
      j++;
    }
    console.log(str);
  }
}
right_tringle(10);

function triangle(m){
  for(let i = 0,j=m; i<m;i++,j--){
    let str = Array(j).join(' ');
    let str1 = Array(i+2).join('* ');
    console.log(str + str1);    
  }
}
triangle(5);

function triangle1(m){
  for(let i = 0,j=m; i<m;i++,j--){
    let str = Array(j).join('-');
    let str1 = Array(i+2).join('* ');
    console.log(str + str1);    
  }
}
triangle1(5);

function produce_stars(n){
  for(let i = 0 ; i < n ; i++){
    let space = '',j=0;
    while(j < n - (i+1)){
      space += ' ';
      j++;
    }
    let star = '';
    let star_inx = 0;
    while(star_inx < (i + 1)){
      star += '*' + ' ';
      star_inx++;
    }
    console.log(space + star);
  }
}
produce_stars(10);

function triangle_star(n) {
  for(let i= 0 ; i < n ; i++ ){
    let left_space = Array( n - (i+1) + 1).join(' ');
    let star = '';
    if ( i === 0 || i === n-1 ) {
      star = Array(i+2).join('* ');
    } else {
      star = '*';
      let star_space = Array(i*2).join(' ');
      star += star_space;
      star += '*';
    }
    console.log(left_space + star);
  }
}
triangle_star(10);
