// // Values can be assigned to variables with an = sign
// x = 0; // Now the variable x has the value 0
// x // => 0: A variable evaluates to its value.
// // JavaScript supports several types of values
// x = 1; // Numbers.
// x = 0.01; // Numbers can be integers or reals.
// x = "hello world"; // Strings of text in quotation marks.
// x = 'JavaScript'; // Single quote marks also delimit strings.
// x = true; // A Boolean value.
// x = false; // The other Boolean value.
// x = null; // Null is a special value that means "no value."
// x = undefined; // Undefined is another special value like null.

// // Two other very important types that JavaScript programs can manipulate are objects
// // and arrays. These are the subjects of Chapters 6 and 7, but they are so important that
// // you’ll see them many times before you reach those chapters:

// // JavaScript's most important datatype is the object.
// // An object is a collection of name/value pairs, or a string to value map.
// let book = { // Objects are enclosed in curly braces.
// topic: "JavaScript", // The property "topic" has value "JavaScript."
// edition: 7 // The property "edition" has value 7
// }; // The curly brace marks the end of the object.
// // Access the properties of an object with . or []:
// book.topic // => "JavaScript"
// book["edition"] // => 7: another way to access property values.
// book.author = "Flanagan"; // Create new properties by assignment.
// book.contents = {}; // {} is an empty object with no properties.
// // Conditionally access properties with ?. (ES2020):
// book.contents?.ch01?.sect1 // => undefined: book.contents has no ch01 property.
// // JavaScript also supports arrays (numerically indexed lists) of values:
// let primes = [2, 3, 5, 7]; // An array of 4 values, delimited with [ and ].
// primes[0] // => 2: the first element (index 0) of the array.
// primes.length // => 4: how many elements in the array.
// primes[primes.length-1] // => 7: the last element of the array.
// primes[4] = 9; // Add a new element by assignment.
// primes[4] = 11; // Or alter an existing element by assignment.
// let empty = []; // [] is an empty array with no elements.
// empty.length // => 0
// // Arrays and objects can hold other arrays and objects:
// let points = [ // An array with 2 elements.
// {x: 0, y: 0}, // Each element is an object.
// {x: 1, y: 1}
// ];
// let data = { // An object with 2 properties
// trial1: [[1,2], [3,4]], // The value of each property is an array.

// Optional Chaining ES2020

// Optional chaining syntax allows you to access deeply nested object properties without worrying if the property exists or not.
// If it exists, great! If not, undefined will be returned.
// This not only works on object properties, but also on function calls and arrays. Super convenient! Here's an example:

const school = {
  name: "Madison Sqaure Garden",
  students: {
    first: {
      name: "Max Tsh",
      age: 26,
    },
    second: {
      name: "Triple H",
      age: 56,
    },
  },
};

// If lastname exists nested in the object it will return its value but if not it will return undefined
console.log(school?.students?.first?.lastname);

// One of the most common ways to form expressions in JavaScript is to use operators:
// Operators act on values (the operands) to produce a new value.
// Arithmetic operators are some of the simplest:
3 + 2; // => 5: addition
3 - 2; // => 1: subtraction
3 * 2; // => 6: multiplication
3 / 2; // => 1.5: division
// points[1].x - points[0].x; // => 1: more complicated operands also work
"3" + "2"; // => "32": + adds numbers, concatenates strings
// JavaScript defines some shorthand arithmetic operators
let count = 0; // Define a variable
count++; // Increment the variable
count--; // Decrement the variable
count += 2; // Add 2: same as count = count + 2;
count *= 3; // Multiply by 3: same as count = count * 3;
count; // => 6: variable names are expressions, too.
// Equality and relational operators test whether two values are equal,

// unequal, less than, greater than, and so on. They evaluate to true or false.
// let x = 2,
//   y = 3; // These = signs are assignment, not equality tests
// x === y; // => false: equality
// x !== y; // => true: inequality
// x < y; // => true: less-than
// x <= y; // => true: less-than or equal
// x > y; // => false: greater-than
// x >= y; // => false: greater-than or equal
// "two" === "three"; // => false: the two strings are different
// "two" > "three"; // => true: "tw" is alphabetically greater than "th"
// (false ===
//   (x > y)(
//     // => true: false is equal to false
//     // Logical operators combine or invert boolean values
//     x === 2
//   ) &&
//   (y === 3)(
//     // => true: both comparisons are true. && is AND
//     x > 3
//   )) ||
//   y < 3; // => false: neither comparison is true. || is OR
// !(x === y); // => true: ! inverts a boolean value

// Escape Characters
let café = 1;
// console.log(caf\u00E9);
// console.log(caf\u{E9});
console.log("\u{1F600}"); // Smiley face

// const café = 1; // This constant is named "caf\u{e9}"
// const café = 2; // This constant is different: "cafe\u{301}"
// café; // => 1: this constant has one value
// café; // => 2: this indistinguishable constant has a different value

// JavaScript does not treat every line break as a semicolon: it usually treats
// line breaks as semicolons only if it can’t parse the code without adding an implicit
// semicolon. More formally (and with three exceptions described a bit later), JavaScript
// treats a line break as a semicolon if the next nonspace character cannot be interpreted
// as a continuation of the current statement. Consider the following code:
// let a
// a
// =
// 3
// console.log(a)
// JavaScript interprets this code like this:
// let a; a = 3; console.log(a);

// There are three exceptions to the general rule that JavaScript interprets line breaks as
// semicolons when it cannot parse the second line as a continuation of the statement
// on the first line. The first exception involves the return, throw, yield, break, and
// continue statements (see Chapter 5). These statements often stand alone, but they are
// sometimes followed by an identifier or expression. If a line break appears after any of
// these words (before any other tokens), JavaScript will always interpret that line break
// as a semicolon. For example, if you write:

// return
// true;

// JavaScript assumes you meant:
// return; true;

// However, you probably meant:
// return true;
