//As our application grows bigger, we want to split it into multiple files, so called “modules”. A module may contain a class or a library of functions for a specific purpose.For a long time, JavaScript existed without a language-level module syntax. That wasn’t a problem, because initially scripts were small and simple, so there was no need.
//But eventually scripts became more and more complex, so the community invented a variety of ways to organize code into modules, special libraries to load modules on demand.

//A module is just a file. One script is one module. As simple as that.
//Modules can load each other and use special directives export and import to interchange functionality, call functions of one module from another one:
//export keyword labels variables and functions that should be accessible from outside the current module.
//import allows the import of functionality from other modules.
//For instance, if we have a file sayHi.js exporting a function:

// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}
//…Then another file may import and use it:

// 📁 main.js
import {sayHi} from './sayHi.js';

alert(sayHi); // function...
sayHi('John'); // Hello, John!
//The import directive loads the module by path ./sayHi.js relative to the current file, and assigns exported function sayHi to the corresponding variable.
//As modules support special keywords and features, we must tell the browser that a script should be treated as a module, by using the attribute <script type="module">.


//Example two
//Import and export are JavaScript's ways of modularizing code so that you can organize it into smaller, reusable pieces. This helps with maintaining and scaling your code. Let's break them down:

//Export
//When you want to make a function, object, or variable available to be used in other files, you export it. There are two main ways to export in JavaScript: named exports and default exports.

// 1.Named Exports:
//You export multiple named pieces from a module. For example:
// file: mathFunctions.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
// 2.Default Exports:
//You can only have one default export per module. Default export is helpful when the module is primarily focused on one thing. For example:
// file: multiply.js
export default function multiply(a, b) {
  return a * b;
}


//Import
//When you want to use functions, objects, or variables from another module, you import them.

// 1.Named Imports:
//You import the specific parts of the module you need. For example:

// file: app.js
import { add, subtract } from './mathFunctions.js';

console.log(add(5, 3)); // Outputs: 8
console.log(subtract(5, 3)); // Outputs: 2

// 2.Default Imports:
//You import the default export from the module. For example:

// file: app.js
import multiply from './multiply.js';

console.log(multiply(5, 3)); // Outputs: 15

//You can also combine named and default imports if necessary:
import multiply, { add, subtract } from './mathFunctions.js';
//These examples illustrate how you can organize and reuse your code across different files using import and export in JavaScript.

//Modules always work in strict mode. E.g. assigning to an undeclared variable will give an error.

<script type="module">
  a = 5; // error
</script>