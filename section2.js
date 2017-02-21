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


// if - 0/null is treated as false.
// if - 1 or any string or number is treatet as true.

var luckyNumber = 8;

switch (luckyNumber) {
    case 1:
        console.log('Is 1');
        break;
    case 8:
        console.log('Is 8');
        break;
    default:
        console.log('Not a lucky number');
        break
}


for (var i = 0; i < 5; i++) {
    if (i === 1) {
        continue
    }
    console.log(i);
}


//While loop
var number = 5;

while(number < 7) {
    console.log(number);
    number++;
}
//
var condition = true;
var i = 2;

while(condition) {
    if (i === 3) {
        condition = false;
    }
    console.log(i);
    i++;
}

// do loop
var condition = false;

do {
    console.log('Executed');
}
while (condition);

// Javascript has issues with floating numbers, so need to use .toFixed
var a = 3.3;
var b = 2.2;

console.log( (a * b).toFixed(3));

console.log(null == undefined);
// => true


var a = 5;
var b = 5;

// Long version
if (a === b) {
    console.log('Equal');
} else {
    console.log('Not Equal');
}

// Short version

console.log(a === b ? 'Equal' : 'Not Equal');



// Primitive Types (are copied)
var a = 5;
console.log(a);
var b = a;
a = 6;
console.log(b);
console.log(a);



// Reference Types (are not copied)
var array = [1,2,3];
console.log(typeof array);
var anotherArray = array;
console.log(array);
console.log(anotherArray);

// adding to same array
array.push(4);
console.log(array);
console.log(anotherArray);

// Creating a new array!
array = [ 'a', 'b' ];
console.log(array);
console.log(anotherArray);


// Global Scope (Window) and Local Scope (inside a function)
// Not possible to use variable defined in the local scope in the global scope.

var test = 'Global Scope';

function localScope() {
    var test = 'Local scope';
    console.log(test);
}

localScope();
console.log(test);
*/
