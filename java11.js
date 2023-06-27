/*
const rakam = [1,2,3,4,-5,-8,-10];

let toplam = 0;

for (let i =0;i<rakam.length;i++){

    toplam+=rakam[i];
}

console.log(toplam);
console.log(rakam);
*/

/*

const rakam2 = [1, 2, 3, 4, -5, -8, -10];
const poz = [];
const negative = [];

const ayırma = (n)=>{

    for(let i=0;i<n.length;i++){
        if(n[i]<0){
            negative.push(n[i]);
        }else{
            poz.push(n[i]);
        }
    }
};

ayırma(rakam2);
console.log(poz);
console.log(negative);
*/

/*
const notes = [75,85,90];
let summ = 0;

for(let i=0;i<notes.length;i++){

    summ+=notes[i];

}

console.log(summ/ notes.length);
*/

/*
const names = ["ali","ahmet","halim","murat"];
const surnames = ["yılmaz","acar","magna","storm"];
const all = [];


const combine = (x,y)=>{
    for(let i in x){
        all[i]=`${x[i]} ${y[i]}`;
    }
}

combine(names,surnames);

console.log(all);

*/

/*
const students = ["ali", "ahmet", "veli", "deli", "murat", "ismet"];

const bul = (x) => {
  for (let i = 0; i < students.length; i++) {
    if (x === students[i]) {
      return `${x} is in the group`;
    }
  }
  return `${x} is not in the group`;
};

console.log(bul("delidd"));
*/

/*
const students = ["ali", "ali","ahmet", "veli", "deli", "murat", "ismet"];


const studentfind = (x)=>{
    let counter = 0;
    for(let i=0;i<students.length;i++){
        if(x===students[i]){
            counter+=1;
        }
    }

    if(counter===0){
        // console.log(`${x} not found`);
        return `${x} not found`;
    }else{
        // console.log(`${counter} times ${x} is found`);
        return `${counter} times ${x} is found`;
    }
};


const name = prompt("enter a name please").toLowerCase();
console.log(studentfind(name));
*/
