import { Entity } from './Entity';
import { EnvVariables } from './GameEngine';

const { Vector, VectorMath } = require('./Vector');

export class NewBody extends Entity {
    constructor() {
        super()
        this.position = new Vector(Math.random() * 800, Math.random() * 600)
        this.velocity = new Vector()
        this.acc = new Vector()
        this.mover = new Vector()
    }

    ping(ctx) {
        this.update()
        this.render(ctx)
    }

    update() {
        this.acc = VectorMath.sub(
            this.position,
            this.mover.set(EnvVariables.MouseX, EnvVariables.MouseY)
        )
        let mag = this.acc.mag()

        this.acc.setMag(50).div(mag * mag)

        this.velocity.add(this.acc);
        this.position.add(this.velocity)
    }

    /**
     * @param {CanvasRenderingContext2D} ctx
    */
    render(ctx) {
        ctx.beginPath()
        ctx.arc(this.position.X, this.position.Y, 20, 0, 2 * Math.PI)
        ctx.stroke()

    }

}