/*reduce method>>>accumulative işlem yapar!*/

/*
const salaries = [2000,3000,1900,5000];

const sumofsalaries =salaries.reduce((acc,val)=>acc+val);//burada biz acc'ye başlangıçta sıfır veriririz:acc+val,0 yani bunun default değeri sıfırdır 
console.log(sumofsalaries);
*/

//bir firma maaşı 3000 tl den az olanlara yüzde 10 zam yapmak istiyor ve toplamda ne kadar zam ödeneceğini bilmek istiyor

const salaries = [1000,2050,2000,4400];

console.log(salaries.filter((x)=>x<3000).map((x)=>Math.trunc(x*1.1)).reduce((acc,value)=>acc+value));//burada reduce ile yaptığımız en son işlemle birlikte dönen şey dizi olmaktan çıkıyor....




