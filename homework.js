// write a variable that is a string and output to console (hint: it's console.log(variable name))
let myString = "Hello, world!";
console.log(myString);

// write a variable that is a number and output to console (hint: it's console.log(variable name))
let myNumber = 42;
console.log(myNumber);

// write a variable that takes any two numbers and adds them
let sum = 2 + 2;

// write a variable that takes any two numbers and subtracts them and output to console
let difference = 200 - 2;
console.log(difference);

// write a variable that takes any two numbers and performs a modulo that has a value of 1  and output to console
let modulo = 9 % 3;
console.log(modulo);

// write a variable that takes any two numbers and perform an exponential value and output to console
let exponential = 3 ** 3;
console.log(exponential);

// write a statement that is false using a conditional statement and output to console
if (1 = 2) {
    console.log("true");
} else {
    console.log("false");
}

// I have created an object below, output to console the value of "breed" (hint: the structure is ObjectName.value you want to call)
// the keyword "this" is self referencing the object 

let siggy = {
    breed : "cat", 
    baby: "big baby", 
    fluffy: "fluffy", 
    output: function() {

        return `Siggy is a ${this.breed} that is a ${this.fluffy} ${this.baby}`

    }
}



// methods! You call methods the same way you call a function.  I'll call siggy.output() below. 
console.log(siggy.output()); 
console.log(siggy.breed); // cat

// copy + paste the siggy object below and rename the variable from Siggy to an animal or name of your choice 
// then, I want you to change the object to the value of your choosing  

let doge = {
    breed: "dog",
    baby: "puppy",
    fluffy: "super",
    output: function() {
        return `doge is a ${this.breed} that is a ${this.fluffy} ${this.baby}`;
    }
};

// console.log the values of that object one by one. 
console.log(doge.breed);
console.log(doge.baby);
console.log(doge.fluffy);

// create an array 
let myArray = [1, 2, 3, 4, 5];

// call the value in the 3 position of this array and output to console 
console.log(myArray[2]);

// call all values in the array using a loop 
for (let x of myArray) {
    console.log(x);
}

// what is the value of the variable ifStatement, leave your answer in the console. 

let ifStatement; 
let value = 5; 

if(value < 5)
{
    ifStatement = true;
}

else{
    ifStatement = false; 
}

console.log(ifStatement); 

