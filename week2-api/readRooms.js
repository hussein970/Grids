
"use strict";

const fs = require("fs");
const data = JSON.parse(fs.readFileSync("C:\\Users\\i7-10700K\\UKDSA-Learning\\week2-api\\rooms.json", "utf8"));
console.log(data.building);
console.log(data.address);
console.log("Total rooms: " + data.rooms.length);
console.log("");

data.rooms.forEach(function(room) {
    if (room.available) {
        let kitchen = room.type === "Studio" ? "Private Kitchen" : "Shared Kitchen";
        console.log(room.name + " - £" + room.price + "/week - " + kitchen);
    }
});
