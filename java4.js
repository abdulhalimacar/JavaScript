console.log("hi");

/*write a simple programm that will determine whether the input positive,negative or zero*/

/*
const num = prompt("enter a number:")
if(num>0){
    console.log(`${num} is positive`); 
}else if(num==0){
    console.log(`${num} is zero`);
}else{
    console.log(`${num} is negative`);
}
*/
/*
console.log(num, typeof num);*/
/*if you want to get num as a number you have to put plus sign before prompt statement like this: const num=+prompt("enter a number:") */

/*
console.log(Math.PI);
*/

/*write a program that will define the biggest number taken three numbers */

/*
const x = parseInt(prompt("enter"));
const y = parseInt(prompt("enter"));
const z = parseInt(prompt("enter"));

if (x > y && x > z) {
  console.log(`${x} is the biggest number`);
} else if (y > x && y > z) {
  console.log(`${y} is the biggest number`);
} else {
  console.log(`${z} is the biggest number`);
}

note:if we do not put plus sign before prompt we get a wrong error that when we give -5,-6,-7 the programm returns that -7 is the biggest number which is not. */



/*parseInt is a very beautiful approach to solve the problem we have in our code */

// const x = parseInt(prompt("enter"));
// const y = parseInt(prompt("enter"));
// const z = parseInt(prompt("enter"));

// if (x > y && x > z) {
//   console.log(`${x} is the biggest number`);
// } else if (y > x && y > z) {
//   console.log(`${y} is the biggest number`);
// } else {
//   console.log(`${z} is the biggest number`);
// }

/*create a simple calculator */

/*
num1 = parseInt(prompt("no1:"));
num2 = parseInt(prompt("no2:"));
action = prompt("what would you like to do? such as plus or minus:")

if(action=="+"){
    console.log(`${num1+num2}`);
}else if(action=="-"){
    console.log(`${num1-num2}`);
}else if(action=="*"){
    console.log(`${num1*num2}`);
}else if(action=="/"){
    console.log(`${num1/num2}`);
}
*/

/*create a simple calculator with switchcase approach */

/*
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const operator = prompt("Enter the operator (+, -, *, /):");
let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    console.log(`The sum of ${num1} and ${num2} is ${result}`);
    break;
  case "-":
    result = num1 - num2;
    console.log(`The difference between ${num1} and ${num2} is ${result}`);
    break;
  case "*":
    result = num1 * num2;
    console.log(`The product of ${num1} and ${num2} is ${result}`);
    break;
  case "/":
    result = num1 / num2;
    console.log(`The division of ${num1} by ${num2} is ${result}`);
    break;
  default:
    console.log("Invalid operator. Please try again.");
}

*/ 

/*

const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const operator = prompt("Enter the operator (+, -, *, /):");

switch (operator) {
  case "+":
    res = num1 + num2;
    console.log(`The sum of ${num1} and ${num2} is ${res}`);
    break;
  case "-":
    res = num1 - num2;
    console.log(`The difference between ${num1} and ${num2} is ${res}`);
    break;
  case "*":
    res = num1 * num2;
    console.log(`The product of ${num1} and ${num2} is ${res}`);
    break;
  case "/":
    res = num1 / num2;
    console.log(`The division of ${num1} by ${num2} is ${res}`);
    break;
  default:
    console.log("Invalid operator. Please try again.");
}

*/

/*
gun = prompt("enter the day (Monday,Tuesday...)");

switch(gun){
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("InClass");
        break;
    case "Friday":
        console.log("Teamwork");
        break;
    case "Saturday":
        console.log("Inclass+Workshop");
        break;
    case "Sunday":
        console.log("Self-Study");
        break;
    default:
        console.log("Enter a valid day")
    
}

*/ 

/*ternary concept */
/*
const speed = 100;
const message = speed >= 120 ? "fast":"slow";
console.log(message);
*/

/*
const note = 70;
const message = note >= 60 ? "passed":"failed";
console.log(message);
*/

/*
const speed = 70;
const message = speed >= 120 ? "fast":(speed>90?"normal":"slow");
console.log(message);
*/

/*
const age = 22;
const gender = "Male";
const health =true;

age>=18 && gender=="Male" && health ? 
console.log("suitable for military service")
:console.log("not suitable for military");
*/

/*write a program that gives 50% raise in the salary when a person has salary less than minimum wage*/

/*
const salary = parseFloat(prompt("Enter the salary in euros:"));
const increasedSalary = salary < 2000 ? salary * 1.5 : salary;

console.log(`The salary after the increase is ${increasedSalary} euros.`);
*/

