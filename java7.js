/*3.şekilde fonksiyon yazma metodu yolu:arrow fonksiyon*/


/*
const A = (bottom,top)=>bottom**top;

console.log(A(2,3));*/

/*
const write = ()=> console.log("hi");

console.log(write);*/

/*
const write2 = (x) => console.log(x);

console.log(write2("omg"));*/

// console.log(new Date().getFullYear());
/*
const age = (birthday)=>(new Date().getFullYear()-birthday);*/

// console.log(age(1997));

// yas = age(1997)

// console.log(`dear your age is ${yas}`);

/*yaş için prompt yap bu şekil daha zor ve daha güzel bence*/

const year = Number(prompt("enter your birth year"));

const age = tarih => new Date().getFullYear()-year; /*burada tarih yerine istediğimiz şeyi yazabiliriz*/

console.log(age(year));
console.log(`your age is ${age(year)}`);
console.log("your age is",age(year));

/*süslü açarsak muhakkak return kullanmalıyız 3.fonksiyon yazma metodunda*/

// pi*squareofr
/*
R = Number(prompt("enter r value"))
const area = (r)=>(Math.PI*(r**2));

console.log(area(R));
*/

/* */
/*
const r = Number(prompt("enter r value"));
const h = Number(prompt("enter h value"));

const calculate = (r,h)=>Math.PI*(r**2)*h;

console.log(calculate(r,h).toFixed(0));

console.log(Math.round(calculate(r, h))); /*roundun kullanımına dikkat et*/

