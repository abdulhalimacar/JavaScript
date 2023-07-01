const sayılar = [-5, -10, 20, 24, 33, -2];

let sonuc = 0;
for (let i of sayılar) {
  sonuc += i;
}

console.log(sonuc);

for (let i in sayılar){
    sonuc2 +=i;
}
console.log(sonuc2);

const prices = [100, 250, 50, 90];

prices.forEach((p) => console.log(p));

let sum = 0;
prices.forEach((price) => (sum += price));

const numbers = [3, 7, 5, 9, 12, 13];
console.log(numbers.map((x) => x * 5));

console.log(numbers.map((sayı) => (sayı += 5)));

const values = [100, 200, 300 / 10, 18, -2, -30, -40];

console.log(values.filter((x) => x > 0));

/*reduce method>>>accumulative işlem yapar!*/

const salaries = [2000, 3000, 1900, 5000];

const sumofsalaries = salaries.reduce((acc, val) => acc + val); //burada biz acc'ye başlangıçta sıfır veriririz:acc+val,0 yani bunun default değeri sıfırdır
console.log(sumofsalaries);

//bir firma maaşı 3000 tl den az olanlara yüzde 10 zam yapmak istiyor ve toplamda ne kadar zam ödeneceğini bilmek istiyor

const salaries2 = [1000,2050,2000,4400];

salaries.filter((x) => x < 3000).map((x)=>x*1.1).reduce((x,y)=>x+y);
console.log(
  salaries
    .filter((x) => x < 3000)
    .map((x) => x * 1.1)
    .reduce((x, y) => x + y)
);
// console.log(salaries2.filter((x) => x < 3000).map((x) => (x += x * 1.1)));