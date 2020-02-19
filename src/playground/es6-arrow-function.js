// ES5 Function
const square = function(x) {
  return x * x;
};

console.log(square(8));

// Arrow function!
// const squareArrow = (x) => {
//   return x * x;
// };

// Implicit return
const squareArrow = x => x * x;

console.log(squareArrow(9));

const getFirstName = firstName => {
  return firstName.split(" ")[0];
};

console.log(getFirstName("Rock Man"));

const getLastName = lastName => lastName.split(" ")[1];

console.log(getLastName("Rock Man"));
