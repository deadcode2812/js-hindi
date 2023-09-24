let score = undefined;

console.log(typeof score); 

let valueInNumber = Number(score);

console.log(typeof valueInNumber); 
console.log(valueInNumber); //33

// "33" => 33
// "33abc" => NaN
// "abcd" => NaN
// true => 1; false => 0
// null => number (value -> 0)
// undefiend => NaN


let isLoggedIn = undefined;

let valueInBoolean = Boolean(isLoggedIn);

console.log(valueInBoolean);

// 1 => true; 0 => false
// "" => false
// "abhinay" => true
// null => false
// undefined => false