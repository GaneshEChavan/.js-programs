var array = [84, 54, 28, 67, 19, 83, 256, 483, 2, 954, 1];
var temporary = 0;
// cases => 1 > insertion sort
//          2 > bubble sort
//          3 > selection sort  
var cases = 2;

switch (cases) {
    case 1:
        var startTime = new Date();
        for (let i = 1; i < array.length; i++) {
            for (let j = 0; j < i; j++) {
                if (array[i] < array[j]) {
                    temporary = array[i];
                    array[i] = array[j];
                    array[j] = temporary;
                }
            }
        }
        var endTime = new Date();
        console.log(array, (endTime - startTime));
        break;

    case 2:
        var
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (array[j + 1] < array[j]) {
                    temporary = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temporary;
                }
            }
        }
        console.log(array);
        break;

    case 3:
        for (let i = 0; i < array.length; i++) {
            let select = i;
            for (var j = i + 1; j < array.length; j++) {
                if (array[j] < array[select]) {
                    select = j;
                }
            }
            temporary = array[i];
            array[i] = array[select];
            array[select] = temporary;
        }
        console.log(array);
        break;
    default:
        console.log("Not proper input")
}