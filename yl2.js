//klassid üleval, objektid all
//klassid algavad suure tähega
class Person {
    constructor (){
       this.firstname = "";
       this.lastname = "";
       this.age = 0
    }
}
class Student {
    constructor (firstname, lastname, age){
       this.name = firstname;
       this.lastname = lastname;
       this.age = age
    }

}
const person1 = new Person ()
person1.firstname = "Siim"
person1.lastname = "Mügar"
person1.age = 23

const person2 = new Person ()
person2.firstname = "Mats"
person2.lastname = "Sile"
person2.age = 30

const person3 = new Person ()
person3.firstname = "Tõnn"
person3.lastname = "Kõver"
person3.age = 33

const student1 = new Student ("Siim", "Mügar", 23)
const student2 = new Student ("Mats", "Sile", 30)
const student3 = new Student ("Tõnn", "Kõver", 33)

//loo uus muutuja ja anna talle nimi, väärtuse saamiseks kasutame new operator

console.log(student1)
console.log(student2)
console.log(student3)



