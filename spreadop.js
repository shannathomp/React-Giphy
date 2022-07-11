//spread Operator
let arr1 = [1,2,3,4,5]
let arr2 = [...arr1, 6,7,8,9]

// console.log(arr1);
// console.log(arr2);
// console.log(arr1 === arr2);

//Descructuring objects
const person = {name: 'shanna', age: 15}
//how we done in the past
//* const name = person.name
//* console.log(name);

//how its done now
const{name,age} = person
console.log(name);
// console.log(age);

//Descructuring Arrays
const devs = ['shanna', 'Jaime', 'Ainur', 'G', 'Jabes']
const[jabes,lover,g,ainur,shanna] = devs
console.log(devs);
console.log(jabes);
console.log(lover);