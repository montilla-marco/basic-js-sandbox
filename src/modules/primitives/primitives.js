/**
 * primitive types
 * .- Number
 * .- String
 * .- Boolean
 * .- Null
 * .- Undefined
 * Technically there are two others: Symbol and BigInt
 *
 * NUMBERS IN JS
 * .- JavaScript has ONE Number type      50
 * .- Positive numbers!                   7
 * .- Negative numbers!                   -45, -0
 * .- Whole number (integers)!            77777777
 * .- Decimal numbers!                    3.81999999999
 *
 * NaN is a numeric value that represents something that is not...a number
 * 0 / 0  = NaN      1 + NaN = NaN
 * Infinity (1 / 0)
 * -Infinity (-1 / 0)
 *
 * Important Operators
 * Mod (%)  get the remain value of the division     25 % 5 = 0       14 % 4 = 2
 * Exponential (**)   2 ** 3 = 8
 *
 * Multiplication is first 3 - 9 * 2 = -15
 * Parenthesis are used to group operators  (3 - 9) * 2 = -12
 *
 * VARIABLES
 * Variables are like "labeled jars" for a value in JavaScript.
 * We can store a value and give it a name, so that we can...
 * .- recall it
 * .- use it
 * .- or change it later on.
 *
 * Basic sintax:
 * let someName = value;    lowerCammelCase
 * let age = 55; Creste a variable called "age" and give it the value of 55
 *
 * const works just like let, except you CANNOT change the value
 * NOT ALLOWED! YOU'RE IN TROUBLE!!
 *
 * BOOLEAN
 * TRUE or FALSE
 * Booleans are simple True or False values Yes or No. 1 or 0.
 *
 * VARIABLES CAN CHANGE TYPE
 * let age = 55;  Number
 * age = true;  Boolean
 * You probably wouldn't change a number to a boolean, but you can!
 *
 * STRINGS
 * In JavaScript, Strings are pieces of text, or strings of characters.
 * We wrap them in quote.
 * Whether you use single or double quotes, just make sure you are consistent.
 *
 * String Methods and Properties
 * Primitive values, like "John Doe", cannot have properties or methods
 * (because they are not objects). But with JavaScript, methods and properties
 * are also available to primitive values, because JavaScript treats primitive
 * values as objects when executing methods and properties.
 *
 * STRINGS ARE INDEXED
 * Each character has a corresponding index
 * (a positional number)
 * "C  H  I  C  K  E  N"
 * [0, 1, 2, 3, 4, 5, 6]
 *
 * There are 3 methods for extracting a part of a string:
 *
 * .- slice(start, end)
 * .- substring(start, end)
 * .- substr(start, length)
 *
 * Note
 * The replace() method does not change the string it is called on.
 * The replace() method returns a new string.
 * The replace() method by default replaces only the first match
 *
 * If you want to replace all matches, use a regular expression with the /g flag set.
 * To replace case insensitive, use a regular expression with an /i flag (insensitive)
 *
 * A string is converted to upper case with toUpperCase()
 * A string is converted to lower case with toLowerCase()
 * The concat() joins two or more strings
 * The trim() method removes whitespace from both sides of a string
 *
 * ECMAScript 2017 added two String methods: padStart() and padEnd() to support padding
 * at the beginning and at the end of a string.
 * let numb = 5;
 * let text = numb.toString();
 * let padded = text.padStart(4,"0");    "0005"
 *
 * The charAt() method returns the character at a specified index (position) in a string
 * ECMAScript 5 (2009) allows property access [ ] on strings
 * A string can be converted to an array with the split() method
 *
 * STRING ESCAPES
 * \n - newline
 * \' - single quote
 * \" - double quote
 * \\ - backslash
 *
 * STRING
 * TEMPLATE LITERALS
 * Template literals are strings that allow embedded expressions, which will be evaluated
 * and then turned into a resulting string.
 * `I counted ${3 + 4} sheep`;
 * WE USE BACK-TICKS NOT SINGLE QUOTES
 *`I am a template literal`
 * The back-tick key is usually above the tab key
 *
 * NULL & UNDEFINED
 * Null
 *  .- "Intentional absence of any value"
 *  .- Must be assigned
 * Undefined
 *  .- Variables that do not have an assigned value are undefined
 *
 * JavaScript Math Object
 * The JavaScript Math object allows you to perform mathematical tasks on numbers.
 * Unlike other objects, the Math object has no constructor. The Math object is static.
 * All methods and properties can be used without creating a Math object first.
 * https://www.w3schools.com/js/js_math.asp
 *
 * In JavaScript there are 5 different data types that can contain values:
 * .- string
 * .- number
 * .- boolean
 * .- object
 * .- function
 *
 * There are 6 types of objects:
 * .- Object
 * .- Date
 * .- Array
 * .- String
 * .- Number
 * .- Boolean
 *
 * And 2 data types that cannot contain values:
 * .- null
 * .- undefined
 *
 */