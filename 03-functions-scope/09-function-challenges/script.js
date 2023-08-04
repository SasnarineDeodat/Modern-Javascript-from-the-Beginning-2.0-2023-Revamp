// // Challenge 1
// function getCelisus(f) {
//   const celsius = ((f - 32) * 5) / 9;
//   return celsius;
// }
// console.log(getCelisus(50));

const getCelsius = (f) => ((f - 32) * 5) / 9;
console.log(`The temp is ${getCelsius(50)} \xB0C`);

// Challenge 2
function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  //   console.log(min);

  return {
    min,
    max,
  };
}
console.log(minMax([2, 31, 4, 5, 6]));

// Challenge 3
((length, width) => {
  const area = length * width;

  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}`;

  console.log(output);
})(20, 10);
