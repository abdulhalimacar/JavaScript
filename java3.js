let x = 0; 
x +=5;
console.log(x);

/*we can define more than one variables on the same line with let by dividing them with comma*/
let a = 5, b=3,c=a*b;
console.log(`c: ${c}`);

username = "halim acar";
let hello = `dear ${username} welcome to XYZ bank`;

console.log(hello);

let hello2 = "dear" +username+ " welcome to QQQ bank";

console.log(hello2);

/*it looks at value only*/
3!==3;

console.log(3!==3);

/*it looks at both the type and value */
3!=="3";

console.log(3!=="3");
console.log(3!==3);

/*
and operator &&
or operator | 
*/ 


console.log(Boolean(" "));
console.log(Boolean("")); 

/*first question 
let num1 = Number(prompt("enter a number"));
let num2 = Number(prompt("enter a number")); */

/*
first = num1 + num2;
second = num1 - num2;
third = num1/num2;
fourth = num1*num2; /*

/*console.log(first,second,third,fourth);*/

/*second path 
console.log(`${num1}x${num2} is ${num1*num2},\n${num1}/${num2} is ${num1/num2}`); */

/*area of the rectangle-second question
one_side = prompt("enter:");
another_side = prompt("enter:");

area_of_rectangle = (`${one_side*another_side}`);

console.log(`area of the rectangle is: ${one_side*another_side}`)*/

/*area of a circle


r = prompt("enter r value please: ");
pi = Math.PI;

console.log(`area of the circle is: ${(r**2)*pi}`);*/


/*
c = +prompt("enter celsius");
F = (c*9/5) +32;
console.log(`${c} celsius is equal to ${F} Fahrenheit`);

Fah = +prompt("entre fahrenheit value:")
cel = (5/9)*(Fah-32);

console.log(`${Fah} Fahrenheit is equal to ${cel.toFixed(2)} celsius`);
*/ 

const today = new Date();
console.log(today);

console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getUTCFullYear());


day = today.getDate();
console.log(`day of the month is ${day}`);
month = today.getMonth();
console.log(`month of the year is ${month+1}`);
year = today.getUTCFullYear()
console.log(`year is ${year}`); 

console.log(today);


/*important reminder
a = "2345";
console.log(a.length);*/

n1 = prompt("enter first number:").toString();
n2 = prompt("enter second number:").toString();
n3 = prompt("enter third number:").toString();

n1_last = n1[n1.length-1];
n2_last = n2[n2.length-1]
n3_last = n3[n3.length-1]

/*
console.log(Boolean(n1==n2==n3));
*/

console.log(Boolean((n1_last==n2_last)|(n1_last==n3_last)|(n2_last==n3_last))); 
