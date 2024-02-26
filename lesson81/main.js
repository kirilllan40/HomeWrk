const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

for (let i = -1; i < numbers.length; i = i + 2) {
    console.log(numbers[i])
}   

const raindbow = ['Красный', 'Оранжевый', 'Желтый', 'Зеленый', 'Голубой', 'Синий', 'Фиолетовый'];
for (let i = 6; i < raindbow.length; i--) {
    if (i == -1) {
        break
    }
    console.log(raindbow[i])
}







