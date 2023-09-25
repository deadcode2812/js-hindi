console.log(2 > 1)  // true
console.log(2 == 1); // false

console.log("2" > 1);  // true
console.log("2" == 1); //false

console.log(null > 0);  // false, because here null is converted to NaN
console.log(null == 0);  // false, because here null is converted to NaN
console.log(null >= 0);  // true, because here null is converted to 0

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined < 0); // false
console.log(undefined >= 0); // false

// === , strict operator ,also check for the datatypes

console.log("2" === 2); // false



