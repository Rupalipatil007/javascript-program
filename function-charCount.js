function charCount(str){
    let count =0;
    for (let i =0; i< str.length;i++ ){
        if (str[i].toLowerCase()==='a'){
            count++;
        }
    }return count;    
}
const strings = ["JavaScript", "DO or Die","Learn with us ,job with us ",
    "Anny ,my favorite fruits is Apple"];

String.forEach(str== {
          console.log (`The number of a chracter in string "${str}" is:
         ${charCount(str)}`);
     
});
    
