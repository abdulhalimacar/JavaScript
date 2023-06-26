/*
primitive veri tiplerine sadece değer/veri verirsin yani verileri tutamazlar ama objectler veriyi tutarlar 
*/

const str1 = "hello";
const str2 = "guten tag";
const str3 = "schaffen!";

console.log(str1, typeof str1);

const str4 = new String("HELLO STR4");

console.log(str4, typeof str4);

const str5 = str1 + " " + str2 + " " + str3; //string concetination
console.log(str5);

/*string methods*/
/*concat-immutable(not changeable later)*/

console.log(str1.concat(" ", str2));
console.log(str1.concat(" ", str2, " ", str3));

console.log(str1);
/*touppercase,tolowercase */
console.log(str1.toUpperCase());

const go = "HALIM ACAR";
console.log(go.toLowerCase());

let goo = "halim";
gop = goo.toLocaleUpperCase("tr");
console.log(gop);

const equal = (x, y) => {
  return x.toUpperCase() === y.toUpperCase()
    ? `${x} and ${y} is equal`
    : `${x} and ${y} is not equal`;
};

//süslü arrow'a girerse dışarıdan çağıramayız bunu süslünün içerisine sokmamız lazım

console.log(equal("merhaba", "MERHABA"));
console.log(equal("halim", "HALIM"));

/*YUKARIDA ARROW FONKSİYONDA SÜSLÜLER KALDIRILIRSA RETURN GİDER VE PROGRAM YİNE DE ÇALIŞIR*/

const equal2 = (x, y) =>
  x.toUpperCase() === y.toUpperCase()
    ? `${x} and ${y} is equal`
    : `${x} and ${y} is not equal`;

console.log(equal2("hi", "HI"));

/*locale compare*/

const a = "réserve";
const b = "RESERVE";

console.log(
  a.localeCompare(b, "en", {
    sensitivity: "base",
  })
);

/*sıfır gelmesi eşit olduğunu gösterir*/
/*ingilizce dilinde kıyasla, base yaparsak şu manaya gelir
şu a ile şu ä birbirine eşittir
ama accent yaparsak bu iki a birbirine eşit olmaz
case yaparsak bu 2 a birbirine eşit olur ama şunlar eşit olmaz a ile Ä*/
/*büyük küçük önemli değil ise base yap*/

// charAt()

const str6 = "THE WAY IS THE WAY OF HIM";
console.log(str6.charAt(4)); //4.indeksi getirir
//indeks sıfırdan başlar dikkat!!!
console.log(str6.charAt()); //parametre belirtilmezse ilk index gelir

//son karakteri getir bakalım
console.log(str6.charAt(str6.length - 1));

//includes() case sensitive dir

const word = "to be or not to be, that is the question!";

console.log(word.includes("to"));
console.log(word.includes("that is.."));
console.log(word.includes("that is", 14)); //14.indeksten sonra that is var mı diye sorduk bu kodun içerisinde

const tobe = word.indexOf("or");
console.log(tobe);
// console.log(word);
// console.log(str4);

console.log(word.indexOf("to be"));

let word2 = "if you study, you can manage";
console.log(word2.startsWith("you")); //
console.log(word2.startsWith("if")); //
console.log(word2.startsWith("you", 3));
/3 ten sonrası için böyle mi diye kontrol et dedik/ /
  console.log(word2.endsWith("e", 12));
console.log(word2.endsWith("edsa"));

let oku2 = "oku, baban gibi saf olma";

console.log(oku2.replace("oku, ", "başarılı ol "));
console.log(oku2.replace("saf olma", "akıllı ol"));
console.log(oku2); //görüldüğü gibi orjinal değişmiyor(immutable yani) aksi belirtilmediği sürece//

console.log(oku2.replace(/SAF/, "mal")); //bu büyük-küçük harfe karşı duyarlıdır
console.log(oku2.replace(/SAF/i, "mal")); //ama bu büyük küçük harfi görmezden gelir

let degistir = "no woman, no cry" + "no woman, no cry" + "no woman, no cry";

console.log(degistir.replaceAll(/no/gi, "yes")); //tüm no'ları yes'e döndürdü
console.log(degistir.replace(/no/, "yes")); //tek bir no yes'e döndü

const veysel = "Uzun ince bir yoldayim yuruyorum gunduz gece..";

const sliced = veysel.slice(33); //33 ten itibaren al demektir
console.log(sliced);

console.log(typeof sliced);
console.log(veysel.slice(17, 30)); //17den 30'a kadar al ama 30 dahil değil

console.log(veysel.slice(-23, -19));

console.log(veysel.substring(17, 30));

console.log(veysel.split(" "));
console.log(veysel.split("uzun"));
