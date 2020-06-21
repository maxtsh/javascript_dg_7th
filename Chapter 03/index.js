// Separators in Numeric Literals
// You can use underscores within numeric literals to break long literals up into chunks
// that are easier to read:
let billion = 1_000_000_000; // Underscore as a thousands separator.
let bytes = 0x89_ab_cd_ef; // As a bytes separator.
let bits = 0b0001_1101_0111; // As a nibble separator.
let fraction = 0.123_456_789; // Works in the fractional part, too.
// At the time of this writing in early 2020, underscores in numeric literals are not yet
// formally standardized as part of JavaScript. But they are in the advanced stages of the
// standardization process and are implemented by all major browsers and by Node.

console.log(billion); // 1000000000

// Arithmetic in JavaScript
// JavaScript programs work with numbers using the arithmetic operators . that the language
// provides. These include + for addition, - for subtraction, * for multiplication, /
// for division, and % for modulo (remainder after division). ES2016 adds ** for exponentiation.
// Full details on these and other operators can be found in Chapter 4.
// In addition to these basic arithmetic operators, JavaScript supports more complex
// mathematical operations through a set of functions and constants defined as properties
// of the Math object:

const x = 0,
  y = 0,
  z = 0;
Math.pow(2, 53); // => 9007199254740992: 2 to the power 53
Math.round(0.6); // => 1.0: round to the nearest integer
Math.ceil(0.6); // => 1.0: round up to an integer
Math.floor(0.6); // => 0.0: round down to an integer
Math.abs(-5); // => 5: absolute value
Math.max(x, y, z); // Return the largest argument
Math.min(x, y, z); // Return the smallest argument
Math.random(); // Pseudo-random number x where 0 <= x < 1.0
Math.PI; // π: circumference of a circle / diameter
Math.E; // e: The base of the natural logarithm
Math.sqrt(3); // => 3**0.5: the square root of 3
Math.pow(3, 1 / 3); // => 3**(1/3): the cube root of 3
Math.sin(0); // Trigonometry: also Math.cos, Math.atan, etc.
Math.log(10); // Natural logarithm of 10
Math.log(100) / Math.LN10; // Base 10 logarithm of 100
Math.log(512) / Math.LN2; // Base 2 logarithm of 512
Math.exp(3); // Math.E cubed
// ES6 defines more functions on the Math object:
Math.cbrt(27); // => 3: cube root
Math.hypot(3, 4); // => 5: square root of sum of squares of all arguments
Math.log10(100); // => 2: Base-10 logarithm
Math.log2(1024); // => 10: Base-2 logarithm
Math.log1p(x); // Natural log of (1+x); accurate for very small x
Math.expm1(x); // Math.exp(x)-1; the inverse of Math.log1p()
Math.sign(x); // -1, 0, or 1 for arguments <, ==, or > 0
Math.imul(2, 3); // => 6: optimized multiplication of 32-bit integers
Math.clz32(0xf); // => 28: number of leading zero bits in a 32-bit integer
Math.trunc(3.9); // => 3: convert to an integer by truncating fractional part
Math.fround(x); // Round to nearest 32-bit float number
Math.sinh(x); // Hyperbolic sine. Also Math.cosh(), Math.tanh()
Math.asinh(x); // Hyperbolic arcsine. Also Math.acosh(), Math.atanh()

// Arithmetic in JavaScript does not raise errors in cases of overflow, underflow, or division
// by zero. When the result of a numeric operation is larger than the largest representable
// number (overflow), the result is a special infinity value, Infinity. Similarly,
// when the absolute value of a negative value becomes larger than the absolute value of
// the largest representable negative number, the result is negative infinity, -Infinity.

// The infinite values behave as you would expect: adding, subtracting, multiplying, or
// dividing them by anything results in an infinite value (possibly with the sign
// reversed).

// Underflow occurs when the result of a numeric operation is closer to zero than the
// smallest representable number. In this case, JavaScript returns 0. If underflow occurs
// from a negative number, JavaScript returns a special value known as “negative zero.”
// This value is almost completely indistinguishable from regular zero and JavaScript
// programmers rarely need to detect it.

// Division by zero is not an error in JavaScript: it simply returns infinity or negative
// infinity. There is one exception, however: zero divided by zero does not have a welldefined
// value, and the result of this operation is the special not-a-number value, NaN.
// NaN also arises if you attempt to divide infinity by infinity, take the square root of a
// negative number, or use arithmetic operators with non-numeric operands that cannot
// be converted to numbers.

// JavaScript predefines global constants Infinity and NaN to hold the positive infinity
// and not-a-number value, and these values are also available as properties of the
// Number object:

console.log(Infinity); // A positive number too big to represent

console.log(Number.POSITIVE_INFINITY); // Same value
console.log(1 / 0); // => Infinity
console.log(Number.MAX_VALUE * 2); // => Infinity; overflow
-Infinity; // A negative number too big to represent
Number.NEGATIVE_INFINITY - // The same value
1 / 0 - // => -Infinity
  Number.MAX_VALUE * 2; // => -Infinity
NaN; // The not-a-number value
Number.NaN; // The same value, written another way
0 / 0; // => NaN
Infinity / Infinity; // => NaN
Number.MIN_VALUE / 2 - // => 0: underflow
Number.MIN_VALUE / 2 - // => -0: negative zero
1 / Infinity - // -> -0: also negative 0
  0;
// The following Number properties are defined in ES6
Number.parseInt(); // Same as the global parseInt() function
Number.parseFloat(); // Same as the global parseFloat() function
Number.isNaN(x); // Is x the NaN value?
Number.isFinite(x); // Is x a number and finite?
Number.isInteger(x); // Is x an integer?
Number.isSafeInteger(x); // Is x an integer -(2**53) < x < 2**53?
Number.MIN_SAFE_INTEGER; // => -(2**53 - 1)
Number.MAX_SAFE_INTEGER; // => 2**53 - 1
Number.EPSILON; // => 2**-52: smallest difference between numbers

// The not-a-number value has one unusual feature in JavaScript: it does not compare
// equal to any other value, including itself. This means that you can’t write x === NaN
// to determine whether the value of a variable x is NaN. Instead, you must write x != x
// or Number.isNaN(x). Those expressions will be true if, and only if, x has the same
// value as the global constant NaN.

// The global function isNaN() is similar to Number.isNaN(). It returns true if its argument
// is NaN, or if that argument is a non-numeric value that cannot be converted to a
// number. The related function Number.isFinite() returns true if its argument is a
// number other than NaN, Infinity, or -Infinity. The global isFinite() function
// returns true if its argument is, or can be converted to, a finite number.

// The negative zero value is also somewhat unusual. It compares equal (even using JavaScript’s
// strict equality test) to positive zero, which means that the two values are
// almost indistinguishable, except when used as a divisor:

let zero = 0; // Regular zero
let negz = -0; // Negative zero
zero === negz; // => true: zero and negative zero are equal
1 / zero === 1 / negz; // => false: Infinity and -Infinity are not equal

console.log(NaN === NaN); // false => wrong Answer
console.log(Object.is(NaN, NaN)); // True => Correct answer

// JavaScript numbers have plenty of precision and can approximate 0.1 very closely.
// But the fact that this number cannot be represented exactly can lead to problems.
// Consider this code:

// let x = 0.3 - 0.2; // thirty cents minus 20 cents
// let y = 0.2 - 0.1; // twenty cents minus 10 cents
// x === y; // => false: the two values are not the same!
// x === 0.1; // => false: .3-.2 is not equal to .1
// y === 0.1; // => true: .2-.1 is equal to .1

// Because of rounding error, the difference between the approximations of .3 and .2 is
// not exactly the same as the difference between the approximations of .2 and .1. It is
// important to understand that this problem is not specific to JavaScript: it affects any
// programming language that uses binary floating-point numbers. Also, note that the
// values x and y in the code shown here are very close to each other and to the correct
// value. The computed values are adequate for almost any purpose; the problem only
// arises when we attempt to compare values for equality.
// If these floating-point approximations are problematic for your programs, consider
// using scaled integers. For example, you might manipulate monetary values as integer
// cents rather than fractional dollars.

// Arbitrary Precision Integers with BigInt
// One of the newest features of JavaScript, defined in ES2020, is a new numeric type
// known as BigInt. As of early 2020, it has been implemented in Chrome, Firefox, Edge,
// and Node, and there is an implementation in progress in Safari. As the name implies,
// BigInt is a numeric type whose values are integers. The type was added to JavaScript
// mainly to allow the representation of 64-bit integers, which are required for compatibility
// with many other programming languages and APIs. But BigInt values can have
// thousands or even millions of digits, should you have need to work with numbers

// that large. (Note, however, that BigInt implementations are not suitable for cryptography
//     because they do not attempt to prevent timing attacks.)
//     BigInt literals are written as a string of digits followed by a lowercase letter n. By
//     default, the are in base 10, but you can use the 0b, 0o, and 0x prefixes for binary, octal,
//     and hexadecimal BigInts:
console.log(1234n); // A not-so-big BigInt literal
0b111111n; // A binary BigInt
0o7777n; // An octal BigInt
console.log(0x8000000000000000n); // => 2n**63n: A 64-bit integer

// You can use BigInt() as a function for converting regular JavaScript numbers or
// strings to BigInt values:

BigInt(Number.MAX_SAFE_INTEGER); // => 9007199254740991n
let string = "1" + "0".repeat(100); // 1 followed by 100 zeros.
BigInt(string); // => 10n**100n: one googol

// Arithmetic with BigInt values works like arithmetic with regular JavaScript numbers,
// except that division drops any remainder and rounds down (toward zero):

1000n + 2000n; // => 3000n
3000n - 2000n; // => 1000n
2000n * 3000n; // => 6000000n
3000n / 997n; // => 3n: the quotient is 3
// (3000n %
//   997n(
//     // => 9n: and the remainder is 9
//     2n ** 131071n
//   )) -
//   1n; // A Mersenne prime with 39457 decimal digits

// Dates and Times
// JavaScript defines a simple Date class for representing and manipulating the numbers
// that represent dates and times. JavaScript Dates are objects, but they also have a
// numeric representation as a timestamp that specifies the number of elapsed milliseconds
// since January 1, 1970:

let timestamp = Date.now(); // The current time as a timestamp (a number).
let now = new Date(); // The current time as a Date object.
let ms = now.getTime(); // Convert to a millisecond timestamp.
let iso = now.toISOString(); // Convert to a string in standard format.

console.log(timestamp, now, ms, iso);

// The Date class and its methods are covered in detail in §11.4. But we will see Date
// objects again in §3.9.3 when we examine the details of JavaScript type conversions.

// In ES6, strings are iterable, and if you use the for/of loop or ... operator
// with a string, it will iterate the actual characters of the string, not the 16-bit values.
const name = "Max";
console.log(name[0], name.length); // M

const arrName = [...name];
console.log(arrName);
