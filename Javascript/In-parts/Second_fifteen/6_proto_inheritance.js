function employee(e_name, e_salary){
    this.name = e_name;
    this.salary = e_salary;
}
employee.prototype.slogan = function(){return  ` ${this.name} is the best`};

let harry = new employee("harry", 20000);
console.log(harry.slogan())
console.log(harry)

//another constructer
function coder(name,salary,language){
    this.p_language = language;
    employee.call(this, name , salary); //inheriting
}

// to Inherit prototype 
coder.prototype = Object.create(employee.prototype);
//manually setting a constructer
coder.prototype.constructer = coder; //after this the prototype is also inherited

let saran = new coder("saran" , 2000, 'javascript');
console.log(saran)