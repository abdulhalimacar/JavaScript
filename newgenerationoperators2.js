const car = {
    brand:"bmw",
    model:1999,
    engine:1.6,
    colors: ["green","red","blue"],
}

//1.yöntem
const brand1 = car.brand;
const model1 = car["model"];

//2.yöntem
const { brand,model,engine,colors } = car;
console.log(brand,model,engine,colors);

const cars ={

    car1:{
        name:"BMW",
        model:1996,
        engine:1.9,
    },

    car2:{
        name:"mercedes",
        model:2000,
        engine:2.0,
    },

};
console.log(cars);

const { car1, car2} = cars;
console.log(car1);


const{ name:c1Name, model:c1Model} = car1;//burada ben name key'ini c1Name olarak kullanmak istiyorum demektir bu
const{ name:c2Name, model:c2Model} = car2; 

console.log(c1Name,c2Name);

const team = [
  {
    //bu sıfırıncı indis tir
    name: "adam",
    surname: "johns",
    job: "machine learning engineer",
    age: 40,
  },
  {
    name: "alex",
    surname: "jack",
    job: "front end developer",
    age: 32 /*bu ikinci indistir*/,
  },
  {
    name: "michael",
    surname: "markus",
    job: "blockchain engineer",
    age: 45 /*bu üçüncü indistir*/,
  },
];

//klasik yöntem 
team.forEach((p)=>{
    //birden fazla işlem olduğu için süslü açtık
    console.log("**********")
    console.log("Name:",p.name);
    console.log("Name:",p.surname);
    console.log("Name:",p.job);
    console.log("Name:",p.age);
});

//klasik yöntem ile yapılan şeyi destructuring metodu ile yap!

team.forEach((p) => {
   const { name, surname, job, age} = p;
   console.log("**********");
   console.log("Name:", p.name);
   console.log("Name:", p.surname);
   console.log("Name:", p.job);
   console.log("Name:", p.age);
});

console.log("hi");

const getinfo =  () =>{
    return {
        id:1,
        prodname:"iphone",
        price:20000,
    };
};
console.log(getinfo());

//react te bu tür yapılar çok kullanılıyormuş!

const calculate = ({id,price})=>{
    console.log(price*1.1);
};

calculate({id:1,price:2000})

const names = ["ali","ahmet","mehmet","veli"];

const mehmet = names[2];//indexing yolu en çok bu kullanılır! 
console.log(mehmet);

const [p1,p2] = names;//dizi olduğu için []böyle yaptık
console.log(p1,p2);

//REST OPERATOR 
const autos = ["bmw","reno","mercedes","ferrari","anadol"];

const [anadol,reno,...restAutos] = autos;
console.log(anadol,reno);
console.log(restAutos);

//obje yapısında rest'i kullanmak daha mantıklı
const personal = {
    pname:"alex",
    surname:"marcus",
    job:"developer",
    age:30,
};

const {pname,...others} = personal;
console.log(others);

//çok mühim 
const sum = (x,y)=>x+y;
console.log(sum(1,2,3,4,5,6,));//sadece 1+2'yi çalıştırır hepsini toplamak için öncelikle rest ile bir diziye çevirmek lazım...

const all = (...numbers)=>{
    console.log(numbers);
    return numbers.reduce((acc,value)=>acc+=value,0);
};

all(1,2,3,4,5,6,7);
console.log(all(1, 2, 3, 4, 5, 6, 7,8));
//çok mühim=>çok mühimler arasındaki şeyler çok mühim

//join arrayi stringe çevirir!

const who = (namee,surname,...other)=>{
    console.log(other);
    const summary = `${namee} ${surname} is a ${other.join(" and ")}`;
    console.log(summary);
};

who("abdulhalim","acar","developer","instr","prof","not dad!");

//SPREAD OPERATORU>iterable olan bir elementi açıp bireysel hahle getiriyor...bir nevi rest'in tersi gibi duruyor!

//bu iki diziyi birleştirmek istiyorum
const flying = ["aircraft","helicopter","quadcopter"];
const autoss = ["truck","bus","SUV"]

const allvehicles = [flying,autoss];
console.log(allvehicles);
const alll = [...flying,...autoss];//her birini listeden kurtatır
console.log(alll);

const citrus = ["orange","lime","lemon"];
const fruits = ["apple",...citrus,"banana","cherry"];
console.log(fruits);

//bu tür kopyalama deep kopyalamadır
const myobj = {a:1,b:2,c:3};
const copied = {...myobj};

console.log(copied);
copied.a = 10;

console.log(myobj,copied);//görüldüğü üzere copied de yapılan değişiklik myobj yi etkilemiyor tam bir deep kopyalama örneği gibi hareket ediyor 

const combined = {...myobj,...copied};
console.log(combined);
