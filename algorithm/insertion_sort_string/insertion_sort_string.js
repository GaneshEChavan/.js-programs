let array = ["Himanshu","jumanji","Second","World","Object","Quotes","algorithm"]
let temporary = 0;
let startTime = new Date();
for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
        if (array[i] < array[j]) {
            temporary = array[i];
            array[i] = array[j];
            array[j] = temporary;
        }
    }
}
let endTime = new Date();
console.log(array,(startTime-endTime));