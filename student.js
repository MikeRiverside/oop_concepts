//klassid üleval, objektid all
//klassid algavad suure tähega
class Student {
    constructor (name){
       this.name = name
       this.finished = false
    }

}
//loo uus muutuja ja anna talle nimi, väärtuse saamiseks kasutame new operator
const student = new Student("John")
console.log(student.name) //john
console.log(student.finished) //false

