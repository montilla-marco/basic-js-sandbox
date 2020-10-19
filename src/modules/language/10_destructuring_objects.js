export default function DestructuringObj() {
  let obj = {
    name: 'Marco',
    age: 43,
    greet: () => console.log("Hello I'm " + name) // Doesn't works with this.name. 
  }

  let { name, age } = obj; // Varaibles must to have the same name.
  console.log('name', name); // name Marco
  console.log('age', age); // age 43
  
  //let { name, , greet } = obj; not compile, object destructuring can not be white space between elements.
  let { greet } = obj;
  greet(); // Hello I'm Marco


  function Person() {
    let name = 'Marco';
    let greet1 = () => console.log("Hello I'm " + name); // Doesn't works with this.name. 
    return { name, greet1 };
  }
  let { greet1 } = new Person();
  greet1(); // Hello I'm Marco

  //let { greet1 } = new Person(); Identifier 'greet1' has already been declared 
  let { greet1: greeter } = new Person(); // But for variable extraction purposes it works
  greeter();// Hello I'm Marco
}