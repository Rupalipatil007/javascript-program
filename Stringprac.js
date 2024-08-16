 var greet = "Hii everyone";
console.log("Hii everyone");

var greetlength = greet.length;
console.log(" Hii everyone:" ,greetlength);

var Rupali="hii world";
console.log(Rupali.charAt(2));

var one="Amol";
console.log(one.charAt(2));


var str1 = "my";
var str2 ="self";
console.log(str1.concat(str2));

var Rupali="hii world my name is batman";
console.log(Rupali.indexOf("batman"));
console.log(Rupali.lastIndexOf("name"));
console.log(Rupali.replace("name","self"));
console.log(Rupali.toUpperCase("name"));
console.log(Rupali.trim("name"));
console.log(Rupali.includes("name"));
console.log(Rupali.search("name"));
console.log(Rupali.substr(1,5));
const s = new String("test");
typeof s;
s.valueOf();
typeof  s.valueOf();
console.log("============= slice() ===============");
var result = greet.slice(3, 11);
console.log(result);
var result = greet.slice(5);
console.log(result);
var home ="my home";
console.log(home.slice(2));

console.log("============= split() ===============");
var result = greet.split(" ");
console.log(result);
console.log("Total number of words: ", result.length);

var myLove = "I love only JavaScript";
var result = myLove.split(" ");
console.log(result);
console.log("Total number of words: ", result.length);
console.log(` Given sentence - ${myLove} Total number of words ${result}`);

var life = "I am power bi developer";
var result = life.split("   ");
console.log("total number of world: ", result.length);
console.log(` given sentence -${life}total number of world ${result}`);

var myhobby = "I am ang developer";
var result = myhobby.split("        ")
console.log(` Total number of world ${result}`);

var name = "We are my friends";



























