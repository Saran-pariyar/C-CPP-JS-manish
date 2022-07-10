let x = Math; // see all the method of math obj
x = Math.round(5.4) //if point => .5 then prints 6 else prints 5
x = Math.ceil(5.3) //prints 6 even if 
x = Math.floor(5.9) //prints 5
x = Math.sqrt(4) 
x = Math.abs(-5) //turns negative value into positive
x = Math.pow(2,3) //2 to the powe of 3
x = Math.min(1,2,3,4);
x = Math.max(1,2,3,4);
//to generate value less than 100
x = Math.ceil(50 + (100-50)*Math.random()) //if we did ceil, than if the valaue is 100.5, than it wil show 100
console.log(x)

//to use date obj..we have to make a variable and put date object inside it
 let date = new Date();
 console.log(date.toDateString()); //will print date in more readable form
 let year = date.getFullYear(); // prints 2021
let time = date.getDate();  //prints only date
  time= date.getMonth();  //prints only date
//it is august so it prints 7 ( months index start from 0)
time = date.getDay(); //prints 0 cause it is sunday and index start from zero

date2 = new Date("january 5 2010");
console.log(date2.getMonth()) //will print 0 cause we made month january
console.log(time);

//time related
let day_time = date.getHours();
day_time = date.getMinutes();
day_time = date.getSeconds();
day_time = date.getMilliseconds();
console.log(day_time);

//if we try to print hours, minutes ,etc from past time than it will print 0
console.log(date2.getHours())

//settting date and time
console.log("Now setting time");
//we can obtain the day and other things with this
let set = new Date();
set.setDate(9); //this will show me what will be the day(suday, monday,etc)
console.log(set.toDateString())
set.setFullYear(2021);
set.setMonth(5);
set.setDate(7);
set.setHours(5) //sets hours
console.log(set.toDateString()) //we can see what is the day with this


let correct = date.getMonth()+1; //we use this because the month index start from 0 and that will print one month less than actual month
 console.log("the current date is ", date.getDate() + "/" + correct + "/"+date.getFullYear()); //the months will show 1 month less because it starts from 0