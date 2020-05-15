import Classroom from './Classroom'
import Student from './Student'

interface ITeacher {
  name: string
  teach: (subject: string) => string
  attendance: (classroom: Classroom, students: Student[]) => string
}

class Teacher implements ITeacher {
  name: string

  constructor(name: string) {
    this.name = name
  }

  teach(subject: string) {
    let str = ''
    switch (subject) {
      case 'addition':
        str = `${this.name}: 2 + 2 = 4`
        break
      case 'subtraction':
        str = `${this.name}: 3 - 2 = 1`
        break
      default:
        str = `${this.name} teaches ${subject}`
    }
    return str
  }

  attendance(classroom: Classroom, students: Student[]) {
    return `There are ${classroom.count(students)} students in class today!`
  }
}

export default Teacher