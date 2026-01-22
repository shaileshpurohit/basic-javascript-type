# Basic JavaScript Type - Learning Project

A comprehensive JavaScript learning project covering fundamental concepts,
syntax, and modern JavaScript features. This project serves as a practical guide
to understanding core JavaScript concepts through hands-on examples.
## 🎯 Overview

This project is designed to help developers understand and practice essential
JavaScript concepts. Each file focuses on a specific topic with practical
examples and demonstrations.

## ✨ Features

- **Core JavaScript Syntax** - Basic variables, functions, and data types
- **Modern Variable Declarations** - `let` and `const` usage
- **Arrow Functions** - ES6+ function syntax
- **Objects** - Object creation, methods, and `this` context
- **Arrays** - Array operations, methods, and iteration
- **Reference Types** - Understanding how arrays and objects work as references
- **Destructuring** - Object and array destructuring patterns
- **Spread & Rest Operators** - Modern JavaScript operators
- **Asynchronous Code** - Promises and async operations

## 📁 File Structure

```
Basic-Javascript-type/
├── core-js-syntax.js          # Basic JavaScript syntax and functions
├── let-and-const.js           # let and const variable declarations
├── arrow-functions.js         # Arrow function syntax and examples
├── objects.js                 # Object creation and methods
├── arrays.js                  # Array operations and methods
├── arrays-and-reference-types.js  # Arrays as reference types
├── destructuring.js           # Object and array destructuring
├── spread-and-rest.js         # Spread and rest operators
├── async-code.js              # Promises and asynchronous code
└── README.md                  # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js installed on your system (version 12 or higher recommended)
- Basic understanding of programming concepts

### Running the Files

You can run any JavaScript file using Node.js:

```bash
node core-js-syntax.js
node let-and-const.js
node arrow-functions.js
# ... and so on
```

## 📖 Concepts Covered

### 1. Core JavaScript Syntax (`core-js-syntax.js`)

**Features:**

- Variable declarations using `var`
- Primitive data types (string, number, boolean)
- Function declarations
- String concatenation
- Console logging

**Key Concepts:**

- Basic variable assignment
- Function parameters and return values
- String manipulation

**Example:**

```javascript
var name = "Shailesh";
var age = 24;
var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby) {
    return "Name is " + userName + ", age is " + userAge +
        " and the user has hobbies: " + userHasHobby;
}
```

---

### 2. Let and Const (`let-and-const.js`)

**Features:**

- `const` for constant values
- `let` for block-scoped variables
- Variable reassignment with `let`
- Immutability with `const`

**Key Concepts:**

- Block scope vs function scope
- When to use `let` vs `const`
- Variable mutability

**Example:**

```javascript
const name = "shailesh";
let age = 24;
const hasHobbies = true;

age = 35; // Allowed with let
// name = "new name"; // Error: cannot reassign const
```

---

### 3. Arrow Functions (`arrow-functions.js`)

**Features:**

- Arrow function syntax (`=>`)
- Different arrow function forms:
  - With parameters and body
  - Single parameter (no parentheses)
  - No parameters
  - Implicit return

**Key Concepts:**

- Concise function syntax
- `this` binding differences
- When to use arrow functions

**Example:**

```javascript
// Traditional function
function summarizeUser(userName, userAge, userHasHobby) {
    return "Name is " + userName + ", age is " + userAge;
}

// Arrow function equivalent
const summarizeUser = (userName, userAge, userHasHobby) => {
    return "Name is " + userName + ", age is " + userAge;
};

// Single parameter (no parentheses needed)
const addOne = (a) => a + 1;

// No parameters
const addRandom = () => 1 + 2;
```

---

### 4. Objects (`objects.js`)

**Features:**

- Object literal syntax
- Object methods
- `this` keyword in methods
- Method invocation

**Key Concepts:**

- Object properties
- Method definitions
- `this` context in objects

**Example:**

```javascript
const person = {
    name: "shailesh",
    age: 24,
    greet() {
        console.log("Hi, I am " + this.name);
    },
};

person.greet(); // Output: "Hi, I am shailesh"
```

---

### 5. Arrays (`arrays.js`)

**Features:**

- Array creation and manipulation
- Array methods (`map()`, `push()`, etc.)
- Array iteration
- Array transformation

**Key Concepts:**

- Array operations
- Higher-order functions
- Immutable vs mutable operations

**Example:**

```javascript
const hobbies = ["Sports", "Cooking"];

// Transform array with map
console.log(hobbies.map((hobby) => "Hobby: " + hobby));
// Output: ["Hobby: Sports", "Hobby: Cooking"]

// Iterate with for...of
for (let hobby of hobbies) {
    console.log(hobby);
}
```

---

### 6. Arrays and Reference Types (`arrays-and-reference-types.js`)

**Features:**

- Arrays as reference types
- Array mutation
- Understanding references vs values
- Array methods that modify arrays

**Key Concepts:**

- Reference vs value types
- Mutating arrays
- How references work in JavaScript

**Example:**

```javascript
const hobbies = ["Sports", "Cooking"];
hobbies.push("Programming"); // Modifies the original array
console.log(hobbies); // ["Sports", "Cooking", "Programming"]
```

---

### 7. Destructuring (`destructuring.js`)

**Features:**

- Object destructuring
- Array destructuring
- Destructuring in function parameters
- Extracting specific properties/values

**Key Concepts:**

- Extracting values from objects and arrays
- Shorthand syntax
- Default values (can be added)

**Example:**

```javascript
const person = {
    name: "shailesh",
    age: 24,
};

// Object destructuring
const { name, age } = person;
console.log(name, age); // "shailesh" 24

// Destructuring in function parameters
const printName = ({ name }) => {
    console.log(name);
};

// Array destructuring
const hobbies = ["Sports", "Cooking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2); // "Sports" "Cooking"
```

---

### 8. Spread and Rest Operators (`spread-and-rest.js`)

**Features:**

- Spread operator (`...`) for arrays
- Spread operator for objects
- Rest parameters in functions
- Copying arrays and objects

**Key Concepts:**

- Shallow copying
- Combining arrays/objects
- Variable function arguments
- Immutability patterns

**Example:**

```javascript
// Spread operator - copying
const hobbies = ["Sports", "Cooking"];
const copiedArray = [...hobbies]; // Creates a new array

const person = { name: "shailesh", age: 24 };
const copiedPerson = { ...person }; // Creates a new object

// Rest operator - collecting arguments
const toArray = (...args) => {
    return args;
};
console.log(toArray(1, 2, 3, 4)); // [1, 2, 3, 4]
```

---

### 9. Asynchronous Code (`async-code.js`)

**Features:**

- Promises
- `setTimeout` for asynchronous operations
- Promise chaining with `.then()`
- Understanding the event loop

**Key Concepts:**

- Asynchronous JavaScript
- Promise creation and consumption
- Callback vs Promise patterns
- Event loop behavior

**Example:**

```javascript
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done!");
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log("Timer is done!");
    fetchData()
        .then((text) => {
            console.log(text);
            return fetchData();
        })
        .then((text2) => {
            console.log(text2);
        });
}, 2000);
```

## 💡 Usage

### Running Individual Files

Each file can be executed independently to see the output:

```bash
# Run core syntax example
node core-js-syntax.js

# Run arrow functions example
node arrow-functions.js

# Run async code example
node async-code.js
```

### Learning Path

Recommended order for learning:

1. **core-js-syntax.js** - Start with basics
2. **let-and-const.js** - Understand modern variable declarations
3. **arrow-functions.js** - Learn modern function syntax
4. **objects.js** - Understand object structure
5. **arrays.js** - Learn array operations
6. **arrays-and-reference-types.js** - Understand references
7. **destructuring.js** - Learn destructuring patterns
8. **spread-and-rest.js** - Master modern operators
9. **async-code.js** - Understand asynchronous programming

## 🎓 Learning Objectives

After going through this project, you will understand:

- ✅ Basic JavaScript syntax and data types
- ✅ Modern variable declarations (`let`, `const`)
- ✅ Arrow function syntax and usage
- ✅ Object creation and methods
- ✅ Array operations and methods
- ✅ Reference types and mutability
- ✅ Destructuring patterns
- ✅ Spread and rest operators
- ✅ Promises and asynchronous code

## 📝 Notes

- All examples use modern JavaScript (ES6+)
- Some files contain commented code showing alternative approaches
- Each file is self-contained and can be run independently
- The examples demonstrate practical, real-world usage patterns

## 🔧 Requirements

- **Node.js**: Version 12.0.0 or higher
- **No additional dependencies**: All examples use vanilla JavaScript

## 📄 License

This is an educational project for learning purposes.

---

**Happy Learning! 🚀**
