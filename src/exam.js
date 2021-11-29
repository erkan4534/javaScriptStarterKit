
let populations={
    x:10000,
    y:20000,
    z:30000
}

let newX,newY,newZ

({x:newX,y:newY,z:newZ}=populations)
console.log(newY);

/*
let showCategories = function (productId,...categories,name){ //syntaxError hatasi verir.Rest operatoru sona gelmelidir.
    console.log(name);
}

showCategories(1,'computer','technology','laptop');
 */

let getVatRate=()=>0.18;
console.log(getVatRate);
console.log(getVatRate());
