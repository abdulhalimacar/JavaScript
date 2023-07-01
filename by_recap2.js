/*
const worker = {
  namee: "abdulhalim",
  surname: "acar",
  age: 26,
  job: "front-end developer",
  languages: ["python", "javascript", "go", "assembly"],
  salary: 140000,
};

*/
/*
worker["languages"].forEach((x)=>console.log(x));
console.log(worker.salary);
worker["salary"]*=1.1;//buna özellikle dikkat et lütfen!
console.log(worker.salary);
*/

//ben worker objesinin bir kopyası olan bir person objesi oluşturmak istiyorum...
/*
const person = worker;//bu sığ kopyalama yapar//shallow copying yani
console.log(person);
*/

/*
person.job="data scientist";
console.log(person);//burada biz person objesinin mesleğinin front end ten data scientiste döndüğünü görmemiz gayet doğal. peki aynı değişiklik worker objesinde olmuş mudur? evet oldu. çünkü person yeni bir obje değildir sadece biz worker objesini person adında bir değişkene atadık tüm mesele budur....çok önemli burası......*/

/*
console.log(worker.job);
console.log(person.job);

let deepcopyofworker = JSON.parse(JSON.stringify(worker));//bu derin kopyalama yapar yani eskisinden bağımsız yeni bir obje oluşturur...

console.log(deepcopyofworker);
deepcopyofworker.job = "machine learning engineer"; //bu değişiklik worker'ı etkilemez
console.log(deepcopyofworker);
console.log(worker);
*/

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
  summary: function () {
    console.log(this);
    return `${this.name} is ${this.calculateage()} years old`;
  },
};

console.log(person);

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

console.log(people);

//javascripte objeler default olarak iterable değildirler...ama for veya for of ile objeler üzerinde dönebiliriz
//dizi iterabledır,string iterabledır....ama objeler default olarak iterable değildirler....

console.log(Object.keys(people)); //bize keyleri döndürür sadece ve bize bir array(dizi) döndürür

console.log(Object.values(people)); //bize value değerlerini döndürür...

console.log(Object.entries(people)); //hem keyleri hem de keylerin value değerlerini bize döndürür...

for (let key of Object.keys(people)) {
  console.log(key);
}

for (let values of Object.values(people)) {
  console.log(values);
}

for (let all of Object.values(people)) {
  console.log(all.salary);
}

for (let [key, value] of Object.entries(people)) {
  console.log(`${key}-${value.salary}`);
}

//filterla ilgili güzel bir özellik!

Object.values(people)
  .filter((p) => p.job == "machine learning")
  .forEach((p) => console.log(p.salary));
