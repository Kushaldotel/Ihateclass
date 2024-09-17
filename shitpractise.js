let name = "kushal";

console.log(name.indexOf("al"));

// console.log(name.slice(1, 4));

console.log(name.replace("al", "kush"));

// console.log(name.toUpperCase());

console.log(name.substring(1, 4));


const currentdate = new Date();

console.log(currentdate);

const users = {
    name: "kushal",
    age: 20,
}

console.log(users);

const finalstring = JSON.stringify(users);

console.log(finalstring);

const finalobject = JSON.parse(finalstring);

console.log(finalobject);