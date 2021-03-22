// forEach method:---------------------------------------------

// Ex-01:------------
let arrays = [20, 10, 30, 50, 60, 11, 80, 19, 31, 32, 12, 13];

for (let i = 0; i <arrays.length; i++){ // normal case.
    console.log(arrays[i]);
}

arrays.forEach(function(array){
    console.log(array);
});




// filter() method:------------------------------------------------

// Ex-01:--------
let arrays = [20, 10, 30, 50, 60, 11, 80, 19, 31, 32, 12, 13];
let arr = [];

for(let i = 0; i < arrays.length; i++){ // normal case
    if(arrays[i] >= 50){
        arr.push(arrays[i]);
    }
}
console.log(arr);

let result = arrays.filter(arrays => arrays >= 30); // filter() method
console.log(result);

// Ex-02:--------
const companies = [
    {name: 'Company-1', category: 'Finance', start: 1981, end: 2000},
    {name: 'Company-2', category: 'Retail', start: 1981, end: 2010},
    {name: 'Company-3', category: 'IT', start: 1990, end: 2000},
    {name: 'Company-4', category: 'Auto', start: 1975, end: 2020},
    {name: 'Company-5', category: 'Retail', start: 1985, end: 2021},
    {name: 'Company-6', category: 'Finance', start: 2001, end: 2010},
    {name: 'Company-7', category: 'Space', start: 1999, end: 2021},
    {name: 'Company-8', category: 'Reading', start: 2018, end: 2021},
    {name: 'Company-9', category: 'IT', start: 2018, end: 2020},
    {name: 'Company-10', category: 'Space', start: 2005, end: 2019},
]

// Filter Retail companies:--
const Retail_company = companies.filter((vars) => vars.category === 'Retail');
console.log(Retail_company);

// Filter Retail companies 80s:--
const Retail_company_80s = companies.filter((vars) => (vars.category === 'Retail' && vars.start > 1980));
console.log(Retail_company_80s);

// all before 2000s companies:--
const all_before_2000s_company = companies.filter((vars) => (vars.start >= 2000));
console.log(all_before_2000s_company);

// Get companies lasted 10 years or more:--
const lasted_10_years_company = companies.filter((vars) => (vars.end - vars.start >= 10));
console.log(lasted_10_years_company);





// map() method:-----------------------------------------------

// Ex-01:--
let arr = [10, 20, 30, 40, 50, 60];
let new_array = arr.map(function(value) {
    console.log(value);
});

let new_array = arr.map( value =>  value);
console.log(new_array);


// Ex-02:--
let new_array = arr.map(function(value, index) {
    console.log(value, index);
});

let new_array = arr.map( (value, index)=>  `${value} ${index}`);
console.log(new_array);


// Ex-03:--
let new_array = arr.map(function(value) {
    return value;
});
console.log(new_array);
console.log(arr === new_array);


// Ex-04:--
let new_array = arr.map(function(value) {
    value ++;
    // console.log(value);
    return value;
});
console.log(new_array);
console.log(arr);
console.log(arr === new_array);

let new_array = arr.map( value =>  value++);
console.log(new_array);


// Ex-05:--
const companies = [
    {name: 'Company-1', category: 'Finance', start: 1981, end: 2000},
    {name: 'Company-2', category: 'Retail', start: 1981, end: 2010},
    {name: 'Company-3', category: 'IT', start: 1990, end: 2000},
    {name: 'Company-4', category: 'Auto', start: 1975, end: 2020},
    {name: 'Company-5', category: 'Retail', start: 1985, end: 2021},
    {name: 'Company-6', category: 'Finance', start: 2001, end: 2010},
    {name: 'Company-7', category: 'Space', start: 1999, end: 2021},
    {name: 'Company-8', category: 'Reading', start: 2018, end: 2021},
    {name: 'Company-9', category: 'IT', start: 2018, end: 2020},
    {name: 'Company-10', category: 'Space', start: 2005, end: 2019},
]

// create array of company_names:--
const CompanyNames = companies.map(function (company) { // here company is variables
    return company.name;
});
console.log(CompanyNames);

// create array of company_names and start, end:--
const Company_start_end = companies.map(function (company) {
    return `${company.name} [${company.start} - ${company.end}]`
});
console.log(Company_start_end);

// create array of company_names and start, end using arrow function:--
const Company_start_end_arrow = companies.map((company) =>  
    `${company.name} [${company.start} - ${company.end}]`
);
console.log(Company_start_end_arrow);




// sort() method:----------------------------------------------------------------

// Ex-01:--
const companies = [
    {name: 'Company-1', category: 'Finance', start: 1981, end: 2000},
    {name: 'Company-2', category: 'Retail', start: 1981, end: 2010},
    {name: 'Company-3', category: 'IT', start: 1990, end: 2000},
    {name: 'Company-4', category: 'Auto', start: 1975, end: 2020},
    {name: 'Company-5', category: 'Retail', start: 1985, end: 2021},
    {name: 'Company-6', category: 'Finance', start: 2001, end: 2010},
    {name: 'Company-7', category: 'Space', start: 1999, end: 2021},
    {name: 'Company-8', category: 'Reading', start: 2018, end: 2021},
    {name: 'Company-9', category: 'IT', start: 2018, end: 2020},
    {name: 'Company-10', category: 'Space', start: 2005, end: 2019},
]

const sortCompany = companies.sort(function(a, b) {
    if(a.start > b.start){
        return 1;
    }
    else{
        return -1;
    }
});
console.log(sortCompany);


const sortCompany1 = companies.sort((a, b) => (a.end > b.end ? 1 : -1));
console.log(sortCompany1);

const sortCompany2 = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortCompany2);

// Ex-02:--
const array = [1, 10, 2, 5, 19, 26, 12, 16, 3, 9, 7, 4];
const acceding = array.sort((a, b) => a - b);
console.log(acceding);

const descending = array.sort((a, b) => b - a);
console.log(descending);





// reduce() method:------------------------------------------------------------

// Ex-01:--
let nums = [1, 2, 3, 4, 5];
let sum = 0;
for(let i = 0; i < nums.length; i++){ // normal case
    sum = sum + nums[i];
}
console.log(sum);

const result1 = nums.reduce((x, y) =>{ return x + y}, 0); // use reduce() method. here x = 0
console.log(result1);
 
const result2 = nums.reduce((x, y) => x + y, 0); // use reduce() method.  here x = 0
console.log(result2);




// Combined:-------------------

// Ex-01:--
let array = [20, 12, 3, 7, 13, 2, 1, 22, 12, 10];
const combined = array
    .map(arr => arr * 2) // multiply by 2 and get the array
    .filter(arr => arr >= 100) // get the elements which is greater than 100
    .sort((a, b) => a - b) // acceding order
    .reduce((a, b) => a + b, 0) // Sum all of them
console.log(combined);
