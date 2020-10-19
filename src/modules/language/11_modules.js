/* The export statement is used when creating JavaScript modules to export live bindings to functions,
objects, or primitive values from the module so they can be used by other programs with the import
statement.Bindings that are exported can still be modified locally; when imported, although they can
only be read by the importing module the value updates whenever it is updated by the exporting module.

Exported modules are in strict mode whether you declare them as such or not.The export statement cannot
be used in embedded scripts.
 */

/** There are two important Rules, which you need to understand if you're working with ES6 Modules:
      .- Modules are always in Strict Mode(no need to define "use strict")
      .- Modules don't have a shared, global Scope. Instead each Module has its own Scope
*/
// import { Component as comp } from 'react'; you can use Component as comp aliases.
// import * from 'react' you can import all modules components
// import * as re from 'react' you can import all modules components // re is an object
export const pi = 3.145647565756;
const Modules = (param) => { console.log('We are in a JavaScript Modules!!!! ' + param); };
export default Modules;
/* export default function Module(param) {
  console.log('We are in a JavaScript Module!! ' + param);
} */
// Use export for all variables, functions, objets
// export default not need import into curly brace
let val1 = 23;
const b = () => {console.log('hi')}
export {val1, b }

78

// If you're trying to export a default and declare a variable at the same time, is invalid syntax.
//export default const func = () => {}