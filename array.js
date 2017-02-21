// ======================
// ARRAY
// ======================

/* eslint-disable no-alert, no-console */

const testArray = [1, 2, 3, 4];
//testArray[1] = 100;
//testArray[3] = 200;
//console.log(testArray.length);
//console.log(testArray[1]);


testArray.forEach(function(element) {
    console.log(element);
});

// push - add an item in the end of the array.
testArray.push(4);
console.log(testArray);

// pop - remove the last item of the array.
testArray.pop();
console.log(testArray);

// shift - remove the first item of the array
testArray.shift();
console.log(testArray);

// unshift - add an item in the beginning of the array.
testArray.unshift(1);
testArray.unshift('new');
console.log(testArray);

// indexOf
console.log(testArray.indexOf('new'));

// changing value of first element ('new') to 'old'
testArray[testArray.indexOf('new')] = 'old';
console.log(testArray);

// slice - start splicing from element 2
var newArray = testArray.slice(2,4);
console.log(newArray);

// filter - and return the elements according to a defined filter
console.log(testArray.filter(function(value) {
    return value > 2;
}));

// map - 
console.log(testArray.map(function(value) {
    return value * 2;
}));