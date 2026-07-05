"use strict"
// Function that takes a room object and buids a formatted  listing 
function formatListing(room) {
    let status = room.available ? "Available now " : "coming soon";
    return room.name + " - £" + room.price + " /week - "  +  room.size + "m² - " + status;
}
// Leeds room data
let room1 = [
    {name: "Gold Aprtment", price: 165, size: 11, available: true},
    {name: "Platinum Apartment", price: 190, size: 12.5, available:true},
    {name: "Sapphire Studio", price: 275, size: 23.5, available: true},
    {name: "DiamondPlus Studio", price: 0, size: 21, available: false},
];
// Loop through and format each one automatically
for (let i = 0; i < room1.length; i++) {
    console.log(formatListing(room1[i]));
}
