// Core Syntax

const name = "shailesh";
let age = 24;
const hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies " +
    userHasHobby
  );
}

// const add = (a, b) => a + b;
// const addOne = (a) => 1 + 2;
const addRandom = () => 1 + 2;

console.log(addRandom());

console.log(summarizeUser(name, age, hasHobbies));
