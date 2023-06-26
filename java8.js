/*function scope*/



// let num = 5;//global scope 
// console.log(num);

// const funct1 = function(){
//     num = 22;
//     console.log(num);
// }

// funct1();

// console.log(num);
// console.log(num++);//önce sayıyı yazdır sonra artır>bu bize 22 verirken aşağıdaki bize 23 verirdik
// console.log(++num);//önce artır sonra yazdır

let num2 = 7;
console.log(num2);

const funct2 = ()=>{

     let num2 = 11; //function-scope//eğer let yazmasaydık sadece num2 kalsady sıralama şöyle olurdu:7,11,11
     console.log(num2);
}

funct2();
console.log(num2++);

if (num2===7){
    let result = "hi";
}else{
    let result="guten tag!"; //eğer bunun önüne let koymasak global scope olarak algılanır var gibi hareket eder ama bu tür bir kullanım tavsite edilmez. local scopelar const ve let kullanımı en ideal yöntemdir//
    console.log(result);
}

console.log(result);






