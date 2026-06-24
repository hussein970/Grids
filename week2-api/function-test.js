"use strict"
function  categorizRoom(price){
    if(price < 150){
        return "Budget";
        } else if(price < 200){
            return "Standard";
        } else {
            return "Premium";
        }
}

console.log(categorizRoom(120));
console.log(categorizRoom(180));
console.log(categorizRoom(250));