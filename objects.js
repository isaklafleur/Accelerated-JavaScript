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



var person = {
    name: 'Isak',
    age: 34
};

Object.prototype.greet = function() {
    console.log('Hello there, I am ' + this.name + '!');
};

var isak = Object.create(person);
var anna = Object.create(person);
//anna.name = 'Anna'; // if I remove the name property for anna then it will go up the property chain and find the name of person => 'Isak'

// Goes up in the Protoype chain
//isak.greet();
//anna.greet();

console.log(anna.__proto__ == person); //true
console.log(anna.__proto__.__proto__ == Object.prototype); //true
console.log(Object.getPrototypeOf(anna) == person); //true

/////////////////////////////////////////////////
// CONSTRUCTOR FUNCTIONS
////////////////////////////////////////////////

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor

function Person() {
    this.name = 'Isak';
    this.greet = function() {
        console.log('Hello, I am ' + this.name);
    }

}

Person.prototype.greetGeneral = function() {
    console.log('Hello');
};

// Contructor Function
var person = new Person();
person.name = 'Pelle';
//console.log(person.name);
person.greet();

var anotherPerson = new Person();
anotherPerson.greetGeneral();

console.log(person instanceof Person);



function Person(name, age) {
    this.name = name;
    this.age = age;
}

var isak = new Person('Isak', 34);
console.log(isak);



////////////////////////////////////////////
// SUMMARY 
////////////////////////////////////////////

//First option to create an object
var person1 = {
    name: 'Isak',
    age: 34
};

console.log(person1 instanceof Object);

//Second option to create an object
var person2 = new Object();
person2.name = 'Isak';
person2.age = 34;

console.log(person2 instanceof Object);

//Third option to create an object
var person3 = Object.create(null);
person3.name = 'Isak';
person3.age = 34;

console.log(person3 instanceof Object);

//Forth option to create an object
function Person() {
    this.name = 'Isak';
    this.age = 34;
}

var person4 = new Person();

console.log(person4 instanceof Person);


/////////////////////////////////////////////
// THIS keyword
////////////////////////////////////////////

// http://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind/31922712#31922712
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this


function fn(message) {
    console.log(message + ' ' + this); // this referce to the window object
}

var obj = {
    obfn: fn // now "this"" refere to the object
};

var person = {
    name: 'Isak'
};

obj.obfn();
obj.obfn.bind(this)(); // now referce to the window object again, by using the bind method.
obj.obfn.bind(person.name, 'Hello')(); // now referce to the person object.
obj.obfn.call(person.name, 'Hello'); // is called instantly
obj.obfn.apply(person.name, ['Hello']); // in an apply it is called instantly, but uses an array

*/
/*
var account = {
    cash: 12000,
    _name: 'Default',
    withdraw: function(amount) {
        this.cash -= amount;
        console.log('Withdrew ' + amount + ', new cash reserve is: ' + this.cash);
    }
};
*/
/*
Object.defineProperty(account, 'deposit', {
    value: function(amount) {
        this.cash += amount;
    }
});

account.deposit(3000);
account.withdraw(1000);
*/

// from default, read-only. Need to add writable to true
/*
Object.defineProperty(account, 'name', {
    value: 'ID000-1',
    writable: true
});

console.log(account.name);
account.name = 'ID000-3';
console.log(account.name);
*/
/*
Object.defineProperty(account, 'name', {
    get: function() {
        return this._name;
    },
    set: function(name) {
        if (name === 'Isak') {
            this._name = name;
        }
    }
});

account.name = 'ID000-3';
console.log(account.name);
*/

var person = {
    name: 'Isak',
    age: 34,
    greet: function() {
        console.log('Hello');
    }
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

// delete a property from an object
//delete person.name;

// check if property exist in person object.
console.log('name' in person);

// loop through an object using the for ... of loop
for (var field in person) {
    console.log(person[field]);
}
