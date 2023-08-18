// Create a promise
const promise = new Promise((resolve, reject) => {
  // Do some async task
  setTimeout(() => {
    console.log("Async task complete");
    resolve();
  }, 1000);
});

// promise.then(() => {
//   console.log("Promise consumed..");
// });

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ name: "Sasnarine", age: 30 });
    } else {
      reject("Error: Something");
    }
  }, 1000);
});
getUser
  .then((user) => console.log(user))
  .catch((error) => console.log(error))
  .finally(() => console.log("The Promise has been resolved or rejected"));

console.log("Hello from global scope");
