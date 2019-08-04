let arr = [2, 1, 4, 5, 3, 6, 8, 9, 7];
function insertion_sort() {
    arr.forEach((ele, i) => {
        let a = arr.slice(0, i + 1);
        a.forEach((ell, j) => {
            if (a[i] < a[j]) {
                let temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        })
        arr = arr.map((x, inx) => a[inx] || arr[inx]);

        // arr = a.concat(arr);
    })
    console.log(arr);
}
/*
function insertionSort(){
    for(let i = 1; i < arr.length ; i++){
        for(let j = 0; j < i ;  j++) {
            if(arr[i] < arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
}
insertionSort();*/
insertion_sort();