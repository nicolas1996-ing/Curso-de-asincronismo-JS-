// callbacks

// f(x) callback
function sum(num1, num2) {
  return num1 + num2;
}

function cal(num1, num2, callback) {
  return callback(num1, num2);
}

// sum: referencia a la f(x)
console.log(cal(1, -1, sum));

// ejemplo 2
setTimeout(function () {
  console.log("hello callback II - JavaScript");
}, 2000);

// f(x) callback
function grettin(name) {
  console.log(`Hello ${name}`);
}

setTimeout(grettin, 2000, 'nicolas');
