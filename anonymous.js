//   Task- 1   //
function processNumbers(num1, num2, callback) {
    return callback(num1, num2);
  }
  
  var add = processNumbers(3, 4, function(x, y) {
    return x + y;
  });
  
  console.log("Sum:", add);

  //   Task-2   //
  function greet(a,callback){
    return callback("Alice");
  }
  var Name = greet(function(name){
    return "Hello, ${name}!";
  });
  console.log(Name);
  //    Task-3    //
  function calculate(num1,num2,callback){
    return callback(num1,num2);
  }
  var sub = calculate(10,5,(a,b)=>a-b);
  console.log("Difference:", sub);