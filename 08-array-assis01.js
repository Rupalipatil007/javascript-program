console.log("----------------------------------------1st n last elements--------------------------------");
const fruits=["Banana","Orange","Apple","Mango","Water Melon"];
console.log("First element:",fruits[0]);
console.log("Last element:",fruits[fruits.length-1]);

console.log("--------------------------------------Add Papaya---------------------------------------------");
fruits.unshift("Papaya");
console.log("After adding `Papaya`:",fruits);

console.log("------------------------------------Remove mango----------------------------------");
fruits.splice(fruits.indexOf("Mango"),1);
console.log("After Removing `Mango`:",fruits);

console.log("-------------------------------------Add element Pineapple at last position--------------------------------");
fruits.push("Pineapple");
console.log("After Adding  `Pineapple`:",fruits);
console.log("-------------------------------------------Insert elements  Dragaon fruits before water melon----------------------------");

const watermelonIndex = fruits.indexOf("Water Melon");
if (watermelonIndex !== -1) {
    fruits.splice(watermelonIndex, 0, "Dragon Fruit");
}
console.log("Array after adding Dragon Fruit:", fruits);
console.log("---------------------------------Replace orange with kiwi-----------------------------");
const orangeIndex = fruits.indexOf("Orange");
if (orangeIndex !== -1) {
    fruits[orangeIndex] = "Kiwi";
}
console.log("Array after replacing Orange with Kiwi:", fruits);

console.log("-------------------------------index 1 to 4------------------------------------");
console.log("Elements from index 1 to 4:", fruits.slice(1, 5));


console.log("------------------------------last three elements------------------------------");
constfruits=["Banana","Orange","Apple","Mango","Water Melon"];

const LastThreefruits = fruits.slice(fruits.length-3);
console.log("Last Three elements:",LastThreefruits);





