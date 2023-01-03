// Spread and rest are very important for arrays and objects

/**
 * Spread Operator
 **/
// Array usage example
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 3, 4, 5];
console.log(arr2);

// copy array 
const arr3 = [...arr1];
console.log(arr3);


// Object usage example
const obj1 = {
    city: "Dhaka",
    country: "Bangladesh"
}

const obj2 = {
    ...obj1,
    address: "Mohakhali",
    city: "Sylhet"  // existing property changed
}
console.log(obj2);


// String usage example
const str1 = "This is a string";
const arr = [...str1];
console.log(arr);



/**
 * Rest Operator
**/
// Array usage example
const [first, second, ...others] = [1, 2, 45, 4, 5];
console.log(others);
console.log(first, second);


// Object usage example
const {c, r, ...kg} = {
    c: "Dhaka",
    r: "Bangladesh",
    k: "Random",
    g: "Good"
}

console.log(kg);
console.log(c, r);