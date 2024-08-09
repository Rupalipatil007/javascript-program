
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