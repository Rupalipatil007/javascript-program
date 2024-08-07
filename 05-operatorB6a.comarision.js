console.log("===============Greater Number check================");
function greaterNumber(n1,n2){
 var result = n1>=n2 ? n1:n2;
console.log(`Given nunbers ${n1},${n2} is: ${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);
console.log("=============Even odd=======================");
function isEvenOrOddNum(num){
   var result=num%2==0 ? true: false;
       return  result;
}

var result=isEvenOrOddNum(29);
console.log(`Is Number: 29 even :${result}`);

var result=isEvenOrOddNum(44);
console.log(`Is Number: 44 even :${result}`);

var result=isEvenOrOddNum(0);
console.log(`Is Number: 0 even :${result}`);

var result=isEvenOrOddNum(101);
console.log(`Is Number: 101 even :${result}`);

isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(101);
console.log("=================Even odd length============");
function worldLength(Even,odd ){
}
var result =worldLength();
console.log(  ` world length is: "javascipt" `);

iswordlength();