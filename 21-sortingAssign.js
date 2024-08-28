const arrayRollNumbers=[113,45,56,11,32,45,109,799,56,45];
console.log(`=====================Reverse the array=================================================`);
console.log(`Given array :113,45,56,11,32,45,109,799,56,45`);

const reverseArrayarrayRollNumber=arrayRollNumbers.reverse();
console.log(`Reverse array are:`,reverseArrayarrayRollNumber);
console.log(`====================Use the sort method=============================================`);
const arrayB = arrayRollNumbers.sort();
console.log(`Using sort method:`,arrayRollNumbers);
console.log(`======A==============Sort the array in ascending order===============================`);
const arrayD=arrayRollNumbers.sort();
console.log(arrayRollNumbers);
console.log(`===B==custom logic======`);
const arrayE=arrayRollNumbers.sort((n1,n2)=>{
    return n1>n2 ? 1:-1;
});
console.log(`Array in Ascending order are:`,arrayE);
console.log(`======================Greater number in the array================================================`);
const maxNumber = Math.max(...arrayRollNumbers);
console.log(`Greater number in array:`,maxNumber);
console.log(`======================smaller number in the array==============================================`);
const minNumber= Math.min(...arrayRollNumbers);
console.log(`Smaller number in array`,minNumber);
console.log(`======================Remove duplicate from the array ===========================================`);
const uniqueArray= [...new Set(arrayRollNumbers)];
console.log(`Remove duplicates from array:`,uniqueArray);



