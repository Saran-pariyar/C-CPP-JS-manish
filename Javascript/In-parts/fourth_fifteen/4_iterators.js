//iterators in javascript

function iterator(value) {
  let index_val = 0;
  //we will return an object
  return {
    //this next is a method
    next: function () {
      if (index_val < value.length) {
        //we will return below obj
        return {
          c_value: value[index_val++],
          done: false,
        };
      } else {
        //we will return below obj
        return {
          done: true,
        };
      }
    },
  };
}
let myarr = ["one", "two", "three"];

//now using the iterator

const fruits = iterator(myarr);

console.log(fruits.next()); //next is the method of iterator..we declared
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next()); //this will return true because there is no items left in the array

//do this if we only want the value
//this will not run because the iteration is finished
//  console.log(fruits.next().c_value);
//  console.log(fruits.next().c_value);
//  console.log(fruits.next().c_value);
//  console.log(fruits.next().c_value);
