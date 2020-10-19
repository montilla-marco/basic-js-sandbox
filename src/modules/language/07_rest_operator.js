export default function RestOperator() {
  let numbers = [1, 2, 3, 4, 5];
  
  function sumUp(numbers) {
    let result = 0;
    numbers.forEach(element => result += element);
    return result;
  }
  console.log('result', sumUp(numbers));
  
  function sumUpRestOp(...numbers) {
    let result = 0;
    //numbers.forEach(element => result += element); Not apply
    for (let i = 0; i < numbers.length; i++) {
      result += numbers[i];
    }
    return result;
  }
  console.log('result', sumUpRestOp(1, 2, 3, 4, 5));
}