const users = [
    { firstName: "John", lastName: "Doe", age: 25 },
    { firstName: "Jane", lastName: "Smith", age: 18 },
    { firstName: "Alice", lastName: "Johnson", age: 17 },
    { firstName: "Bob", lastName: "Brown", age: 30 }
];
const output = users.map(user => user.firstName + " " + user.lastName);
console.log("Full Names:", output);
console.log("First User Full Name:", output[0]);
const totalAge = users.reduce((acc, curr) => acc + curr.age, 0);
console.log("Total Age:", totalAge);
const averageAge = totalAge / users.length;
console.log("Average Age:", averageAge);
const under20LastNames = users
    .filter(user => user.age < 20)
    .map(user => user.lastName);
console.log("Last Names of Users Under 20:", under20LastNames);
const under20FirstNames = users
    .filter(user => user.age < 20)
    .map(user => user.firstName);
console.log("First Names of Users Under 20:", under20FirstNames);

