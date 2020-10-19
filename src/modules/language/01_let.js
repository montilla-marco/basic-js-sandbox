export default function LetConst() {
  var fname = 'Marco';
  console.log('fname', fname); //fname Marco

  let sname = 'Antonio';
  console.log('sname', sname); // sname Antonio
  
  /* Block scopes are what you get when you use if statements, for statements, and the like. 
  You can also use them stand - alone with a simple begin - end curly braces { },
  not to be confused with empty object literals. */
    
  if (true) {
    var fLastName = 'Montilla';
    // block scope for the if statement
    //A variable declared with var in a block scope is available outside of that block scope.
  }
  console.log('fLastName', fLastName); //fLastName Montilla
  
  if (true) {
    let sLastName = 'Rodriguez';
    // block scope for the if statement
    //A variable declared with let in a block scope is not available outside of that block scope.
  }
            //console.log('sLastName', sLastName); // Uncaught ReferenceError: sLastName is not defined

  for (var i=0; i<10; i++) {
    // block scope for the for statement
  }
  console.log('i: ', i); // => 10
  
  for (let a = 0; a < 10; a++) {
    // block scope for the for statement
  }
            //console.log(a) // ReferenceError: a is not defined
  
  var dOutIn = 20;
  if (true) {
      var dOutIn = 30;
  }
  console.log('dOutIn', dOutIn);  // outIn 30
  
  let letOutIn = 20;
  if (true) {
      let letOutIn = 30;
  }
  console.log('letOutIn', letOutIn);  // outIn 20

  // A function scope is created for every function (and we can nest them too)
  function iHaveScope() {
    var age = 43;
    function iHaveNestedScope() {
      // nested local function scope
    }
  }
            //console.log('age: ', age); // Uncaught ReferenceError: age is not defined
  
  /* We often identify those scopes as local scopes and identify the top - level scope as the global scope.
  In a browser environment, the global scope is controlled by the window object while in Node.js,
  it’s controlled by the global object. */

}
