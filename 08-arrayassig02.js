console.log("==================1=======================");

const array=[20,31,40,25,23,11,29,9,60,2,11];
 const totalElement =array.length;
 console.log("Total element:",totalElement);
 
console.log("===================2==========================");
const firstElements = array[0];
console.log("FirstElement:",firstElements);

console.log("===================3==========================");
const lastElement = array[array.length-1];
console.log("LastElement:",lastElement);

console.log("===================4==========================");
const thirdLastElements = array[array.length-3];
console.log("Third last elements:",thirdLastElements);


console.log("=====================5============================");
console.log("Even numbers:");
for (const number of array){
    if (number%2=== 0) {
        console.log(number);
        
    }
}
    


