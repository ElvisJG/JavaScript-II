// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function batman() {
  let secretIdentity = 'Bruce Wayne';
  function joker() {
    console.log(`Why hello there Batman, or should i say... ${secretIdentity}`);
  }
  return joker;
}

let gotham = batman();
console.log(gotham());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () => {
    count = ++count;
    return count;
  };
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2
console.log(newCounter()); // 3
console.log(newCounter()); // 4
console.log(newCounter()); // 5
console.log(newCounter()); // 6

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.

const counterFactory = () => {
  let count = 0;

  increment = () => ++count;
  decrement = () => --count;
  return { increment, decrement };
};

const newestCounter = counterFactory();
console.log(newestCounter.increment()); // 1
console.log(newestCounter.increment()); // 2
console.log(newestCounter.decrement()); // 1
console.log(newestCounter.decrement()); // 0
console.log(newestCounter.decrement()); // -1
