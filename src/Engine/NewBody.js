import ConvexPolygon from './ConvexPolygon';
const { Vector, VectorMath } = require('./Vector');

export default class NewBody extends ConvexPolygon {
    constructor() {
        super(Math.random() * 500 + 10, 100, [
            [3, -20],
            [-3, -20],
            [-9, -18],
            [-14, -14],
            [-18, -9],
            [-20, -3],
            [-20, 3],
            [-18, 9],
            [-14, 14],
            [-9, 18],
            [-3, 20],
            [3, 20],
            [9, 18],
            [14, 14],
            [18, 9],
            [20, 3],
            [20, -3],
            [18, -9],
            [14, -14],
            [9, -18],
        ])
        // this.rotationAllowed = true
        // this.rotationAngle = 0.01
        this.wireFrameAllowed = true
        this.goingBack = false
    }

    ping(ctx) {
        this.update()
        this.render(ctx)
    }

    update() {
        super.update()

        if (this.isColliding) {
            if (!this.goingBack) {

                this.velocity.setMag(
                    -0.5 * this.velocity.mag()
                )
                this.goingBack = true
            }
        }
        else {
            this.goingBack = false
        }
        console.log(this.goingBack, this.velocity)
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

                // this.velocity.add(new Vector(1, 0))
                this.acceleration.add(new Vector(1, 0).setMag(0.01))
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