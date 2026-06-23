"use strict";
let rooms = [
    {name : "Gold Studio", price : 180},
    {name : "Silver Studio", price : 95},
    {name : "Platinum Studio", price : 220}
];
for (let i = 0; i < rooms.length; i++) {
    let room = rooms [i];
    if (room.price < 150) {
        console.log(room.name + " - Budget room");
        } else if (room.price <200){
            console.log(room.name + " - Standard room");
        } else {
            console.log(room.name + " - Premium room");
        }
}

