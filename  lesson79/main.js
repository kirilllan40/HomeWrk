const myAge = 24
const requiredAge = 18

let result = null

if (myAge >= requiredAge) {
    result = 'Вы совершеннолетний'
    console.log(result)
} else {
    result = 'Вам нет 18 лет'
    console.log(result)
}

// =========================

myAge >= requiredAge ? console.log ('Вы совершеннолетний') : console.log ('Вам нет 18 лет')