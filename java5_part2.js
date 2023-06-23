// /*prime number find */
// num = Number(prompt("enter a positive number higher than 1 to checkt its primeness?"));
// let asal =true;

// if(num<=1){
//     alert("number should be higher than one");
// }else{

//     for(let i =2;i<num;i++){
//         if(num%i===0){
//         asal=false;
//         break;
//         }

//     }

//     const result = asal ? "prime": "not prime";
//     console.log(`${num} is ${result}`)
// }

/*WHILE*/

// let i = 1;

// while (i < 10) {
//   console.log(i+ " hi");
//   i++;
// }

/*hatalı kod sonsuz döngüye girdi*/
// let t = Number(prompt("enter a note between 0-100:"));

// while(t<0|t>100){
//     console.log("please enter a valid number");
// }

/*doğru cevap aşağıdadır:>>>> */

// let number = Number(prompt("Enter a number between 0 and 100:"));

// while (number < 0 || number > 100) {
//   number = Number(
//     prompt("Invalid number. Please enter a number between 0 and 100:")
//   );
// }

// console.log("Valid number entered:", number);


/*

let con = 1;

do {
    console.log("hi -",con);
    con++;
}while(con<=10);
*/

/*
let not1;

do{
    not1 = prompt("enter a number");
}while(not1<0 || not1>100);

console.log(not1);
*/


/*GUESS THE NUMBER */


let right = 5;
const rand = Math.round(Math.random()*100);
console.log(rand);

do{
    const gues = Number(prompt("guess the number in the scale of zero-hundred:")); /*local bir değişken/variable.local daha iyidirr bellek yönetimi açıdan */
    right-=1;
    if(gues==rand){
        console.log(`congrats! ${5-right} kerede bildiniz`);
        break;
    }else if(gues<rand){
        console.log("increase your guess")
    }else{
        console.log("decrease your guess")
    }


}while(right>0);

console.log(`the number was ${rand}`); 