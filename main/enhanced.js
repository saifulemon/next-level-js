// Enhanced Object Literals
const city = "New York";
const country = 'United States'; 
const cityKey = 'city';
const address = {
    [cityKey]: city,    //  dynamically accessed from global variables
    country
}
console.log(address);