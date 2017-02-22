// ============================
// Built-in Objects and Methods
// ============================

/* eslint-disable no-alert, no-console */

/*
setTimeout(function() {
    console.log('Finished!');
}, 2000);
*/

/*
setInterval(function() {
    console.log('Ping!');

}, 500);
*/

/*
var interval = setInterval(function() {
    console.log('ping');
}, 500);

setTimeout(function() {
    clearInterval(interval);
}, 2500);
*/
/*
var a = '5';
console.log(a);
// convert the string to a number
console.log(parseInt(a));

var b = 'FBB';
console.log(b);
console.log(parseInt(b));
console.log(parseInt(b, 16));

var c = 10;
// convert the number to a string
console.log(c.toString());

var d = 10.3;
// convert a number to an integer
console.log(d.toFixed());
// convert a number to float with 3 decimals
console.log(d.toFixed(3));

var string = 'text 123';
var string2 = '    text 123            ';

console.log(string.length);
console.log(string[3]);
console.log(string.charAt(3));
console.log(string.concat(' add testing4567'));
console.log(string.toUpperCase());
console.log(string.split(' ')); //[ 'text', '123' ]
console.log(string2.trim());
*/

/*

var pi = Math.PI;
console.log(pi);

var e = Math.E;
console.log(e);

var a = -3;
console.log(Math.abs(3));

var b = 1.27;
console.log(Math.round(b));
console.log(Math.ceil(b));
console.log(Math.floor(b));

var c = 2;
console.log(Math.exp(c));
console.log(Math.log(c));

console.log(Math.min(1,100,444));
console.log(Math.max(33,323,2323));
console.log(Math.random());
console.log(Math.floor(Math.random() * 100) +1);
*/

/*
var today = new Date();
console.log(today);
console.log(today.toString());

var christmans = new Date(2017, 11, 24);
var christmans2 = new Date('2017/12/24');
console.log(christmans);
console.log(christmans.toString());
console.log(christmans2.toString());
console.log(christmans2.toDateString());

var today2 = new Date();

console.log(today2.getDate());
console.log(today2.getDay());
*/

// Regular Expressions

var string = 'abc';

var pattern = /bc/;

console.log(pattern);
console.log(pattern.exec(string));
console.log(pattern.test(string));
console.log(string.match(pattern));