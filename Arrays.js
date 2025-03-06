//   1. Create an Array
//   Create an array with five numbers and print it.

var arr = [2,9,45,84,7];
console.log(arr);

//   2. Access an Element
//   Given an array, print the third element.

var access = arr[2];     //   to get 45 
console.log(access);
//  or
var arr = [2,9,45,84,7];
console.log(arr[2]);

//   3. Change an Element
//   Modify the second element of an array to a new value.
var arr = [2,9,45,84,7];
arr [1] = 33;  // here the second element of an array 9 is replaced with 33
console.log(arr);
 
//   4. Find Length
//   Write a function that returns the length of an array.
var arr = [2,9,45,84,7];
function array_Length(arr){
   return arr.length;
}
console.log (array_Length(arr));
//   5. Add an Element (Push)
//  Add a new element to the end of an array.
arr.push(65);
console.log (arr);

//   6. Remove the Last Element (Pop)
//   Remove the last element from an array and print the updated array.
arr.pop();
console.log(arr);

// 7. Loop Through an Array
// Use a loop to print each element of an array.
for (var i = 0; i< arr.length; i++){
    console.log(arr[i]);
}

//   8. Check if an Element Exists
//   Write a function to check if a given value exists in an array.
function check_Value(arr,value){
    return arr.includes(value);
}
var value = parseInt(prompt("Enter the value : "));
var result = check_Value(arr,value);
if (result){
    console.log (`The given value ${value} exist in an array`);
 } else{
        console.log (`The given value ${value} does not exist in an array`);
    }

//  9. Copy an Array
//  Create a copy of an array and print it.
var arr = [2,9,45,84,7];
var copy_Arr = [...arr];
console.log(copy_Arr);

//  10. Convert Array to String
//  Convert an array to a string using .join() and print the result.
var res = arr.join(", ");
console.log(res);