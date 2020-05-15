import Student from './Student'

interface IClassroom {
  name: string
  count: (students: Student[]) => number
  bell: () => string
}

class Classroom implements IClassroom {
  name: string

  constructor(name: string) {
    this.name = name
  }

  count(students: Student[]) {
    return students.length
  }

  bell() {
    return '🔔❗️ rrrrriiiiinnnnngggggg rrriiinnnnngggg'
  }
}

export default Classroom