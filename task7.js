var firstNum = parseInt(prompt("Enter your first number"));
var secondNum = parseInt(prompt("Enter your second number"));
var operator = prompt("Enter any operator like +, -, *, / or %");

if (operator === "+") {
    alert(firstNum + secondNum);
} else if (operator === "-") {
    alert(firstNum - secondNum);
} else if (operator === "*") {
    alert(firstNum * secondNum);
} else if (operator === "/") {
    alert(firstNum / secondNum);
} else if (operator === "%") {
    alert(firstNum % secondNum);
}