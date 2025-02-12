// 1. Define a function called sayHello that logs “Hello, World!” to the console.
// Call the function after defining it.
function sayHello(){
    console.log("Hello, World!");
}
sayHello();
// 2. Create a function named displayWarning that logs “Warning! System Overload!”
// to the console. Call the function once after defining it.

function displayWarning(){
    console.log("Warning! System Overload!");
}
displayWarning();
// 3. Write a function called printStatus that logs “System Status: Active” to the
// console. Call the function after defining it.

function printStatus(){
    console.log("System Status: Active");
}
printStatus();

// 4. Define two functions:
// – initialize that logs “Initialization Complete.”
// – shutdown that logs “System Shutting Down…”
// Inside the initialize function, call the shutdown function.
function initialize(){
    console.log("Initialization Complete.");
    shutDown();
}
function shutDown(){
    console.log("System Shutting Down…");
}
initialize();

// 5. Create two functions:
// – startProcess that logs “Process Started.”
// – endProcess that logs “Process Ended.”
// Inside the startProcess function, call the endProcess function.
function startProcess(){
    console.log("process Started.");
    endProcess();
}
function endProcess(){
    console.log("Process Ended.")
}
startProcess();

// 6. Define a function called greetUser that takes a name parameter and logs
// “Hello, [name]!” to the console. Call it with different names.
function greetUser(name){
    console.log("Hello,{name}!");
}
greetUser("narendher");
greetUser("jith");

// 7. Write a function calculateSum that takes two numbers as parameters and logs
// their sum to the console. Call the function with different values.
function calculateSum(a,b){
    console.log(a + b);
}
calculateSum(23,87)
calculateSum(11,9);

// 8. Create a function countDown that logs numbers from 5 to 1 in descending order.
// Call the function after defining it.
function countDown(){
    for(i = 5; i>=1; i--) {
    console.log(i);
    }
}
countDown();

// 9. Write a function checkEvenOdd that takes a number as input and logs whether it
// is even or odd. Call it with different numbers.
function checkEvenOdd(i){
    if (i % 2 == 0){
        console.log("even");
    }
    else{
    console.log("odd");
    }
}
checkEvenOdd(5);
checkEvenOdd(2);

// 10. Define two functions:
// – beginSession that logs “Session Started.”
// – endSession that logs “Session Ended.”
// Inside the beginSession function, call the endSession function.
function beginSession(){
    console.log("Session Started.");
    endSession();
}
function endSession(){
    console.log("Session Ended.");
}
beginSession();