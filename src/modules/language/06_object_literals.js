export default function ObjectLiterals() {
  
  let name = 'Esteban';
  let age = 0.3;

  const person = {
    name: 'Marco',
    age: 43
  }
  console.log('person: ', person); // person:  {name: "Marco", age: 43}

  const person1 = {
    name,
    age
  }
  console.log('person1: ', person1); // person1:  {name: "Esteban", age: 0.3}
  
  const person2 = {
    name: 'Marco',
    age: 43,
    //greet: () => console.log(this.name + ' ' + this.age) // doesn't work 
    greet() { console.log(this.name + ' ' + this.age); } // Marco 43
  }
  person2.greet();

  const person3 = {
    'name': 'Marco',
    age: 43,
    'greet'() { console.log(this.name + ' ' + this.age); }, // Marco 43
    'greet me'() { console.log(this.name + ' ' + this.age); } // Marco 43
  }
  person3['greet']();
  person3['greet me']();
}