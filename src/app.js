console.log("Merhaba Kondlama.io");


//js type safe degildir
let dolarDun=9.20;
 dolarDun="9.20"
{
    let dolarDun=9.10
}

console.log("dolarDun"+dolarDun);//9.20



var dolarDun2=9.20;
dolarDun2="9.20"
{
    var dolarDun2=9.10
}

console.log("dolarDun2="+dolarDun2);//9.10



 const euroDun=11.2

//euroDun=11 const birkere deger eklenir sınrasinda bir daha deger atilamaz

//degiskenler camelCasing olarak yazili ilk hark kucuk oarak baslar

//PaskalCasing


//array
let konutKredileri=[12,"Emlak Konut Kredisi",["a","b","c"]]

let konutKredileri2=["Konut kredisi","Emlak Konut Kredisi","Kamu Komut Kredisi"]

for (let i = 0; i <konutKredileri2.length; i++) {
    console.log(konutKredileri2[i]);
}
