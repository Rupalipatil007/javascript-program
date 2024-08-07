console.log("==========interview criterion========");

function interviewCheck(gradScore,hscScore,sscScore,candidateName){
    var result = gradScore>=70|| hscScore>=80 || sscScore>90
    ?`Congrats ${candidateName} you are eligible for TCS interview`
    : `Unfortunately ${ candidateName} are not eligible for interview `
    console.log(result);  
}

console.log("As per given number:80,86,90");   
interviewCheck(80,86,90,"Kavita");
console.log("As per given number:70,65,55");
interviewCheck(70,65,55,"Puja");
console.log("As per given number:60,79,88");
interviewCheck(60,79,88,"Ragini");

