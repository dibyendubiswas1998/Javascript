// call() method:--------------------------------

// Ex-01:-------
let name = {
    fname: "Dibyendu",
    lname: "Biswas",
    Fullname: function (){
        console.log("Fullname: " + this.fname + " " + this.lname);
    }
};
name.Fullname();

let name2 = {
    fname: "Arko",
    lname: "Biswas",
    Fullname: function (){
        console.log("Fullname: " + this.fname + " " + this.lname);
    },
}
name2.Fullname(); 
/* Above example is not a good way, if we have multiple names then we write same code so --> */

// Ex-02:-------
let name = {
    fname: "Dibyendu",
    lname: "Biswas",
    Fullname: function (){
        console.log("Fullname: " + this.fname + " " + this.lname);
    }
};
name.Fullname();

let name2 = {
    fname: "Arko",
    lname: "Biswas",
}
// use call() method or call function borrowing:
name.Fullname.call(name2);

// Ex-03:-------
let name1 = {
    fname: "Dibyendu",
    lname: "Biswas",
};

let name2 = {
    fname: "YoYo",
    lname: "EEeefff",
}
let Fullname = function (){
    console.log("Fullname: " + this.fname + " " + this.lname);
}

Fullname.call(name1);
Fullname.call(name2); // if we have multiple objects then, we can call all objects using call() method, like this,

// Ex-04:-------
let name1 = {
    fname: "Dibyendu",
    lname: "Biswas",
};

let name2 = {
    fname: "YoYo",
    lname: "EEeefff",
}
let Fullname = function (city="", district="", state="", country=""){
    console.log(`I am ${this.fname} ${this.lname}, live in ${city} ${district} ${state} ${country}`);
}

Fullname.call(name1, "Siliguri", "Darjeeling", "West Bengal", "India"); // arguments are here comma separated
Fullname.call(name2);




// apply():-------------------------------------------------
let name1 = {
    fname: "Dibyendu",
    lname: "Biswas",
};

let name2 = {
    fname: "YoYo",
    lname: "EEeefff",
}
let Fullname = function (city="", district="", state="", country=""){
    console.log(`I am ${this.fname} ${this.lname}, live in ${city}  ${district}  ${state}  ${country}`);
}

Fullname.apply(name1, ["Siliguri", "Darjeeling", "WB", "India"]); // arguments are here array list.
Fullname.apply(name2);

/* In call() method we pass the arguments separated as comma separated, where
   In apply() method we pass the arguments as a form of array
   
   that's the difference between the apply() method and call() method.*/



// // bind() method:-------------------------------------------------
let name1 = {
    fname: "Dibyendu",
    lname: "Biswas",
};

let name2 = {
    fname: "YoYo",
    lname: "EEeefff",
}
let Fullname = function (city="", district="", state="", country=""){
    console.log(`I am ${this.fname} ${this.lname}, live in ${city}  ${district}  ${state}  ${country}`);
}

let full_details1 = Fullname.bind(name1, "Siliguri", "Darjeeling", "WB", "India"); 
full_details1();
// console.log(full_details1);

let full_details2 = Fullname.bind(name2, "Siliguri", "Darjeeling", "WB", "India");
full_details2();
// console.log(full_details2);
