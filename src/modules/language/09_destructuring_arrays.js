export default function DestructureArray() {
  let numbers = [1, 2, 3, 4, 5];
  let a = numbers[0]; 
  let b = numbers[1];
  
  console.log('a', a); // 1
  console.log('b', b); // 2
  
  let [ one, two, ...three ] = numbers;
  console.log('one', one); // 1
  console.log('three', three); // [3, 4, 5]

  let [defaultVal = 'default', , , , , six = 'six'] = numbers;
  console.log('defaultVal', defaultVal); //1
  console.log('six', six); // six

  let [c, d] = numbers; //copy of values is not a reference because is a value.
  console.log('c', c); // 1
  console.log('d', d); // 2

  function Person() {
    let name = 'Marco';
    return { name };
  }
  let person1 = new Person();
  let person2 = new Person();
  let persons = [person1, person2]; // reference because is a object.
  let [p1, p2] = persons;
  console.log('p1', p1); // p1 { name: "Marco" }
  console.log('p2', p2); // p2 { name: "Marco" }
  person1.name = 'Esteban';
  person2.name = 'David';
  console.log('p1', p1); // p1 { name: "Esteban" }
  console.log('p2', p2); // p2 { name: "David" }
  
  numbers = [1, 2];
  let { x, y, z } = numbers;
  console.log('z', z); // undefined
}