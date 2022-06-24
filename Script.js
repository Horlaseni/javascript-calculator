const num1 = window.prompt("Enter first number: ");
const operator= window.prompt("Enter choice: +, -,, ., •, ");
const num2 = window.prompt("Enter second number: ");

let result;

if (operator === '+') {
  result = num1 + num2;
}  else if (operator=== '-') {
  result = num1 - num2;
} else if (operator === '*') {
  result = numl * num2;
} else if (operator === '/') {
  result numl / num2;
} else if (operator === '%') {
  result num1 % num2;
} else (operator === '.') {
  result = num1 . num2;
}
alert(result);