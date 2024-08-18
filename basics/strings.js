const myName = "Amit"
const repoCount = 50

console.log(myName + repoCount + " Value");

console.log(`Hello my name is ${myName} and my repo count is ${repoCount}`);

const gameName = new String('Amit-Kumar-Gupta')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Amit    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com/amit%20gupta"

console.log(url.replace('%20', '-'))

console.log(url.includes('raj'))

console.log(gameName.split('-'));