const user = {
    username: "Amit",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "Raj"
user.welcomeMessage()

console.log(this);

function chai(){
    let username = "Amit"
    console.log(this.username);
}

// chai()

let chai = function () {
    let username = "Amit"
    console.log(this.username);
}

chai =  () => {
    let username = "Amit"
    console.log(this);
}

chai()

const addTwo = (num1, num2) => {
    return num1 + num2
}

addTwo = (num1, num2) =>  num1 + num2

addTwo = (num1, num2) => ( num1 + num2 )

addTwo = (num1, num2) => ({username: "Amit"})

console.log(addTwo(3, 4))

const myArray = [2, 5, 3, 7, 8]

myArray.forEach()