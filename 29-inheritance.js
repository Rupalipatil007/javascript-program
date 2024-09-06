
class Person{
    constructor(fullName,age,profession){
        this.fullName=fullName;
        this.age=age;
        this.profession=profession;
    }
}
class Student extends Person{
    constructor(gradutaion,fullName,age,profession){
        super(fullName,age,profession);
        this.gradutaion=gradutaion;
    }
}
const stdElon = new Student("BE CSC","Elon musk",54,"student");
console.log(stdElon);
