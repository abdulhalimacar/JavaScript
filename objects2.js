/*
const person = {

    name:"abdulhalim",
    surname:"acar",
    dateofbirth:1997,
    job:"front end developer",
    salary:140000,
    drivinlicense:true,
    calculateage: function(){
        return new Date().getFullYear()-this.dateofbirth;
    }, //buraya virgül koymasak bile kod çalışıyor
};

console.log(person.calculateage());
*/

//arrow function this kullanmamak adına geliştirilmiş bir fonksiyon türüdür......

/*
const person = {
  name: "abdulhalim",
  surname: "acar",
  dateofbirth: 1997,
  job: "front end developer",
  salary: 140000,
  drivinlicense: true,
  calculateage: function () {
    return new Date().getFullYear() - this.dateofbirth;
  }, //buraya virgül koymasak bile kod çalışıyor
  //obje metotları arrow functionla yazılmaz!
  summary:function(){
    console.log(this);
    return `${this.name} is ${this.calculateage()} years old`;
  }
};

console.log(person.summary());
*/

//obje içinde obje tanımlamak yani nested objects//
const people = {
  person1: {
    //burada person1 bir key dir
    name: "abdulhalim",
    surname: "acar",
    dateofbirth: 1997,
    job: "front end developer",
    salary: 140000,
    drivinlicense: true,
  },

  person2: {
    //burada person2 bir keydir
    name: "john",
    surname: "marcus",
    dateofbirth: 1995,
    job: "machine learning",
    salary: 100000,
    drivinlicense: false,
  },

  person3: {
    //burada person2 bir keydir
    name: "max",
    surname: "peter",
    dateofbirth: 1992,
    job: "front end developer",
    salary: 120000,
    drivinlicense: true,
  },
};

console.log(people.person1);

//javascripte objeler default olarak iterable değildirler...ama for veya for of ile objeler üzerinde dönebiliriz

//1.metod dönme için//for in ile 

/*

*/

//2.metot-for of ile üzerinde dönme!

//dizi iterabledır,string iterabledır....ama objeler default olarak iterable değildirler....

console.log(Object.keys(people));//bize keyleri döndürür sadece ve bize bir array(dizi) döndürür

console.log(Object.values(people));//bize value değerlerini döndürür...

console.log(Object.entries(people));//hem keyleri hem de keylerin value değerlerini bize döndürür...


/* bu bize hata verir
for(let person of people){

  console.log(person);//bu bize hata verir
}
*/

for (let key of Object.keys(people)) {

  console.log(key);

}

for(let values of Object.values(people)){

  console.log(values);
}

for(let all of Object.values(people)){

  console.log(all.salary);
}

for(let [key,value] of Object.entries(people)){

  console.log(`${key} - ${value.salary}`);
}

//filter ile ilgili güzel bir örnek 
Object.values(people).filter((p) => p.job === "machine learning").forEach((p)=>console.log(p.salary));