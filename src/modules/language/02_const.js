export default function Const() {
// CONST 
/*   Declaring a variable with const is exactly like let - when it comes to scopes - but creates a constant
  reference for the variable. We can’t change the value of a constant reference. If we put a primitive
  value in a constant, that value will be protected from getting changed: */
  const constant = 3;
      //constant = 4; //Error: "constant" is read-only
  
  // Note that if the constant is an object, we can still change the properties of that object, so be careful about that: 
  const person = { name: 'Marco' };
  person.name = 'Esteban';
  console.log('person.name: ', person.name); // Esteban
  
  // If we want a completely immutable object, we’ll have to use something else like Immutable.js.
}