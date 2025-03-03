// Write a for loop to print numbers from 1 to 10.
for (var num = 1; num <= 10; num++){
    console.log(num);
}

//Write a for loop to calculate the sum of all numbers from 1 to 100.
let sum = 0;
for (var num = 1; num <= 100; num++){
    sum += num;
}
console.log(sum);

//Write a for loop to print the multiplication table of 7 (up to 10).
let table = 7;
for (var i =1; i <= 10; i++){
    console.log(`${table} x ${i} = ${table * i}`);
}

//Write a for loop to print all even numbers between 1 and 20.
for (var i = 2; i<= 20; i+=2){
 console.log(i);
}

//Write a for loop to calculate the factorial of a number (e.g., 5!).
let no = parseInt(prompt("Enter a number : "));
if (isNaN(no) || no < 0){
    console.log ("Enter a Non Negative number : ");
}else {
    let factorial = 1;
    for (i = 1; i <= no; i++){
        factorial *= i;
    }
    console.log(`The Factorial of ${no} is ${factorial}`)
}

//Write a for loop to calculate the power of a number (e.g., 2^5).
let base = parseInt(prompt("Enter the Base Value : "));
let exp = parseInt(prompt("Enter the Exponent : "));
if (isNaN(base) || isNaN(exp)){
console.log("Please Enter Valid Numbers");
}else {
    let result = 1;
    for (i=1; i <= exp; i++){
        result *= base;
    }
    console.log(result);
}

//Write a for loop to print all odd numbers between 20 and 1 in reverse order.
for (var odd = 19; odd >= 0; odd -= 2){
    console.log(odd);
}
