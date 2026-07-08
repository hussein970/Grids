 "use strict";
 function roomSummary(room) {
    let kitchen = room.type === "Studio" ? "Private Kitchen" : "Shared Kitchen";
    let status = room.available ? "Available" : "Sold Out";
    let displayPrice = room.available ? "£" + room.price + "/week" : "Price on request";
  return {
    title: room.name,
    kitchen : kitchen,
    status : status,
    price : displayPrice, 
    size : room.size + "m²",
    contract : room.weeks + " weeks",
  };
}
   let rooms = [
    {name: "Gold Apartment", type: "Apartment", price: 165, size: 11, available: true, weeks: 51},
    {name: "Sapphire Studio", type: "Studio", price: 275, size: 23.5, available: true, weeks: 51},
    {name: "Diamond Plus Studio", type: "Studio", price: 0, size: 21, available: false, weeks: 0}
];

// loop through , build each summary , print each field 
rooms.forEach(function(room) {
let summary = roomSummary(room);
console.log("Room Name: " + summary.title);
console.log("Kitchen: " + summary.kitchen);
console.log("Status: " + summary.status);
console.log("Price: " + summary.price);
console.log("Size: " + summary.size);
console.log("Contract: " + summary.contract);
console.log("---");
} );

