// When we do not pass the value of the parameter or keep it undefined, we use the default parameter
function student(name) {
  return name.toUpperCase();
}
console.log(student("Saiful"));

// The function will work even if the argument is not passed
function getStudent(name) {
  if (!name) {
    name = "Emon";
  }
  return name.toUpperCase();
}
console.log(getStudent());

// same function in shortcut
function getCity(city) {
  city = city || "Feni";
  return city.toUpperCase();
}
console.log(getCity());

// different way
function getPerson(firstName = "Saiful") {
  return firstName.toUpperCase();
}
console.log(getPerson());

// The same will work for multiple parameters as well
function getStu(name = "Saiful", roll = 484079) {
  return name.toUpperCase() + roll;
}
console.log(getStu());
