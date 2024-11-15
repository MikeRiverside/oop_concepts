class Student {
    #name
    #id
    #status

    constructor (name, id){
       this.#name = name;
       this.#id = id;
       this.#status = "Active"
    }

    getId() {
    return this.#id
    }
    getName() {
    return this.#name
    }
    setName(name){
    this.#name = name
    }

    getStatus(){
    return this.#status
    }
    setStatus(status){
    const statuses = ["Active", "Expelled", "Finished", "Inactive"]
    if (statuses.includes(status)){
        this.#status = status
    }
    }
}


const student1 = new Student ("Miki", 11)
console.log(student1)
console.log(student1.getName())
console.log(student1.getId())