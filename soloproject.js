/* EXERCISE A
Create a variable called test and assign a string value to it.
*/

let test = "COVID RT-PCR"

/* EXERCISE B
Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.
*/

let number = 20
let sum = 0
for  (let i = 10; i <= 20; i++) {
    sum += i
}
console.log(sum)

/* EXERCISE C
Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

let random 
random = Math.floor(Math.random() * 20)
console.log(random)

/* EXERCISE D
Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

let me = {
    name : "Ganesh Sai",
    surname : "Devarakonda",
    age : 23
}
console.log(me.surname)

/* EXERCISE E
Write a piece of code for programmatically removing the age property from the previously create object.
*/

delete me.age
console.log(me)

/* EXERCISE F
Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.
*/

me.skills = ['HTML', 'CSS', 'JavaScript']
console.log(me)

/* EXERCISE G
Write a piece of code for programmatically removing the last skill from the skills array inside the me object.
*/

me.skills.pop()
console.log(me)

// JS Functions

/* EXERCISE 1
Write a function called dice; it should randomize an integer number between 1 and 6.
*/

function dice(max, min) {
    console.log((Math.floor(Math.random() * (max-min + 1) + min)))
}
dice(1, 6)

/* EXERCISE 2
Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.
*/

function whoIsBigger(a, b) {
    if (a > b) {
        console.log(a)
    } else {
        console.log(b)
    }
}
whoIsBigger(10, 5)

/* EXERCISE 3
Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.
Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

function splitMe(text) {
    let newArr = text.trim().split(" ")
    console.log(newArr)
}
splitMe("My Name is Ganesh")

/* EXERCISE 4

Write a function called deleteOne which receives a string and a boolean as parameters.

If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.

*/

function deleteOne(x, y) {
    let str = x
    if (y === true) {
        console.log(x)
    }
}
deleteOne('I am Man', true)

/* EXERCISE 5

Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.

Ex.: onlyLetters("I have 4 dogs") => returns "I have dogs"

*/

function onlyLetters (a) {
    let str = a
    console.log(str.replace(/[0-9]/g, ''))
}
onlyLetters ("I have 10 apples")

/* EXERCISE 6

Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.

*/



/* EXERCISE 7

Write a function called whatDayIsIt that should return the current day of the week.

*/

function whatDayIsIt() {

}

/* EXERCISE 8

Write a function called rollTheDices which receives a number as a parameter.

It should invoke the dice() function defined in Ex1 the specified amount of times,

and return an object containing a sum property holding the sum of all values extracted

and a values array containing the single values of the dicerolls themselves.

Example: RollTheDices(3) => returns {

sum: 10

values: [3, 3, 4]

}

*/

/* EXERCISE 9

Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.

*/

/* EXERCISE 10

Write a function called isTodayMyBirthday which should return true if today’s your birthday, false otherwise.

*/


// JS Arrays & Objects

// NOTE: the movies array used in some exercises is defined at the end of this file

/* EXERCISE 11

Write a function called deleteProp which receives an object and a string as parameters,

and returns the given object after deleting its property named as the given string.

*/

/* EXERCISE 12

Write a function called oldestMovie which finds the oldest movie in the provided movies array.

*/

/* EXERCISE 13

Write a function called countMovies which returns the number of movies contained in the provided movies array.

*/

/* EXERCISE 14

Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.

*/

/* EXERCISE 15

Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.

*/

/* EXERCISE 16

Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.

*/

/* EXERCISE 17

Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.

*/

/* EXERCISE 18

Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.

*/

/* EXERCISE 19

Write a function called searchAndDivide which receives a string as a parameter and returns an object;

this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,

and another array unmatch with all the remaining ones.

*/

/* EXERCISE 20

Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.

*/


 
