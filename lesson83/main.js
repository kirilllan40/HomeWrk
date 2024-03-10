const myData = {
    name: 'Kirill', 
    age: 24, 
    wasBorn: 'Russia',
    sayHello(name) {
        console.log(`Hello ${myData.name}`)
    }
}

console.log(myData.sayHello())


const users = [
    {
        name: 'Alex',
        age: 24,
        isAdmin: true,
    },
    {
        name: 'John',
        age: 27,
        isAdmin: false,
    },
    {
        name: 'Slava',
        age: 34,
        isAdmin: true,
    },
    {
        name: 'Petya',
        age: 21,
        isAdmin: false,
    }
]

let simpleUser = 0

for (let i = 0; i < users.length; i++) {
    if (!users[i].isAdmin) {
        simpleUser++;
    }
}

console.log(simpleUser)

