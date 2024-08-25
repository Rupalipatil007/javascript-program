
   
function isPrime (num) {
    for (let index =2; index < num; index++) {
        if(num%index==0){
           return false;
        }
        
    
    }
    return true;
}

const num =[3,9,7,6,19,29,53];
console.log(` prime number in array:${num}`);

var result = isPrime(3);
console.log(` Is  number 3 is prime:${result}`);

var result = isPrime(9);
console.log(` Is  number 9 is prime:${result}`);

var result = isPrime(7);
console.log(` Is  number 7 is prime:${result}`);

var result = isPrime(19);
console.log(` Is  number 19 is prime:${result}`);

var result = isPrime(29);
console.log(` Is  number 29 is prime:${result}`);

var result = isPrime(53);
console.log(` Is  number 53 is prime:${result}`);
console.log("In Given array total prime number is :5");


console.log(`=========space count==========`);
function countSpace(str) {
    return (str.split("").length-1);
    
} 

const str1 = "Revision is mother of success";
const str2 = "Javascript is the language of internate world";

//const spaceCount1 = countSpace(str1);
//const spaceCount2 = countSpace(str2);
console.log("The number of space in string1 is:",countSpace(str1));

console.log("The number of space in string2 is:",countSpace(str2));

