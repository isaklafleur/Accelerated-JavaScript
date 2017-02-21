'use strict';

/*
var test1 = 5.5
console.log(typeof test1)
// => number

var test2 = NaN;
console.log(typeof test2);

var test3 = undefined;
console.log(typeof test3);

var test4 = undefined;
console.log(typeof test4);

// Objects
var test5 = {
    name: 'Isak'
};
console.log(test5.name);
*/

function calc1() {
    console.log('inside the function calc1');
};
calc1();

var calc2 = function () {
    console.log('inside the function calc2')
};
calc2();

function calc3() {
    return 'inside the function calc3';
};
calc3();
var returned1 = calc3();
console.log(returned1);

function calc4(number1, number2) {
    return number1 + number2
}

var returned2 = calc4(1,1);
console.log(returned2)

var calculator = calc4;
console.log(calculator(10,15));

