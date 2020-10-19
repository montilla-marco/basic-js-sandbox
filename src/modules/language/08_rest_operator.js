export default function SpreadOperator() {
  
  let numbers = [1, 2, 3, 4, 5];
  console.log('max', Math.max(...numbers)); // 5

  let result = 0;
  for (let i of numbers) {
      result += i;
  }
  console.log('result', result); // 15

  let name = 'Jonh Doe';
  let template = `
  Hi!! my name is ${name + ' !!'}
  `;
  console.log('template', template);

}