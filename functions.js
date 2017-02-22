// ======================================================
// FUNCTIONS - CLOSURES, IIFEs, Built in function methods
// ======================================================

/* eslint-disable no-alert, no-console */
/*
function generator(input) {
    var number = input;
    // an anonymous function (inside an another function is a closure)
    return function() {
        return number * 2;
    };
}

var calc = generator(900);
var calcAnother = generator(1000);
console.log(calc());
*/

// =============================================

// Immediately-Invoked Function Expression (IIFE)
/*
var obj = {};

(function calc() {
    obj.name = 'Isak';
})(obj);

console.log(obj);
*/

// =============================================
/*
function message(message) {
    console.log(message);
    console.log(arguments);
    console.log(arguments[2])
    console.log(arguments.length);
}

message('Hello!', 10);
*/

/*
function message(message, numbers) {
    console.log(message);
}

var msg = message;

message(msg.name);
message(msg.length);
*/
/*
function message(message) {
    console.log(this.name);
}
message();
*/