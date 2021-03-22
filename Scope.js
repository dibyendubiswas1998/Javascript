// Functions Invocation:----------------------------------------------------------------
var x = 1;
a();
b();
console.log(x);

function a(){
    var x = 10;
    console.log(x);
}

function b(){
    var x = 100;
    console.log(x);
}


// window and this keyword:------------------------------------------
var a = 10;
b();
function b(){
    var x = 1000;
}
console.log(a);
console.log(this.a); // 10
console.log(window.a); // 10

// console.log(x); // Error: x is not defined
console.log(this.x); // undefined.


// Scope:--------------------------------
var a = 100; // global variable
function b(){
    var x = 1; // Local variable
    console.log(a); // 100
    console.log(x); // 1
}
b();
console.log(a); // 100
console.log(x); // Error, becz you can't access local variables outside the function b()


// Scope Chain:--------------------------------
function a() {
    var b = 10;
    c();
    function c() {
        console.log(b);
    }
}
a();
