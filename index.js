const firstNumber = Number(prompt('Enter first number'))
const operation = prompt('Enter operator')
const secondNumber = Number(prompt('Enter second number'))

if((isNaN(firstNumber)) || (isNaN(secondNumber))){
    alert('некорректный ввод')
} else

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