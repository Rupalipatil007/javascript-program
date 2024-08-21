console.log(`WAP to find length or total number of characters of the string`);
const str1="Hello world";
const length1=str1.length;
console.log(`The lengthof the string "${str1}"is:${length1}`);
const str2="Javascript is the language of Internate";
const length2=str1.length;
console.log(`The lengthof the string "${str1}"is:${length2}`);


console.log(`-------------WAP to print or log the last character of the given string---------`);
function  getLastCharacter(str) {
    return str.charAt(str.length-1);
}
const str3 = "Hey,my friend,Programing Language";
const str4 = "I am learning logical program";
const str5 = "Angular";
console.log(`The first character of the string "${str3}" is :${getLastCharacter(str3)}`);
console.log(`The last characcter of the string "${str4}" is :${getLastCharacter(str4)}`);
console.log(`The last character of the string "${str5}" is :${getLastCharacter(str5)}`);
     

console.log(`-------WAp to print or log the `);
function  getLastCharacter(str) {
    return str.charAt(0);
}
const str6 = "React";
const str7 = "Elon musk";
const str8 = "Stem ";
console.log(`The first character of the string "${str6}" is :${getLastCharacter(str6)}`);
console.log(`The first characcter of the string "${str7}" is :${getLastCharacter(str7)}`);
console.log(`The first character of the string "${str8}" is :${getLastCharacter(str8)}`);
     
console.log("WApto check whether given string contain word ui or not");

function containUI(str) {
    return str.includes('UI');
}

const str9 = "React - UI Developer";
const str10 = "UI Developer";
const str11= "Front end and backend technologies ";
console.log(`The first character of the string "${str9}" is :${getLastCharacter(str9)}`);
console.log(`The first characcter of the string "${str10}" is :${getLastCharacter(str10)}`);
console.log(`The first character of the string "${str11}" is :${getLastCharacter(str11)}`);

function reverseStringUsingMethod(str) {
    return str.split('').reverse().join('');
}
const str12= "software";
const str13="UI  Developer";
console.log(`The reverse of the string "${str12}" is :${reverseStringUsingMethod(str12)}`);
console.log(`The reverse of the string "${str13}" is :${reverseStringUsingMethod(str13)}`);


  function reverseStringManaully(str) {
    let reverseStr = '';
    for (let i  = str.length -1; i >=0; i --) {
        reversedStr += str[i] ;
    }
return reversedStr;
  }
  const str14 = "Web Developer";
  const str15 = "Billion Doller";
  const str16 = "java";






        
    
  