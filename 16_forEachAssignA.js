const arrayNumber = [1,-7,40,502,-77,91,0,108,89,-601];
arrayNumber.forEach((element,index)=>{
console.log(`Element: ${element},Index:${index}`);
    });
    console.log(`====================postive and negetive============================`);
    
arrayNumber.forEach((element)=>{
    if(element>0){
        console.log(element);
        
    }
});
const negetiveNumber=[];
arrayNumber.forEach((element)=>{
    if(element<0){negetiveNumber.push(element);

    }
}
 );
 console.log(negetiveNumber);
console.log(`======================even number===========================================`);
 arrayNumber.forEach((element) =>{
    if(element%2===0){
        console.log(element);
    }
});
        console.log(`===============sum of all elements========================================`);
        let sum = 0;
        arrayNumber.forEach((element)=>{
            sum =element;
        }
    );
    console.log(`sum of all elements :${sum}`);
        console.log(`=========================log even index array value===================`);
        arrayNumber.forEach((element,index)=>{
            if (index % 2===0){
                console.log(`Elements at even  index ${index}:${element}`);
                
            }
        }
    )
    
 