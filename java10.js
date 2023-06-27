/*arraylerin adresi stake alanında iken array'e ait veriler ise hip te oluyor:
çünkü stake alanı hızlı çalışıyor ama küçük bir bellek bölgesi ve hip bölgesi ise yavaş ama geniş bir bölge....bunun amacı da belleki en iyi nasıl yönetirimden dolayıdır..diziler yani arrayler non-primitive veri tipidir*/

const names = ["mehmet", "murat", "halim", "acar"];

console.log(names);

console.log(names.length);
console.log(typeof names);
console.log(names[0]);

const adlarr = new Array("python", "c", "c++", "java", "javascript"); //array tanımlamanın 2.yolu
console.log(adlarr);

console.log(adlarr[1]);
console.log(adlarr[adlarr.length - 1]);
console.log(adlarr.at(-1)); //bir dizideki son elemanı almak için özel metod "at"

names[1] = "Solidity"; //const ile atama yapmıştık isim değişir mi sence? evet değişir
console.log(names);

//bu hata verir ama dikkat et!
// names = ["marcus"];

const numbers = [1, 2, 3];
console.log(numbers);

numbers[numbers.length - 1]++;
console.log(numbers);

const ages = [44, 33, 22];
const people = ["ahmet", "joseph", "david", 33, ages];

console.log(ages);
console.log(people);

console.log(people[4][2]);

console.log(people[4][people[4].length - 1]); //daha güzel bir yazım bence
/*pop sondaki elemanı düşürür*/
const arabalar = ["bmw", "mercedes", "fiat", "audi"];

arabalar.pop();
console.log(arabalar);

//push eleman ekler
const n = arabalar.push("mazda");
console.log(arabalar);

//unshift dizinin sıfırıncı indeksine ekler

const n1 = arabalar.unshift("tofas");
console.log(arabalar, n1);

const n2 = arabalar.shift();

console.log(arabalar, n2);

//splice
// sıfır dersek silmez, 2.indeksten başla
//bir üzerine yaz yani sil ama sıfır araya ekle demektir silme demektir sıfır yani

arabalar.splice(2, 0, "passat");
console.log(arabalar);

arabalar.splice(2, 0, "passat", "corolla"); //birden fazla eleman da ekleyebiliriz!
console.log(arabalar);

arabalar.splice(3, 1, "honda");
console.log(arabalar);

//reverse>diziyi tamamen ters döndürür/yazdırır

arabalar.reverse();
console.log(arabalar);

//sort

arabalar.sort();
console.log(arabalar);

const sayı = [2, 3, 5, 1, 0, -1, 1];
sayı.reverse();
console.log(sayı);

sayı.sort((a, b) => a - b);
console.log(sayı);

const array1 = [1, 2, 3, 4];
array1.fill(0);
console.log(array1);

array1.fill(1, 2, 4); //1 bas nereden nereye? 2.indeksten 4.indekse kadar;
console.log(array1);

array1.fill(10, 1); //1.indeksten başla sona kadar git 10 bas demektir bu
console.log(array1);

//indexof,lastindexof

console.log(sayı.includes(5));
console.log(sayı.includes("5"));
console.log(sayı);

console.log(sayı.indexOf(1)); //ilk birin indeksini getirir
console.log(sayı.lastIndexOf(1)); //son 1 in indeksini döndürür>bulamazsa eksi bir döndürür

//join
console.log(sayı.join(" and "));

//tostring
console.log(sayı.toString());

//slice>böl demektir bu

const arabaas = ["bmw","mercedes","audi","lamborgini"];

console.log(arabaas);
console.log(arabaas.slice(2));//2.indeksten başla sona kadar git demektir bu

const writes = ["today","the weather","is very","beautiful"];
const writes2 = [1, 2, 3, 5];
const combine = writes.concat(writes2);
console.log(combine);

const between = [18,22,33,44,55];
//bu dizide 18 den küçük bir değer var mı diye sor bakalım?
;

console.log(between.every((age) => age >= 18));//18 den küçük tek bir değer bile varsa false döndürür::every böyle çalışır ama some yapsaydık farklı çalışır şöyle ki:örneğin arrayin içerisinde 5 tane değer var ve 4 tanesi 18 den küçük ama bir tane 18 den büyükse biz yine de true alırdık ama every de hepsinin 18 den büyük olması icap eder true almak için//



