var nameVar = "Bryan";
nameVar = "Maverick";
console.log("nameVar", nameVar);

let nameLet = "Aleana";
nameLet = "Chloe";
console.log("nameLet", nameLet);

const nameConst = "Wolfe";
console.log("nameConst", nameConst);

// Block Scoping
const fullName = "Bryan Whyte";
let firstName;

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);

// const first, let second, var never.
