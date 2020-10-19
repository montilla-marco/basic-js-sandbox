export default function ArrowFunc() {
  function hello() {
    console.log('Hello World!!');
  }
  hello();

  let mySonName = () => console.log('Esteban David');
  mySonName();

  function getName() {
    return 'Marco';
  }
  console.log('getName: ', getName());
  
  const getLastName = () => 'Montilla';
  console.log('getLastName: ', getLastName());

  () => {
    let a = 1;
    let b = 2
    return a + b;
  }

  const sayHelloTo = name => 'Hello ' + name;
  console.log('sayHelloTo: ', sayHelloTo('David'));
  
  
}