const firstNumber = Number(prompt('Enter first number'))
const operation = prompt('Enter operator')
const secondNumber = Number(prompt('Enter second number'))

if (firstNumber !== firstNumber) {  console.log('Is NaN');
} else {
  console.log('Is Not NaN');
}

if (secondNumber !== secondNumber) {  console.log('Is NaN');
} else {
  console.log('Is Not NaN');
}

if (operation === '-'){
    alert('Ваш результат ' + (firstNumber - secondNumber));
} else if (operation === '+'){
    alert('Ваш результат ' + (firstNumber + secondNumber));
} else if (operation === '*'){
    alert('Ваш результат ' + (firstNumber * secondNumber));
} else if (operation === '/'){
    alert('Ваш результат ' + (firstNumber / secondNumber));
} else {
    alert('Такой операции не существует')
}