
// Example 1:----
{
    var a = 10;
    var b = 20
    let c = 200;
    console.log(a);
    console.log(b);
    console.log(c);
}


// Example 2:----
const b = 10;
{
    var a = 200;
    const b = 100;
    let c = 50;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(b);



// Example 3:----
{
    var a = 10;
    let b = 20;
    {
        var a = 20;
        let b = 30;
        console.log(a);
        console.log(b);
    }
    console.log(a);
    console.log(b);
}

