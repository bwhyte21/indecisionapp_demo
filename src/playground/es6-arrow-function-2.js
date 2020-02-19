const add = (a, b) => {
  return a + b;
};

console.log(add(5, 4, 9001));

const user = {
  name: "Bryan",
  cities: ["DC", "Lanham", "Columbia", "Orlando"],
  printPlacesLived() {
    // has same characteristics as ES5 functions (above).
    // map : array method like forEach, but a bit different.
    // forEach lets you do something with each item, map lets you transform each item per iteration getting a new array back.
    return this.cities.map(city => this.name + " has lived in " + city);

    // this.cities.forEach(city => {
    //   console.log(this.name + " has lived in " + city);
    // });
  },
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [3, 6, 9],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(
      num => num + " x " + this.multiplyBy + " = " + num * this.multiplyBy,
    );
  },
};

console.log(multiplier.multiply());
