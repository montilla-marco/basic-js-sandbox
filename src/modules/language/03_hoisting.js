// Hoisting is JavaScript's default behavior of moving declarations to the top.
// In JavaScript, a variable can be declared after it has been used.
export default function Hoisting() {
  age = 43;
  console.log('age: ', age);
  var age; // age:  43

  // Variables and constants declared with let or const are not hoisted!
  // this sample works becase modules don't have a shared, global Scope. Instead each Module has its own Scope
  name = 'Marco';
  console.log('name: ', name);
  let name;
}