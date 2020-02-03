///// Higher order functions
//// call back functions
/*
const callback = (n)=>{
    return n**2
}
console.log(callback(2))
function cube(callback, n){
    return callback(n)*n
}console.log(cube(callback,3))
///////////////////////////////higher order function
const numbers = [1, 2, 3, 4]
const sumArray = arr => {
  let sum = 0
  numbers.forEach(function(element) {
    sum += element
  })
  return sum
}
console.log(sumArray(numbers))

let sum = 0 
const numbers =[1,2,4,6,8,9,10]
numbers.forEach(num =>console.log(num))
console.log(sum)

const numbers = [1, 2, 3, 4]
const sumArray = arr => {
  let sum = 0
  numbers.forEach(function(element) {
    sum += element
  })
  return sum
}
console.log(sumArray(numbers))

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach(element => console.log(element.toUpperCase()))

/////////////////7 definitions 
//callback is a higher order functions that is passed as a parameter to another function
//for each is a method used to iterate elements of an array (its used with arrays only).the standard syntax of it is 
arr.forEach(function(element, index, arr) {
  console.log(index, element, arr)
})
/// map is used to iterate and modify elements of array 
// filter is used to filter out elements of array which fullfil the criteria 



*/
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' }
]
countries.forEach(element => console.log(element)) //question 3
names.forEach(element =>console.log(element)) // question 4
numbers.forEach(number =>console.log(number))//question 5
const countriesToUp =countries.map(country => country.toUpperCase())
console.log(countriesToUp) // q 6
const namesToUpperCase = names.map(name=>name.toUpperCase())
console.log(namesToUpperCase) //q7
/*
const countriesLength = countries.map(country => country.length())
console.log(countriesLength())

const upperNames = names.map(names => names.toUpperCase()) // to change names array to uppercase
console.log(upperNames) 
*/

const sqNums = numbers.map(num => num*num) // to console.log sq of array numbers
console.log(sqNums)
 


const countryLand = countries.filter(country => country.includes('land'))
console.log(countryLand)
const countrySix= countries.filter(country => country.length ==6 )
console.log(countrySix)
const countryStartE = countries.filter(country => country.startsWith('E'))
console.log(countryStartE)
const prices = products.map(product => product.price) // to show only prices
console.log(prices)
const pricesValue = prices.filter(price => typeof price =='number') // to get prices with data
console.log(pricesValue)

const sum = numbers.reduce((accum, curr) => accum + curr) // to sum all entries in numbers
console.log(sum)

const conCountries = countries.reduce((accum ,  curr)=> accum +   curr)
console.log(conCountries + ` are all northern countries`)

// Explain the difference between some and every
//   the name is there telling the difference . some checks if some of the elements are similar
// in one aspect and every checks if every element is similar in one aspect.some is somehow simmilar to include 
//method but the include method is quite new and is not mostly supported by outdated browsers



const namesLong = names.some(name => name.length>7)
console.log(namesLong)
const countryL = countries.every(country => country.includes('land'))
console.log(countryL)


// the differenece between find and findindex is that find stops when it finds the first element which fullfills
// the criteria and findindex returns the index of the firt element fullfilling the criteria 
const countrySixLenght= countries.find(country => country.length>=6)
console.log(countrySixLenght)
const countryIndex = countries.findIndex(country =>country.length>=6)
console.log(countryIndex)
const countryNorway = countries.findIndex( country => country.includes('Norway'))// to find index of norway
console.log(countryNorway)
const countryRussia = countries.findIndex(country => country.includes('Russia'))
console.log(countryRussia)