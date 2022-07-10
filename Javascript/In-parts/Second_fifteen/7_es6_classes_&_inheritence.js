let d = new Date();
let year  = d.getFullYear();

class employee{
    constructor(givenName, givenExperience){
        this.name = givenName;
        this.experience = givenExperience;
    }
    slogan(){
        return `My name is ${this.name}`
    }
    exp(){
        return `I work here since  ${year - this.experience}`
    }
//we can use static method without making an object
    static add_two_num(a,b){
        return a+b;
    }
}
let harry = new employee("Harry" , 5   );
console.log(harry.slogan())
console.log(harry.exp())
console.log(employee.add_two_num(5,9)) //using static method  directly from class

//inheriting
//extends means to inherit form it
class coder extends employee{
constructor(givenName, givenExperience, givenlanguage ){
    super (givenName, givenExperience) //super means inherit the contructer of the class that is being inherited
    this.language= givenlanguage;
}
}


let hari = new coder("hari" , 5 , "javascript");
console.log(hari)