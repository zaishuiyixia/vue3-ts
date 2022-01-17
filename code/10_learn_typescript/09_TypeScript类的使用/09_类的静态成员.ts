// class Person {
//   name: string = ""
//   age: number = 12
// }

// const p = new Person()
// p.name = "123"

class Student {
  static time: string = "20:00"

  static attendClass() {
    console.log("去学习~")
  }
}
//可以通过类直接访问属性或方法
console.log(Student.time)
Student.attendClass()

