import Teacher from './Teacher'

interface IStudent {
  name: string
  age: number
  action: (type: string, target?: Teacher) => string
  isOlderThan: (student: Student) => boolean
}

class Student implements IStudent {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  action(type: string, target?: Teacher) {
    switch (type) {
      case 'enters':
        return `${this.name} ${type} the classroom.`
      case 'exits':
        return `${this.name} ${type} the classroom.`
      case 'pick':
        return `${this.name} picks their nose.`
      case 'learn':
        return `${this.name} studies hard.`
      case 'learn':
        return `${this.name} studies hard.`
      case 'greet':
        return `${this.name} says hello to ${target.name}.`
      default:
        throw new Error(`Specify an action for student! ${this.name}`)
    }
  }

  isOlderThan(otherStudent: Student) {
    return Boolean(this.age > otherStudent.age)
  }
}

export default Student