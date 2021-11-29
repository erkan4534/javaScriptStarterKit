let cart =  [
    {id:1,productName:"Telefon",quantity:3,unitPrice:4000},
    {id:2,productName:"Bardak",quantity:2,unitPrice:30},
    {id:3,productName:"Kalem",quantity:1,unitPrice:20},
    {id:4,productName:"Şarz Cihazı",quantity:2,unitPrice:100},
    {id:5,productName:"Kitap",quantity:3,unitPrice:30},
    {id:6,productName:"Pot",quantity:5,unitPrice:150 },
]

console.log("<ul>")
cart.map(product=>{
    console.log("<li>"+product.productName + " : "+product.unitPrice*product.quantity+"</li>>")
})//iterasyona yarar.iterasyon ile degerleri degitirebilir sonrasinda yeni bir array olusturursun
console.log("</ul>")


let total=cart.reduce((acc,product)=>acc+product.unitPrice*product.quantity,0);//toplama islemi icin kullanilir.baslangis degeri sifir verilir.İstenirse logic de eklenir ornegin carpi su deger diye islemler eklenebilir.
console.log(total);

let quantityOver2 = cart.filter(product=>product.quantity>2);//yeni array olusturmak icin kullanilir,arama yapilarinda kullanilir

console.log(quantityOver2);

function addToCart(sepet){
    sepet.push( {id:1,productName:"Ruhsat",quantity:1,unitPrice:20}); //push referansin yerini degistirmez.
}


addToCart(cart);

console.log(cart);

let sayi = 10

function sayiTopla(number){
    number+=1
}
sayiTopla(sayi);
console.log(sayi);//10 yazar cunku sayi deger tiptir.



