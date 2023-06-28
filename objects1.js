console.log("welcome to the objects..");

const cars = new Object();
cars.make = "bmw";
cars.engine = "1.6";
cars.model = 2023;
cars.lpg = true;
console.log(cars);

//bu 2'si bize aynı sonucu döndürür ama şu daha iyidir:cars["model"]
console.log(cars.model);
console.log(cars["model"]);

// window.alert("hi")=alert("hi"); >>>>>>>>>önemli

//biz objede object literal metodunu kullanacaz!(en çok kullanılan metod)!

const worker = {
  namee: "abdulhalim",
  surname: "acar",
  age: 26,
  job: "front-end developer",
  languages: ["python", "javascript", "go", "assembly"],
  salary: 140000,
};

console.log(worker);

worker.namee;
console.log(worker.namee);
console.log(worker.salary);
console.log(worker.job);
console.log(worker.languages);
console.log(worker.languages[1]);
console.log(worker["languages"]);
console.log(worker["languages"].map((x) => x));
worker["languages"].map((x) => console.log(x)); //for each olduğu gibi map te iş görür her bir dili ayrı ayrı alt alta yazdırmak için....
worker["languages"].forEach((x) => console.log(x)); //liste içerisindeki dilleri alt alta yazdırmanın yolu budur...kullanışlı bir metod lütfen buna dikkat et!

worker.city = "Istanbul";
console.log(worker);

worker.email = "acar45671@gmail.com";
console.log(worker);

console.log(worker.languages[1]);

//salary'i yüzde 10 artır?
// worker["salary"]+=worker["salary"]*1.1
worker["salary"] *= 1.1; //kısayol
console.log(worker);

//ben worker objesinin bir kopyası olan bir person objesi oluşturmak istiyorum...
const person = worker;//bu sığ kopyalama yapar//shallow copying yani
console.log(person);

person.job="data scientist";
console.log(person);//burada biz person objesinin mesleğinin front end ten data scientiste döndüğünü görmemiz gayet doğal. peki aynı değişiklik worker objesinde olmuş mudur? evet oldu. çünkü person yeni bir obje değildir sadece biz worker objesini person adında bir değişkene atadık tüm mesele budur....çok önemli burası......

console.log(worker.job);
console.log(person.job);

let deepcopyofworker = JSON.parse(JSON.stringify(worker));//bu derin kopyalama yapar yani eskisinden bağımsız yeni bir obje oluşturur...

console.log(deepcopyofworker);
deepcopyofworker.job = "machine learning engineer";//bu değişiklik worker'ı etkilemez
console.log(deepcopyofworker);
console.log(worker);



