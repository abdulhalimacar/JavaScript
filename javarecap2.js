/*guess the number*/

// /*first one which is wrong one*/
// let x = Math.round(Math.random()*100);
// console.log(x);
// right = 5;

// while(right>0){
//     let t = Number(prompt("enter a number:"));
//     right-=1;
//     if(t===x){
//         console.log(`Congrats ${5-right} kerede bildin`);
//         break;
//     }else if(t<x){
//         console.log("go up");
//     }else{
//         console.log("go down");
//     }
// }

// if (right === 0) {
//     console.log(`You could not guess the number. The number was ${x}.`)};

// console.log(`you could not guess the number, the number was ${x}`);

/* second way which is correct one*/
// let x = Math.round(Math.random() * 100);
// console.log(x);
// let right = 5;

// while (right > 0) {
//   let t = Number(prompt("Enter a number:"));
//   right -= 1;
//   if (t === x) {
//     console.log(
//       `Congratulations! You guessed the number in ${5 - right} attempts.`
//     );
//     break;
//   } else if (t < x) {
//     console.log("Go up.");
//   } else {
//     console.log("Go down.");
//   }
// }

// if (right === 0) {
//   console.log(`You could not guess the number. The number was ${x}.`);
// }

// let x = Math.round(Math.random()*100);
// console.log(x);
// right = 5;

// do{

//     let guess = Number(prompt("enter your guess"));
//     right-=1;
//     if(guess==x){
//         console.log(`Congrats! you guessed the number in ${5-right} attempts`);
//         break;
//     }else if(guess<x){
//         console.log("go up");
//     }else{
//         console.log("go down");
//     }

// }while(right>0);

// console.log(`the number was ${x}`);