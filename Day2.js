// Data Types are used for defining type of Data which is stored by a variable.

// There are mainly two data Types :-
// 1. Primary Data Types
// 2. Reference Data Types

// Primary Types ( UBSNBSN )

// 1. Undefined
// It's simply means value of that variable is not defined yet.

let age;
// console.log(name);

// 2. Boolean
// Its value is either true or false.

let isLoggedIn = false;

// 3. String
// String is just a collection of characters
// In JS it can be declared using '' & ""
// Maximum length can be ->  2**53 - 1

let name = "Ankush";

// 4. Null
// It's used to show absence of value.
// Eg. Let say We have requested a temperature value but due to some issue it can't read temperature. So it should not send 0 value because 0 is also a temperature value , in scenarios like this null value should be returned.

let temperature = null;

// 5. BigInt
// Number data Type have some limit to store any value , so we have introduced bigInt.

let rupees = 1234567n;
// console.log(typeof rupees);

// 6. Symbol
// It's mostly used to create uniqueness.
// It's mostly used in react to make unique react components.

const sym1 = Symbol("ankush");
const sym2 = Symbol("ankush");

// console.log(sym1 == sym2);

// 7. Number
// It's used to define Decimal numbers and integer as well.
// The Number type has exactly 18,437,736,874,454,810,627 (that is, 2**64 - 2**53 + 3) values.

let num = 2;

// Reference Type
// These are called reference data type because reference is passed when we assign values to them instead of just value.

// 1. Array
// 2. Object

// We well cover this above two data type in upcoming lecture.
