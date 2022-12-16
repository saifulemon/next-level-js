/***  Object destructuring 👇  ***/
// Here we are breaking the address object and taking only the city property inside the object
const address = {
    city: 'Feni',
    country: 'Bangladesh',
    region: 'Asia'
};
const { city, country } = address;       // destructuring format
// console.log(city, country);

// same object in complex way
const address2 = {
    city: 'Feni',
    house: {   // Here 'no' & 'village' are stored as variables and must be accessed by that name while accessing
        no: 158,
        village: "Mohakhali"
    },
    country: 'Bangladesh',
    region: 'Asia'
};
const { house: { no, village} } = address2;       // Here there is another object named house inside the address2 object, now to access the property of house object, write in destructuring format like this
console.log(no, village);


/***  Array destructuring 👇  ***/
const arr = ['Dhaka', 1, 2, 3, 4];
const [first , second , third , fourth] = arr;   // In case of object we could access by property names but in case of array we have to do destructuring according to index.
console.log(first, second, third, fourth);


/***  destructuring in function 👇  ***/
// using object
function printCity(obj)  {
    console.log(obj.city)
}
const address3 = {
    city: 'Muscat',
    country: 'Oman'
};
printCity(address3);

// now destructuring same function
function printCity({city})  {
    console.log(city)
}
const address4 = {
    city: 'Muscat',
    country: 'Oman'
};
printCity(address4);


// using array
function printCity1([first, second, third])  {
    console.log(first, second, third);
}
const arr1 = ['Dhaka', 'Chattogram', 'Noakhali'];
printCity1(arr1);