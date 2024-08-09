var votingChecker = function(age, person){
    if (age>=18) {
        console.log(`Hey ${person} your age is ${age} and you are eligible for vote`);
    } else {
        console.log(`Unfortunately , Hey ${person} your age is ${age} and you are not eligible for vote`);
    }
}
votingChecker(21, "Jenny");
votingChecker(17, "Elon");


console.log("=================if-else=======================");
var voteEligible= function(age,person){
    if (age>=18) {
        console.log(`Hey ${person} your age is ${age} and you are eligible for vote`);
    } else {
        console.log(`unfortunately , Hey ${person} your age is ${agr} and you are not eligible for vote`);
    }
}
voteEligible(0,"Ragini");
voteEligible(-10,"Puja");
voteEligible(130,"Mina");