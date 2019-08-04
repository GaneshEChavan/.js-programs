function bubble_sort(array) {
    let temporary = 0;
    let startTime = new Date();
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                temporary = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temporary;
            }
        }
    }
    let endTime = new Date();
    return [array, (endTime - startTime) + ' seconds'];
}
module.exports = bubble_sort;