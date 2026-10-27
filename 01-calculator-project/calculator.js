import rs from 'readline-sync'
// const readline = require('readline-sync')

const add = (a, b) => {
    const sum = a + b
    return sum
}

const var1 = rs.questionInt('Enter the first no: ')
const var2 = rs.questionInt('Enter the second no: ')

const result = add(var1, var2)

console.log(result)