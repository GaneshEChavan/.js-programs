function selection_sort(array) {
    let temporary = 0;
    let startTime = new Date();
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
    let endTime = new Date();
    return [array, (endTime - startTime) + "seconds"];
}
module.exports = selection_sort;