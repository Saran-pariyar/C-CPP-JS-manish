//the generators returns an object
function* numbers_gen() {
  //yield 1;
  //yield 2;
  //yield "string_value";
  //yield 4;

  let i = 0;
  //for running the code infinitely 
while(true){ 
    yield i++;
    //yield (i++).toString; //will convert it into string

}
}
const gen = numbers_gen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());

