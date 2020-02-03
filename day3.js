//lvl 2 exc
/* let height= prompt('enter Height')
let base = prompt('enter base ')
let areaTri = height*base
console.log(`the area of triangle is `+ areaTri + ` sq m`) 
let randNum= Math.floor(Math.random()*6)

console.log(randNum) 
const hexaColorGenarate = () => {
    let hexaString = '0123456789abcdef'
    let hexaColor = '#'
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * hexaString.length)
        hexaColor += hexaString[index]
    }
    return hexaColor}
    console.log(hexaColor) 
     ////day 6

    //for loop
     for (let i=0 ; i<=10  ; i++){
console.log(i)
     }
    //while loop 
let i = 0
while (i<=10){
    console.log(i)
    i++
}
//do while loop
let i=0
do{
    console.log(i)
    i++
}while(i<=10)
// printing a table 
 for (let i=0 ; i<=10; i++){
   console.log(`${i} * ${i} = ${i * i}`)}
// printing a right angled triangle or pyramid
   
  var num = " ";
 ;
  for(var i=1; i<=7; i++)
  {
    num = num + i 
    console.log(num);
  } 
 //print only even numbers between 0 and 100
 for (let i = 0 ; i <=100 ; i++){
     if (i % 2 ==0)
     console.log(i)
     } 

// print only odd numbers between 0 and 100
 for (let i = 0 ; i <=100 ; i++){
     if (i % 2 !== 0)
     console.log(i)
 }
///////////////////////////////////////////////////////// prime numbers function
for (let i = 0 ; i<=0 ;i++){
if (i ==!2 ; i <=Math.sqrt(i) ; i++){
}
console.log(i)
}
///// to add all numbers between 0 and 100
let sum = 0;
  for (let i = 0; i <= 100; i++) {
    sum += i;
  }
console.log(sum)

// print sum of evens and odds btwn 0 and 100
let sumEven = 0
let sumOdd = 0
for (let i =0 ; i<=100 ; i++){
    if( i % 2 == 0){
        sumEven += i 
    }
   else if(i % 2 ==!0){
        sumOdd += i
    }
}console.log(`The sum of all Odds between 0 and 100 is ` + sumOdd + ` and the sum of all evens between 0 and 100 is ` + sumEven)

//// print sum of evens and odds btwn 0 and 100 as array
let sumEven = 0
let sumOdd = 0
for (let i =0 ; i<=100 ; i++){
    if( i % 2 == 0){
        sumEven += i 
    }
   else if(i % 2 ==!0){
        sumOdd += i
    }
}console.log([sumEven, sumOdd])
//// generate random number between 0 and 5
let r = Math.floor(Math.random()*5)
console.log([r])

// genrate random array of length 5
    let string = '0123456789abcdef'
    let char = ''
    for (let i = 0; i < 5; i++) {
        let index = Math.floor(Math.random() * string.length)
        char += string[index]
    }
console.log([char])

let string = '0123456789abcdef'
    let char = ''
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * string.length)
        char += string[index]
    }
console.log([char])
/////////////////////////////////
let string = '0123456789abcdef'
    let char = ' '
    for (let i = 0; i <=string.length; i++) {
        let index = Math.floor(Math.random() * string.length)
        char += string[index]
    }
console.log([char])
*/
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  console.log(countries.length)
  const countstr = countries.toString()
  console.log(countstr)
  const strUp = countstr.toUpperCase()
  console.log(strUp.split(','))

