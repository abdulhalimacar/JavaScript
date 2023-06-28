/*for of*/
/*
const sayılar = [-5,-10,20,24,33,-2];

let sonuc = 0;
for(let i of sayılar){
    sonuc+=i;
}

console.log(sonuc);
*/
//

/*
const prices= [100,250,50,90];

prices.forEach((p)=>console.log(p));

let sum = 0;
prices.forEach((price)=>sum+=price);

console.log(sum);
*/
//fiyatlar listesindeki her bir elemana yüzde 10 zam yap

//1.adım
/*
let topp = 0;
prices.forEach((price,index)=>{
    topp+=price;
    console.log(`${index+1}.iteration:${topp}`);

});
*/

//2.adım

/*
let topp = 0;
prices.forEach((price, index) => {
  topp += price;
  console.log(`${index + 1}.iteration:${topp}`);
  prices[index]=Math.trunc(price*1.1);//trunc ile yapmadığımız zaman sayının sonunda onlarca sıfır çıkıyor biz bunu istemiyoruz o yüzden trunc kullandık//şunu unutma ki bu işlem orjinal prices dizisini değiştiriyor biz bunu istemeyiz o yüzden map kullanmak daha mantıklı çünkü map  bir dizinin orjinalini değiştirmez!
});

console.log(prices);

*/ 

/*MAP METODU>>orjinalde değişiklik yapmaz!*/

/*
const numbers = [3,7,5,9,12,13];
console.log(numbers.map((x)=>x*5));

console.log(numbers.map((sayı)=>sayı+=5));
*/

//tüm isimleri büyük harfe dönüştür
/*
let isimler = ["ali","mehmet","deli","veli"];

console.log(isimler.map((ad)=>ad.toUpperCase()));
*/

/*
const euro = 18.23;
const dollar = 18.19;
const tl = [100,150,100,50,80];

console.log(tl.map((x)=>Number((x/dollar).toFixed(2))));//tofixed sayıyı stringe çevirir dikkat et ama biz stringe çevirmesin dersek o zaman şunu yapmamız gerek:Number((x/dollar).toFixed(2)) yaparız

console.log(tl.map((t)=>(t/euro).toFixed(2)));
*/ 

/*FILTER METODU>>>orjinalde değişiklik yapmaz!*/

/*
const values = [100,200,300/10,18,-2,-30,-40];

console.log(values.filter((x)=>x>0));

const values_higher_than_zero = values.filter((x)=>x>0);
console.log(values_higher_than_zero);

*/