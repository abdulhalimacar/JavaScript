// JSON=>Javascript object notation

// json bir dizi içerisindeki objelerdir:::>>> const team = [{},{},{}...]

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

console.log(team);//dikkat team bir arraydir burada

console.log(team[2]);

for (i in team){
    console.log(team[i]);
}

//team deki jobları tek tek yazdır bakalım

//1.yol
for (i in team) {
  console.log(team[i].job);
}

//2.yol
team.forEach((p)=>console.log(p.job));

//ages adında yeni bir dizi oluştur ama buradaki yaşlar diğer yaşların +1'i olacak dikkat! 

//console.log(team.map((age) => age.age++));

const ages = team.map((x) => x.age+=1);

console.log(ages);

//name ve surnameleri birleştirip büyük harfe çevirin ve bunu fullname olarak ayrı bir diziye at ve aynı zamanda age değerlerini 5 artırarak age keyine saklayan ve oluşan diziyi döndüren kodu yaz

team.map((x,y)=>x.name.concat(y.surname));
console.log(team.map((x) => x.name.concat(" ",x.surname).toLocaleUpperCase()));

/*efsane gerçekten
const full = team.map((p)=>({
    fullname: p.name.toUpperCase()+" "+p.surname.toUpperCase(),
    age: p.age + 5,
}))

console.log(full);
*/

// team.filter((p)=>p<=22).forEach((p)=>console.log(p.name));
team.filter((p) => p.age <= 45).forEach((p) => console.log(p.name));//clg ile p.name yapmasaydık en sonda undefined alacaktık

//yaşı 40 tan küçük olanların isimlerini diziye sakla
const under22 = team.filter((x)=>x.age<=42).map((f)=>f.name);//burada biz map yerine foreach kullanamazdık
console.log(under22);

//ortalama yaşı hesapla

console.log(team.reduce((acc,value)=>acc+=value.age,0)/team.length);//sıfır değerini koymakta fayda var yoksa hata alırız! 

let sum = 0;

team.forEach((p)=>{sum+=p.age});

const average = sum/team.length;
console.log(average);