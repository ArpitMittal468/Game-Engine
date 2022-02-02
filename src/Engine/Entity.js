import { Vector, VectorMath } from "./Vector";

export class Entity {
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
    
}