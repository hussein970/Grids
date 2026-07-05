"use strict"; // strict mode

// Function that formats one room's full listing 
function formatRoom(room) {
    let status = room.available ? "Available" : "Sold Out"; // Check availability
    let kitchen = room.type === "Studio" ? "Private Kitchen" : "Shared Kitchen";
    
    console.log("===" + room.name + "===");
    console.log("Type: " + room.type);
    let priceLine = room.available ? "£" + room.price + "/week" : "Not available";
    console.log("Price: " + priceLine);
    console.log("Size: " + room.size + "m²");
    console.log("Kitchen: " + kitchen);
    console.log("Status: " + status);
    console.log("Stay: " + room.weeks + " weeks");
    console.log(""); // Empty line between rooms
}

// Brotherton House Leeds - Real data 
let brothertonHouse = [
  {name: "Gold Apartment", type: "Apartment", price: 165, size: 11, available: true, weeks: 51},
  {name: "Platinum Apartment", type: "Apartment", price: 185, size: 12.5, available: true, weeks: 51},
  {name: "Platinum Plus Apartment", type: "Apartment", price: 205, size: 12.5, available: true, weeks: 51},
  {name: "Diamond Apartment", type: "Apartment", price: 210, size: 14.5, available: true, weeks: 51},
  {name: "Sapphire Apartment", type: "Apartment", price: 235, size: 17, available: true, weeks: 44},
  {name: "Sapphire Plus Apartment", type: "Apartment", price: 240, size: 17, available: true, weeks: 44},
  {name: "Gold Plus Apartment", type: "Apartment", price: 0, size: 11, available: false, weeks: 0},
  {name: "Sapphire Studio", type: "Studio", price: 275, size: 23.5, available: true, weeks: 51},
  {name: "Sapphire Plus Studio", type: "Studio", price: 305, size: 23.5, available: true, weeks: 51},
  {name: "Platinum Plus Studio", type: "Studio", price: 0, size: 19, available: false, weeks: 0},
  {name: "Diamond Plus Studio", type: "Studio", price: 0, size: 21, available: false, weeks: 0}
];

// Building header
console.log("BROTHERTON HOUSE, LEEDS");
console.log("Study Inn");
console.log("1 Grace Street, LS1 2FN");
console.log("Total Units: " + brothertonHouse.length);
console.log("========================");
console.log(""); // Empty line before listing

// Modern Loop: .forEach() method
// This goes through every room one by one
brothertonHouse.forEach(function(room) {
    
    // ONLY print the room if it is available
    if (room.available === true) {
        formatRoom(room);
    }
    
});