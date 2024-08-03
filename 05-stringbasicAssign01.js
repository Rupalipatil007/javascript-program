console.log("===========company==========");

function stringBasics(){
    console.log( `My dream company is "Infosys" `);
    var hobbyone="Reading";
    var hobbyTwo="Programming";
    var hobbyThree= "Travelling";

    console.log(`My hobbies are:${hobbyone}, ${hobbyTwo}, ${hobbyThree}`);
}
stringBasics( "Reading", "Programing", "Travelling");

 console.log("============concat==============");
 var hobby1 = "Reading";
var hobby2 = " Cycling";
var hobby3="Travelling";
var concatString = hobby1 + hobby2 + hobby3;
console.log("Myhobby+  Myhobby2+  Myhobby3:",concatString );
 console.log("========total no of characters======");
 var hobby1="Reading";
 var hobby1="Cycling";
 var hobby1="Travelling";
var totalCharcters=hobby1.length+hobby2.length+hobby3.length;
console.log("Total number of characters:",totalCharcters);


