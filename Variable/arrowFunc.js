// normal function
function getCity() {
    return 'Dhaka';
}
console.log(getCity());

// same function as a variable
const getTown = function() {
    return "BagerHat";
}
console.log(getTown());

// further same function as a arrow function
const getCountry = () => {
    return "London";
}
console.log(getCountry());

// single statement in arrow function
const getDeveloper = (str) => str.toUpperCase();
console.log(getDeveloper('Saiful Islam'));

// arrow function in object property
// Dynamic context object using arrow function
const obj = {
    city: 'Dhaka',
    getLocation: () => {
        return this.city;
    }
}
console.log(obj.getLocation())