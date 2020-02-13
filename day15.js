class Animal{
    constructor (name,age,color, legs){
    console.log(this)
    this.name = name
    this.age = age
    this.color = color
    this.legs =legs
}
get AnimalInfo () {
    return `this animal is ${this.name}. its color is ${this.color} and it has ${this.legs}`
}
get getAnimalType() {
    return this.type
}
set setAnimalType(type) {
    this.type = type
}
}
const animal1 = new Animal('tiger',2,'yellow',4)
console.log(animal1)
animal1.setAnimalType = 'wild'
console.log(animal1.getAnimalType)
///// to create a dog and cat child class from basic animal class
 class Dog extends Animal {
     constructor(name,age,color,legs,country){
     super(name,age,color,legs)
     this.country = country
 }
 get getAnimalInfo (){
     return `Hello I am a cute ${this.name} . I have ${this.legs} and I am ${this.age} old and I am from ${this.country}`
 }
}

class Cat extends Animal{
    constructor (name, age, color, legs, meow){
    super(name,age,color,legs)
    this.meow =meow
}
get AnimalInfo(){
return `Hi I am a cute ${this.name} . I have ${this.legs} and I am ${this.age} old and I make cute ${this.meow}`
}
}
const dog = new Dog ('lucy',3, 'grey',6,true)
console.log(dog.getAnimalinfo)