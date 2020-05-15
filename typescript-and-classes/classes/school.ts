import Student from './interfaces/Student'
import Classroom from './interfaces/Classroom'
import Teacher from './interfaces/Teacher'

// Instantiate students, classroom, and teacher
const peggy = new Student('Peggy', 13)
const brandon = new Student('Brandon', 14)
const mathClass = new Classroom('Math')
const mrSmith = new Teacher('Mr. Smith')

// Students enter classroom
console.log(peggy.action('enters'))
console.log(brandon.action('enters'))

// Students says hello to teacher in various languages
console.log(peggy.action('greet', mrSmith))
console.log(brandon.action('greet', mrSmith))

// Teacher counts the kids in class, then teaches addition & subtraction
console.log(mrSmith.attendance(mathClass, [peggy, brandon]))
console.log(mrSmith.teach('addition'))
console.log(mrSmith.teach('subtraction'))

// Classroom bell rings
console.log(mathClass.bell())