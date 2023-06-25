console.log("Functions...!");


/*2.fonksiyon yazma metodu*/ 
const cift_tek = function(sayı){
    return sayı % 2 ? `${sayı} tektir`:`${sayı} çifttir`;
}

cift_tek(6);/*çalışmadı bu*/

console.log(cift_tek(6));/*bu çalıştı ama*/
/*2.fonksiyon yazma metodu*/


/*normal fonksiyon yazma 1.yol*/
function no(num){

    return num % 2 ? `${num} is odd`:`${num} is evenn`;
}

no(2);
console.log(no(2));
console.log(no(2000));
console.log(no(-6872));
console.log(no(25432225111));

/*normal fonksiyon yazma 1.yol*/

/*invoke function:fonksiyonu çağırmak demektir*/

/*
function find(a,b,c){

    if(a>b&&a>c){
        return`${num1} is the biggest number`;
    }else if(b>a&&b>c){
        return`${num2} is the biggest number`;
    }else{
        return`${num3} is the biggest number`;
    }
}

const num1 = Number(prompt("enter a number:"));
const num2 = Number(prompt("enter a number:"));
const num3 = Number(prompt("enter a number:"));

console.log(find(num1,num2,num3));

*/

/*2.şekilde fonksiyon yazma ile bunu yaptık

const go =
function find(a, b, c) {
  if (a > b && a > c) {
    return `${num1} is the biggest number`;
  } else if (b > a && b > c) {
    return `${num2} is the biggest number`;
  } else {
    return `${num3} is the biggest number`;
  }
}

const num1 = Number(prompt("enter a number:"));
const num2 = Number(prompt("enter a number:"));
const num3 = Number(prompt("enter a number:"));

console.log(go(num1, num2, num3)); 
*/

/*
console.log(Number.MAX_VALUE);
console.log(-Number.MAX_VALUE);
*/

/*basit bir hesap makinesi yap fonksiyonla ilgili*/

/*birinci yol*/
/*
function hesapla(num1,num2,sembol){

    if(sembol=="+"){
        return `the sum of ${num1} and ${num2} is equal to ${num1+num2}`;
    }else if(sembol=="-"){
        return `the difference of ${num1} and ${num2} is equal to ${num1 - num2}`;
    }else if(sembol=="*"){
        return `the multiplication of ${num1} and ${num2} is equal to ${num1 * num2}`;
    }else if(sembol=="/"){
        return `the division of ${num1} and ${num2} is equal to ${num1 / num2}`;
    }else{
        return "please enter a valid sembol to calculate such as +,-/,*..."
    }
}

console.log(hesapla(2,3,"***"));
*/

/*2.yol switch case ile*/

/*başında sonuc adında bir variable tanımlayıp return meselesini işin içerisine sokabilirdik.....*/
/*return den sonra gelen şeyin manası yok. fonksiyon return gördüğü anda aşağıdakilerin bir manası kalmıyor*/
const hesapla = function(num1,num2,sembol){
    // let sonuc;
    switch(sembol){
        case "+":
            // result = num1+num2 
            return num1+num2;
            break;
        case "-":
            // result = num1 - num2;
            return num1 - num2;
            break;
        case "*":
            // result = num1 * num2;
            return num1 * num2;
            break;

        case "/":
            // result = num1 / num2;
            return num1 / num2;
            break;
        default:
            console.log("invalid operator");            
    }
    // return sonuc;
}

/*console.log(hesapla(2,3,"..")) > prompt yapmadan bunu yapabiliriz*/

num1 = Number(prompt("enter a number"));
num2 = Number(prompt("enter a number"));
sembol = prompt("enter an operator");

console.log(hesapla(num1,num2,sembol));