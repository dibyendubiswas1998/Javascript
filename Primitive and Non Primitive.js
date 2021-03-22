/*
    JavaScript provides different data types to hold different types of values. There are two types 
    of data types in JavaScript:

    1. Primitive values
    2. Non-primitive values (object references)

    Primitive Data Types:
        In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object 
        and has no methods. There are 7 primitive data types: string, number, bigint, boolean, undefined,
        symbol, and null.

        All primitives are immutable, i.e., they cannot be altered. It is important not to confuse 
        a primitive itself with a variable assigned a primitive value. The variable may be 
        reassigned a new value, but the existing value can not be changed in the ways that objects, 
        arrays, and functions can be altered.


*/
// Example-01:
// Using a string method doesn't mutate the string
var bar = "baz";
console.log(bar);               // baz
bar.toUpperCase();
console.log(bar);               // baz

// Using an array method mutates the array
var foo = [];
console.log(foo);               // []
foo.push("plugh");
console.log(foo);               // ["plugh"]

// Assignment gives the primitive a new (not a mutated) value
bar = bar.toUpperCase();       // BAZ
console.log(bar);


// Example-02:
/*
    Primitives are known as being immutable data types because there is no way to change a primitive 
    value once it gets created.
*/
var str = "Dibyendu Biswas";
str[1] = "Okay javascript";
console.log(str); // Dibyendu Biswas


// Example-03:
/*
    Primitives are compared by value. Two values are strictly equal if they have the same value.
*/
var var1 = 10;
var var2 = 10;
console.log(var1 === var2); // true

let a1 = 100;
let a2 = 100;
console.log(a1 === a2); // true

var st1 = "This is Me";
var st2 = "This is Me";
var st3 = "This is not Me";
console.log(st1 === st2); // true
console.log(st1 === st3); // false
console.log(st2 === st3); // false




/*
    Non-Primitive Data Types:
        Javascript has 3 data types that are passed by reference: Array, Function, and Object. 
        These are all technically Objects, so we’ll refer to them collectively as Objects.
        Non-primitive values are mutable data types.
*/

// Example-01:
/*
    Non-primitive values are mutable data types. The value of an object can be changed after 
    it gets created.
*/
var arr = [10, 20, 30, 40, 50];
arr[0] = 100;
arr[1] = 200;
console.log(arr); // [100, 200, 30, 40, 50]

// Example-02:
/*
    Objects are not compared by value. This means that even if two objects have the same properties 
    and values, they are not strictly equal. Same goes for arrays. Even if they have the same 
    elements that are in the same order, they are not strictly equal.
*/
var obj1 = {
    nm: "Dibyendu",
    lm: "Biswas",
};
var obj2 = {
    nm: "Dibyendu",
    lm: "Biswas",
};
console.log(obj1 === obj2); // false

var ar1 = [10, 20, 30];
var ar2 = [10, 20, 30];
console.log(ar1 === ar2); // false


// Example-03:
/*
    Non primitive values can also be referred to as reference types because they are being compared 
    by reference instead of value. Two objects are only strictly equal if they refer to the same 
    underlying object.

    You can check if two objects are the same by doing a deep equals comparison to go through each 
    of the properties to determine if two objects have the exact same properties.
*/
var obj1 = {
    nm: "Dibyendu",
    lm: "Biswas",
};
var obj2 = {
    nm: "Dibyendu",
    lm: "Biswas",
};
var obj3 = obj2;
console.log(obj3 === obj2); // true



//  https://developer.mozilla.org/en-US/docs/Glossary/Primitive
//  https://medium.com/@junshengpierre/javascript-primitive-values-object-references-361cfc1cbfb0
//  https://www.sitepoint.com/immutability-javascript/
//  https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0