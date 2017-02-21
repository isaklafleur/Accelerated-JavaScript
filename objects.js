// ======================
// OBJECT
// ======================

/* eslint-disable no-alert, no-console */
/*
var name = 'Johan';

var person = {
    'first-name': 'Isak',
    age: 34,
    details: {
        hobbies: ['kitesurfing', 'family'],
        location: 'Sweden'
    },
    greet: function() {
        console.log('Hello, I am ' + this.age + ' years old');
    }
};

console.log(person);
console.log(person.name);
console.log(person['name']);

var field = 'name';
console.log(person[field]);

person.greet();
console.log(person.details.hobbies);
console.log(person.details.hobbies[0]);
console.log(typeof person['first-name']);
console.log(person['first-name']);

person['first-name'] = 'Anders';

console.log(person['first-name']);

// use .this keyword inside a functio inside a object to read the property from the object, otherwise it will try to find the variable in the global scope.
person.greet();


var age = 34;

// One way to create an object (preferable!!)
var person1 = {
    name: 'Isak',
    age: 34
};

var person2 = {
    name: 'Isak',
    age: 34
};

// Another way of creating an object 
var anotherPerson = new Object();
anotherPerson.name = 'Pelle';
anotherPerson.age = 30;
console.log(anotherPerson);

var anotherPerson2 = new Object();
anotherPerson2.name = 'Isak';
anotherPerson2.age = 34;
console.log(anotherPerson2 === person1); // false, objects are reference types so cant be compared!
console.log(person2 === person1); // false, objects are reference types so cant be compared!


var age = 34;

// One way to create an object (preferable!!)
var person3 = {
    name: 'Isak',
    age: 34
};

var anotherPerson3 = Object.create(null);
anotherPerson3.name = 'Anna';
console.log(anotherPerson3);

var anotherPerson4 = Object.create(person3);

console.log(anotherPerson4.age);

*/

var person = {
    name: 'Isak',
    age: 34
};

Object.prototype.greet = function() {
    console.log('Hello there, I am ' + this.name + '!');
};

var isak = Object.create(person);
var anna = Object.create(person);
anna.name = 'Anna'; // if I remove the name property for anna then it will go up the property chain and find the name of person => 'Isak'

// Goes up in the Protoype chain
isak.greet();
anna.greet();