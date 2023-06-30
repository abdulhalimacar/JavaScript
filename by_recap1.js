//FUNCTIONS

/*
const go = function(number){
    return number % 2 ? `${number} is odd`:`${number} is even`;
}

go(12);
console.log(go(12));
*/

/*
const go2 = (numbeer)=>{
    return numbeer%2? `${numbeer} is odd`:`${numbeer} is even`;
}

console.log(go2(12));
*/

/*
const go3 = (birthyear)=>{
    return new Date().getFullYear()-`${birthyear}`;
};



x = Number(prompt("please enter your birth year: "))
console.log(go3(x));
console.log(`you are ${go3(x)} years old`);
*/


/*
const go4 = (birthyear)=>(new Date().getFullYear()-birthyear);

console.log(`your age is ${go4(1997)} years old...`)
console.log(go4(1997));
*/

//LOOPS

/*
for (let i=1;i<=5;i++){
    console.log(i);
};
*/

/*
const x = Number(prompt("please enter a number:"));
sum = 0;

for (let i=0;i<=x;i++){
    sum+=i;
}

console.log(sum);
*/

const num = Number(prompt("enter a number:"));
multiply = 1;

for (let i=1;i<=num;i++){
    multiply*=i;
}

console.log(multiply);