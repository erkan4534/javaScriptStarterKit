function addToCart(quantity,productName="Elma") {
    console.log("Sepete eklendi ürün: "+productName+" adet : "+quantity);
}

//addToCart();
//addToCart("Yumurta",10);
addToCart(15);

let sayHello = ()=>{
    console.log("Hello word!");
}

sayHello();


let sayHello2 = function (){
    console.log("Hello World 2")
}

sayHello2();

function addToCart2(productName,quantity,unitPrice) {

}

addToCart2("Elma",5,10);
addToCart2("Armut",2,20);
addToCart2("Limon",3,15);

let product1 = {productName:"Elma",unitPrice:10,quantity:5}
function addToCard3(product){
    console.log("Ürün : "+product.productName);
    console.log("Adet : "+product.quantity);
    console.log("Fiyat : "+product.unitPrice);
}


addToCard3(product1);


let product2 = {productName:"Elma",unitPrice:10,quantity:5}
let product3 = {productName:"Elma",unitPrice:10,quantity:5}

product2=product3;

product2.productName="KARPUZ";
console.log(product3.productName);

let sayi1 = 10;
let sayi2 = 20;
sayi1=sayi2;
sayi2=100;

console.log(sayi1)
