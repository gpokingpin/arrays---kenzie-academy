console.log("Hi Greg")

// ["Ben" , "Tom", "Sue", "Sam"]

// "Ben" is at index 0
// "Tom" is at index 1
// "Sue" is at index 2
// "Sam" is at index 3

let nameArray = ["Ben", "Tom", "Sue", "Sam"]

console.log(nameArray[0])
console.log(nameArray[1])
console.log(nameArray[2])
console.log(nameArray[3])

// first element of the array
console.log("First Element")
console.log(nameArray[0])

//last element of the array
console.log("Last Element")
console.log(nameArray[nameArray.length-1])


//number array example

console.log("Number Array")

let numberArray = []

//13, 99, 10, 451, 44

numberArray[0] = 13
numberArray[1] = 99
numberArray[2] = 10
numberArray[3] = 451
numberArray[4] = 44

console.log(numberArray)

// Character Array 'a' 'b' 'c'

console.log("Character Array")

let characterArray = []

characterArray.push("a")
characterArray.push("b")
characterArray.push("c")

console.log(characterArray)

console.log("Update Character Array")

characterArray[1] = "z"

console.log(characterArray)

console.log("Update Character Array again")

let index = 2

characterArray[index] = "q"

console.log(characterArray)

// properties
// myArray.length -- how many elements are in the Array

//methods
//myArray.push() in this demo
//myArray.pop()
//myArray.shift()
//myArray.unshift()




