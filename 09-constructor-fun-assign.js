
console.log(`------------------------Bank details------------------------------`);

function Bank(bankName,location,ifscCode,branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode; 
}
let sbiBank = new Bank ("SBI bank","pune","SBI11110202","1018");
console.log(`Bank Details:Name ${sbiBank.bankName},location :${sbiBank.location},ifscCode:${sbiBank.ifscCode},branchCode: ${sbiBank.branchCode}`);

let yesBank = new Bank ("YES bank","mumbai","YES11110202","1889");
console.log(`Bank Details:Name ${yesBank.bankName},location :${yesBank.location},ifscCode:${yesBank.ifscCode},branchCode: ${yesBank.branchCode}`);

let axisBank = new Bank ("AXIS bank","isanapur","axi111102","101");
console.log(`Bank Details:Name ${axisBank.bankName},location :${axisBank.location},ifscCode:${axisBank.ifscCode},branchCode: ${axisBank.branchCode}`);

let mahaBank = new Bank ("MAHA bank","muthangi","MAHA111892","1989");
console.log(`Bank Details:Name ${mahaBank.bankName},location :${mahaBank.location},ifscCode:${mahaBank.ifscCode},branchCode: ${mahaBank.branchCode}`);


console.log(`----------------------openTime and closeTime-------------------------`);

Bank.prototype.openTime='9 AM IST';
Bank.prototype.closeTime= '6 PM IST';



console.log(`Bank Name is:${axisBank.bankName},closeTime is: ${axisBank.closeTime}`);

console.log(`Bank Name is ${yesBank.bankName},branchCode is :${ yesBank.branchCode} `);
console.log(`Bank Name is:${mahaBank.bankName},branchCode is :${mahaBank.branchCode} openTime ${mahaBank.openTime}`);





