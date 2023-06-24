/*FUNCTIONS-1*/

/*1*/
function write() {
  console.log("hi");
}

write();
write();

/*2*/

function hi(name, surname) {
  console.log(`welcome to the system dear ${name} ${surname}`);
}

hi("abdulhalim", "acar");

/*3*/

function hi2(name, surname) {
  name = "alex";
  console.log(`welcome to the system dear ${name} ${surname}`);
}

hi2("acar"); /*bu kod undefined verir */
hi2(name, "acar"); /*ama bu kod undefined vermez*/

/*4*/
function hi3(name, surname = "") {
  console.log(`welcome to the system dear ${name} ${surname}`);
}

hi3("halim");
/*surname="" yaparsak bu şu manaya gelir:surname girilmezse sıkıntı çıkarma undefined döndürme demektir bu*/

/*5*/

function age(name, year_of_birth) {
  console.log(
    `dear ${name}, your age is ${new Date().getFullYear() - year_of_birth}`
  );
}

age("abdulhalim", 1997);

// console.log(new Date().getFullYear());

/*solution with "return"*/
function age2(name, year_of_birth) {
  const result = `dear ${name}, your age is ${
    new Date().getFullYear() - year_of_birth
  }`;
  return result;
}

age("abdulhalim", 1997);


/*define whether a number is even or odd*/

/*
function number(numberr){

    if(numberr%2===0){
        console.log(`${numberr} is even`);
    }else{
        console.log(`${numberr} is odd`);
    }

}

number(-200);
number(200);
number(12123515421);
number(543224254302);
*/

/*
function number2(numberr) {
  if (numberr % 2 === 0) {
    return`${numberr} is even`;
  }else {
    return`${numberr} is odd`;
  }
}

console.log(number2(20000));
*/

/*
function number2(numberr) {
  if (numberr % 2 === 0) {
    result= `${numberr} is even`;
    return result;
  } else {
    result= `${numberr} is odd`;
    return result;
  }
}

console.log(number2(200033330));
*/

/*
function oddd(number){
    return number % 2 ? `${number} is odd`:`${number} is even`;
}

console.log(oddd(2000));

*/

/*terniary yapıda eğer sonuç true ise ilk değer gelir ama sonuç false ise ikinci değer yazdırılır*/


function oddd(number) {
  return number % 2 ? `${number} is odd` : `${number} is even`;
}

let ay/*number*/ = Number(prompt("enter a number please:"));

console.log(oddd(ay/*number*/)); /*buradaki oddd içerisinde yer alan number değişkeninin isminin yukarıdaki oddd içerisindeki değişken ile aynı adı taşıması gerekmiyor. yani örneğin buradaki number'a go dersek yine çalışır*/