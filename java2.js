/*console.log("hello world!");

var a=5;
console.log(a);

{
    console.log(a)
}

console.log(a);*/



/*var a=5;
console.log(a);

{
    var a = 3;
    console.log(a);
}

console.log(a);*/


/*
let a=5;
console.log(a);

{
    console.log(a)
}

console.log(a);*/

/*
let a=5;
console.log(a);

{
    let a = 3;
    console.log(a);
}

console.log(a);*/


/*
let a=5;
console.log(a);

{
    a = 3;
    console.log(a);
}

console.log(a);*/

/*
let a=5;
console.log(a);

{
    let a = 3;
    console.log(a);
}

console.log(a);*/

/*
console.log("js running!")

console.log(3>2);*/

console.log(typeof 0);
console.log(typeof "acar");
console.log(typeof 3.14);
console.log(typeof true);
console.log(typeof (3>2));
console.log(typeof 3);
console.log(typeof "");
console.log(typeof " ");

//let b = prompt("please enter your name");
//console.log(b,typeof b);

//let c = +prompt("enter something");
//console.log(c,typeof c);

/*from right to left read this code below*/ 
//console.log(typeof typeof 42);

// let age;
// console.log(age);

//console.log(mage);
//var mage=40;

console.log("12"*12);
console.log(12=="12");
console.log(12==="12");

let g=0.2+0.1;
console.log(g);

/*type of result gave by code below is string*/
console.log(g.toFixed(2));

/*type of result gave by code below is number*/
console.log(+g.toFixed(2));

let i = "this is a string";
let j = "this is also a string";
let z = `that is a string too`;

console.log(typeof i);
console.log(typeof j);
console.log(typeof z);

let username = "halim";

console.log("hello",username);
console.log(`hello ${username}`);

console.log(username.length);

/* let's define an object called myCar*/
/*very importand code samples*/
const myCar = {

    make:"ford",
    model:"mustang",
    year:1965,
    color:"black"
};

console.log(myCar);
console.log(myCar.make);

myCar.color = "green"

console.log(myCar);

/*very important mistake done intentionally. we get an error from the code belowe*/

/*myCar="ford"*/

/* let's add some properties that we did not define at the beginning. get we an error or not?*/

myCar.age = 100;
console.log(myCar);

/* as it is seen we did not get an error*/

/*let's calculate the real age of the car*/

myCar.age3 = function(current){
    console.log(current-myCar.year)
}

myCar.age3(2022);


console.log(myCar);
