import ConvexPolygon from './ConvexPolygon';
import Vector from '../Vectors/Vector';

export default class NewBody extends ConvexPolygon {
    constructor() {
    
        super(Math.random() * 500 + 10, 100, [
            [-20, -20],
            [20, -20],
            [20, 20],
            [-20, 20],
        ])

        this.rotationAllowed = true
        this.rotationAngle = Math.random()/5
        this.wireFrameAllowed = true
        this.goingBack = false
    }

    ping(ctx) {
        this.update()
        this.render(ctx)
    }

    update() {
        super.update()
    }

    /**
     * @param {CanvasRenderingContext2D} ctx
    */
    render(ctx) {

        super.render(ctx)
        // ctx.beginPath()
        // ctx.arc(this.position.X, this.position.Y, 20, 0, 2 * Math.PI)
        // ctx.stroke()

    }

    keyPress(key) {
        switch (key) {
            case 'ArrowRight':

                this.velocity.add(new Vector(1, 0))
                // this.acceleration.add(new Vector(1, 0).setMag(0.01))
                break
            case 'ArrowLeft':

                this.velocity.add(new Vector(-1, 0))
                break
            case 'ArrowUp':

                this.velocity.add(new Vector(0, -1))
                break
            case 'ArrowDown':

                this.velocity.add(new Vector(0, 1))
                break
        }
    }
}