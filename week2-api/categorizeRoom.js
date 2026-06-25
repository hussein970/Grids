"use strict"; 
function categorizeRoom(price) {
    if (price < 150) {
        return "Budget";
        } else if (price < 200) {
            return "Standard";
            } else{
             return "Premium";   

            }
        }


 let rooms = [
{name: "Gold Studio", price: 180,period: "weelkly"},
{name: "Platinum Aprtment", price: 200, period: "monthly"},
{name: "Silver Studio", price: 95,period: "daily"},
{name: "Sapphire Aprtment", price: 300, period: "nightly"},

 ];
 for (let i = 0; i < rooms.length; i++) {
    let room = rooms[i];
    let category = categorizeRoom(room.price);
    console.log(room.name + " (£" + room.price + "/" +room.period + ") -" + category );
 }
