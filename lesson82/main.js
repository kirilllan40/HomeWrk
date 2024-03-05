
function named(name) {
    return `Hello ${name}`;
}
console.log(named('Ivan'));

console.log(named('Alex'));

const numbers = [3, 5, 8, 4, 15, 22, 1, 55];

function numbersWrite(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i]);
        }
    }
}

numbersWrite(numbers);


function caclculator(num1, num2, operator) {
    switch (operator) {
        case 'minus':
            return num1 - num2;
        case 'plus':
            return num1 + num2;
        case 'multiplication':
            return num1 * num2;
        case 'division':
            return num1 / num2;
        default:
        console.log('Ошибка')
    }
}

console.log(caclculator(10, 5, 'plus'))
console.log(caclculator(2, 3, 'minus'))




// Предлагаю вам реализовать простенький калькулятор.Создайте функцию, которая будет принимать три аргумента, два числа и строку для выбора оператора.При вызове функции пользователь передает, например, (2, 3, ‘minus’), внутри функции происходит проверка на знак и в данном случае функция должна вернуть - 1. То есть мы получаем разницу между первым и вторым аргументом.Запишите результат выполнения функции в переменную и выведите в консоль.Подобным образом реализуйте 4 математические операции: сложение, вычитание, умножение и деление.