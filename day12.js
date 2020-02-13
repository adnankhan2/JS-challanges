//// Exercises: Level 1

//question 1
//Calculate the total annual income of the person from the following text. 
//‘He earns 4000 euro from salary per month, 10000 euro annual bonus
//, 5500 euro online courses per month.’ 

let salary = ' Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’'
let moneyPattern = /\d+/g
let moneyOnly= salary.match(moneyPattern) // this takes out the money only and shows it
console.log(moneyOnly)
let incomes = moneyOnly.map(income => parseInt(income))
console.log(incomes)
let totalIncome = incomes.reduce((accumulator,current) => accumulator + current)
console.log(totalIncome )

//question 2

// The position of some particles on the 
// horizontal x-axis -12, -4, -3 and -1 in the
// negative direction, 0 at origin, 4 and 8 in the
// positive direction. Extract these numbers and 
// find the distance between the two furthest particles.
let positionSentence = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles'
let digitsPattern1 = /-\d+/g
let digitsPattern2 = /[^-.*\d]\d+/g
let digitsFromSen1 = positionSentence.match(digitsPattern1)
console.log(digitsFromSen1)
let digitsFromSen2 = positionSentence.match(digitsPattern2)
console.log(digitsFromSen2)
digitsFromSen = [...digitsFromSen1,...digitsFromSen2]
digitsFromSen.sort((a,b) => {
    return a-b
})

const distance = digitsFromSen[digitsFromSen.length-1] - digitsFromSen[0]
console.log(distance)



console.log('%c30 Days Of JavaScript', 'color:green')