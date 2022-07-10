                                //creating a constructer for car
function car(car_name, car_speed) {
    this.name = car_name;
    this.speed = car_speed;
    this.analyze = () => { console.log(`this car is slower than bmw by ${200 - this.speed} Km/H`) }
}
let bmw = new car("bmw", 200);
let maruti = new car("maruti", 180);
// console.log(maruti.analyze());

//object prototyping 
let mobile = function(m_name, m_speed){
    //properties that we create here = instance member 
    //properties or methods that we create using prototype = prototype member
    this.name = m_name;
    this.speed = m_speed;
    //if we make methods like this than it will be called  in all object made from here even if we used it in only one which will take more memory ...show we use prototype 
    this.detail = function(){return this.name + this.speed} 
}
let samsung = new mobile("sam", 100);
let apple = new mobile("apple", 100);
//to see more this type of methods ... console.log the object and see the _proto_ 
console.log(samsung.hasOwnProperty("name")) //returns true
console.log(typeof samsung.speed.toString()) // returns string
console.log(samsung.detail())

//making a prototype ..and it will be stored in _proto_ and will not be called unless we use it 
 mobile.prototype.proto_for_ony_one_obj = function(){
     return "now it will only be called when we call it from an object and webpage will load faster"
 }

console.log(samsung.proto_for_ony_one_obj());