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
    
    getArea(){
        return Math.PI * Math.pow(this.#radius, 2)
    }
    print(){
        return `Circle (r:{${this.#radius}}, color: {${this.getColor()}} )`
    }
}
class Square extends Shape {
    #side
    constructor(color, side){
        super(color)
        this.#side = side
    }
    
    getArea(){
        return Math.pow(this.#side, 2)
    }
    print(){
        return `Square (r:{${this.#side}}, color: {${this.getColor()}} )`
    }
}
class Rect extends Shape {
    #length
    #width
    constructor(color, length, width){
        super(color)
        this.#length = length
        this.#width = width
    }
    
    getArea(){
        return this.#length * this.#width
    }
    print(){
        return `Rect (l:{${this.#length}}, w:{${this.#width}} color: {${this.getColor()}} )`
    }
}


const shape = new Shape("red")
console.log("Shape color is", shape.getColor())
console.log("Shape area", shape.getArea())

const circle = new Circle("blue", 5)
console.log("Circle color is", circle.getColor())
console.log("Circle area is ", circle.getArea())

const square = new Square("green", 10)
console.log("Square color is", square.getColor())
console.log("Square area is ", square.getArea())

const rect = new Rect("Purple", 5, 8)
console.log("Rectangle color is", rect.getColor())
console.log("Rectangle area is ", rect.getArea())

class Paint {

    constructor (){
        this.shapes = []
    }
    addShape(shape){
        this.shapes.push(shape)
    }
}

const paint = new Paint ()

paint.addShape(circle)
paint.addShape(square)
paint.addShape(rect)

console.log(paint)