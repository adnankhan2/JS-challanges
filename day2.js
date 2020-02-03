let challenge = ' 30 days of Javascript'
console.log(challenge)
let valueOfChallenge = challenge.length
console.log(valueOfChallenge)
let upperCase = challenge.toUpperCase()
console.log(upperCase)
console.log(challenge.slice(0,3))
let lastDigit = challenge.length -1
console.log(challenge.substring(3,13))
console.log(challenge.includes('script'))
console.log(challenge.split())
console.log(challenge.split(' '))
let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(string.split(','))
console.log(challenge.replace('Javascript' , 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(15))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
let string1= 'You cannot end a sentence with because because because is a conjunction'
console.log(string1.indexOf('because'))
console.log(string1.lastIndexOf('because'))
console.log(string1.search('because'))
console.log(challenge.trim())
console.log(challenge.startsWith(' '))
console.log(challenge.endsWith('t'))
const regex= /[a]/g
console.log(challenge.match(regex))
let string2= '30 Days of'
let string3 = 'javascript'
console.log(string2.concat(string3))
console.log(challenge.repeat(2))
let income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
console.log(income.match(\/D/g))