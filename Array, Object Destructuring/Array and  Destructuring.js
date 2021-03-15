// Array Destructuring:----------------------------------------------------------------

// Example-01
var arr = [10, 20, 30]
// One by one acess
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

var [a, b, c] = arr;
console.log(a);
console.log(b);
console.log(c)


// Example-02: 
var arr = ['javascript', 3, 'React Js', 3.5]
var [course1, duaration1, course2, duaration2] = arr
console.log(course1);
console.log(duaration1);
console.log(course2);
console.log(duaration2);

// Example-03:
var a,b;
[a, b] = [10, 20]
console.log(a);
console.log(b);

// Example-04:
var a, b;
[a=10, b=20] = [50];
console.log(a); // a = 50
console.log(b); // b = 20

// Example-05:
let [greeting,,,name] = ["Hello", "I" , "am", "Dibyendu"];
console.log(greeting);//"Hello"
console.log(name);//"Sarah"



// Array Passing to a Function:--
// Example-01:

var arr = [10, 20, 30];
function show([val1, val2, val3]){
    console.log(val1);
    console.log(val2);
    console.log(val3);
};
show(arr);

// Example-02:
var arr = [10, 20, 30];
const Show = ([val1, val2, val3]) =>{
    console.log(val1);
    console.log(val2);
    console.log(val3);
};
Show(arr);

// Example-03:
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const show = ([val1, val2, val3, ...rest]) => { // rest operator to print rest of values.
    console.log(val1);
    console.log(val2);
    console.log(val3);
    console.log(rest);
}
show(arr);

// Example-04:
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const show = ([val1, val2, val3, ...rest]) => { // rest operator to print rest of values.
    val1 = 11; // Override.
    console.log(val1);
    console.log(val2);
    console.log(val3);
    console.log(rest);
}
show(arr);



// Nested Array:
// Example-01:
var arr = ['JS', "3 Months", ['Dibyendu', 'Arko']];
var [course, duration, [stu1, stu2]] = arr;
console.log(course);
console.log(duration);
console.log(stu1);
console.log(stu2);

// Example-02:
var arr = ['JS', "3 Months", ['Dibyendu', 'Arko']];
const funct = ([course, duration, [stu1, stu2]]) =>{
    console.log(course);
    console.log(duration);
    console.log(stu1);
    console.log(stu2);
};
funct(arr);




// Object Destructuring:-----
/*
    When you destructuring objects, we use the keys as as variables names. This is how
    javascript knows which properties of the object we want to assign or acess.
*/


// Example-01:
var course = {
    name: "Javascript",
    duration: "3 Months",
    tutor : "Dibyendu",
};
console.log(course.name);
console.log(course.duration);
console.log(course.tutor);


// Example-02:
var course = {
    name: "Javascript",
    duration: "3 Months",
    tutor : "Dibyendu",
};
var {name, duration, tutor} = course;
console.log(name);
console.log(duration);
console.log(tutor);

var {name, duration} = course;
console.log(name);
console.log(duration);

var {name, tutor} = course;
console.log(name);
console.log(tutor);


// Example-03:
var a, b;
({a, b} = {a:10, b:20});
console.log(a);
console.log(b);

// Example-04:
var {a, b} = {a:10, b:30};
console.log(a); // 10
console.log(b); // 30

// Example-05:
var {a, b=100} = {a:10}
console.log(a); // 10
console.log(b); // 100

// Example-06:
var {a=1000, b=50} = {a:10}
console.log(a);
console.log(b);



// Objects passing to a function:
// Example-01:
let obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50,
};
const Func = ({a, b, c, ...rest}) =>{
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(rest);
};
Func(obj);

// Example-02:
let obj = {
    a: 110,
    b: 20,
    c: 30,
    d: 40,
    e: 500,
};
function Show(Z){
    return Z;
}
let x = Show(obj);
let {a, b, c, ...rest} = x;
console.log(a);
console.log(b);
console.log(c);
console.log(rest);


// Nested Object Destructuring:
// Example-01:
let obj = {
    a: 100,
    b: 20,
    c: 30,
    x: {
        x1: 11,
        x2: 12,
        x3: 13,
    },
};
let {a, b, c, ...rest} = obj;
console.log(a);
console.log(b);
console.log(c);
console.log(rest);

let {a, b, c, x:{x1, x2, x3}} = obj;
console.log(a);
console.log(b);
console.log(c);
console.log(x1);
console.log(x2);
console.log(x3);


// Example-02:
let obj = {
    a: 100,
    b: 20,
    c: 30,
    x: {
        x1: 11,
        x2: 12,
        x3: 13,
        x4: 14,
        x5: 15,
    },
};
let {a, b, c, x:{x1, x2, ...rest}} = obj;
console.log(a);
console.log(b);
console.log(x1);
console.log(rest);
