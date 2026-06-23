"use strict";
let roomPrices = [120, 180, 200, 95, 300, ];
for (let i = 0; i < roomPrices.length; i++) {
    let price = roomPrices[i];
    if (price < 150) {
        console.log(price + " - Budget Room"); 
        } else if (price < 200) {
            console.log(price + " - standard Room");
        } else {
            console.log(price + " - Premium Room");
        }
    }