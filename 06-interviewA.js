 console.log(`==================interview8Aug Assignment===========================`);
 var interviewCheck = function(person,gradScore,hscScore,sscScore  ){
  
     if (gradScore>=70|| hscScore>=80|| sscScore>=90) {
        console.log(`Hii  ${person} your score are ${gradScore}, ${hscScore},${sscScore} and you are eligible for TCS inteview`);
        
     } else {
        console.log(`Hii  ${person} your score are ${gradScore}, ${hscScore},${sscScore} and you are not eligible for TCS inteview`);
        
     }
  }
  
  interviewCheck("Ram",75,45,52);
  interviewCheck("Akash",70,65,55);
  interviewCheck("Ragini",60,79,88);
  interviewCheck("Puja",80,86,90);