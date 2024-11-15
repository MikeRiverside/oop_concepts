class Shape {
    #color
    constructor(color) {
        this.#color = color
    }
    setColor(color){
        this.#color = color
    }
    getColor(){
        return this.#color
    }
    getArea(){
        return null
    }

}
class Circle extends Shape {
    #radius
    constructor(color, radius){
        super(color)
        this.#radius = radius
    }


}

const shape1 = new Shape("red")
console.log("Shape color is", shape1.getColor())
console.log("Shape area", shape1.getArea())

const circle1 = new Circle("blue")
console.log("Circle color is", circle1.getColor())
console.log("Circle area is ", circle1.getArea())