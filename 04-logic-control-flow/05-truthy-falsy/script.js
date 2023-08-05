// Falsy  Values:
// - false
// - 0
// - "" or """ (Empty string)
// - null
// - undefined
// - NaN

// Truthy Values:
// - Everything that is not falsy
// - true
// - "0" (0 in a string)
// - "false" (false in a string)
//- [] (Empty array)
// - {} (Empty object)
// - function () {} (Empty function)

const x = function () {};

if (x) {
  console.log("This is truthy");
} else {
  console.log("This is falsy");
}

console.log(Boolean(x));

// Truthy and falsy caveats
const children = 3;

if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log("Please enter number of children");
}

// Checking for empty arrays
const posts = ["Post One"];

if (posts.length > 0) {
  console.log("List Posts");
} else {
  console.log("No Posts To List");
}

// Checking for empty objects
const user = {};
if (Object.keys(user).length > 0) {
  console.log("List user");
} else {
  console.log("No User");
}

// Loose Equality (==)
console.log(false == 0);
console.log("" == 0);
console.log(null == undefined);
