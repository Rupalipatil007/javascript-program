console.log(`-----------1---------------------------------------`);

const sbiBank ={
bankName:"Sate bank of India",
location:"pune",
accountNo:"1230456987",
ifsc:"SBI550015",
interestRate: "5.5%",
showDetails:function(){
    console.log(`Bank NAme :${this.bankName},location${this.location},accountNo :${this.accountNo},IFSC:${this.ifsc},Interest Rate:${this.interestRate}`);   
}

}
console.log(`------------------2-----------------------------`);
const axisBank ={
    bankName:"Axis bank of",
    location:"mumbai",
    accountNo:"1230456987",
    ifsc:"WSR550015",
    interestRate: "7.5%",
    showDetails:function(){
        console.log(`Bank Name :${this.bankName},location${this.location},accountNo :${this.accountNo},IFSC:${this.ifsc},Interest Rate:${this.interestRate}`);   
    }
    
    }
    console.log(`------------------3----------------------------`);
    const hdfcBank ={
        bankName:"HDFC bank ",
        location:"Jalgaon",
        accountNo:"1230456987",
        ifsc:"WSk550015",
        interestRate: "6.5%",
        showDetails:function(){
            console.log(`Bank Name :${this.bankName},location${this.location},accountNo :${this.accountNo},IFSC:${this.ifsc},Interest Rate:${this.interestRate}`);   
        }
        
        }
        console.log(`------------------4----------------------------`);
        const YESBank ={
            bankName:"YES bank ",
            location:"buldhana",
            accountNo:"1230456987",
            ifsc:"hSR550015",
            interestRate: "9.5%",
            showDetails:function(){
                console.log(`Bank Name :${this.bankName},location${this.location},accountNo :${this.accountNo},IFSC:${this.ifsc},Interest Rate:${this.interestRate}`);   
            }
            
            }
            console.log(`-------------------------SBI---------------------------------------------------`);  
        sbiBank.showDetails();
        console.log(`-------------------Axis---------------------------------------------------------`);
        axisBank.showDetails();
        console.log(`--------------------------HDFC----------------------------------------------`);
        hdfcBank.showDetails();
        console.log(`--------------------------YES----------------------------------------------------`);
        YESBank.showDetails();