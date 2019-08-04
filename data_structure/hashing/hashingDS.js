let hash = (str, max) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash += str.charCodeAt(i);
    }
    return hash % max;
};
let hashTable = function () {
    let array = [];
    const arrayLimit = 5;
    
    this.print = function () {
        console.log(array);
    }


    this.add = function (key, value) {
        var index = hash(key, arrayLimit);
        if (array[index] === undefined) {
            array[index] = [[key, value]];
        }
        else {
            let inserted = false;
            for (let i = 0; i < array[index].length; i++) {
                if (array[index][i][0] === key) {
                    array[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                array[index].push([key, value]);
            }
        }
    };

    this.remove = function (key) {
        let index = hash(key, arrayLimit);
        if (array[index].length === 1 && array[index][0][0] === key) {
            delete array[index];
        }
        else {
            for (let i = 0; i < array[index]; i++) {
                if (array[index][i][0] === key) {
                    delete array[index][i]
                }
            }
        }
    };

    this.search = function (key) {
        let index = hash(key, arrayLimit);
        if (array[index] === undefined) {
            return undefined;
        }
        else {
            for (let i = 0; i < array[index].length; i++) {
                if (array[index][i][0] === key) {
                    return array[index][i][1];
                }
            }
        }
    };
};
let ht = new hashTable();
ht.add('map', '89756');
ht.add('first', '53756');
ht.add('good', '89756');
ht.add('ola', '79756');
ht.add('yo', '59756');
ht.add('hey', '89556');
ht.add('hello', '89556');
ht.add('hii', '89556');
ht.print();

export modules = hashTable;