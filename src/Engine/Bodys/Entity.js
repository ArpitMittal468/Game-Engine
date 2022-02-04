import VectorMath from "../Vectors/VectorMath";
import Vector from "../Vectors/Vector";

export default class Entity {

    constructor() {
        this.position = new Vector()
        this.velocity = new Vector()
        this.acceleration = new Vector()
        this.mass = 0
    }

    applyForce(vec) {
        this.acceleration.add(
            VectorMath.clone(vec).div(this.mass)
        )
    }
    
    update() {
        this.position.add(this.velocity)
        this.velocity.add(this.acceleration)
    }
}