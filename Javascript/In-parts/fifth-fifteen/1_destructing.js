//destructing in javascript
let a, b;
[a, b] = [34, 564];
console.log(a, b);

[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7]; //all the extra thing will be stored in 'd' as array
console.log(a);
console.log(b);
console.log(c);
console.log(d);

({ first, second, third, ...fourth } = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  e: 5,
  f: 6,
}); //the other value will be stored in d as array
console.log(first, second, third, fourth);

//Array destructuring
const fruit = ["apple", "banana", "grape"];
[i, j, k] = fruit;
console.log(i, j, k);

//  object destructuring
const laptop = {
  model: "dell",
  age: 2,
  gender: "male",
  start: function () {
    console.log(start);
  },
};

const { model, age, gender } = laptop;
console.log(model, age, gender);
