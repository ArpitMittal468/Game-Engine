import ConvexPolygon from './ConvexPolygon';
import Vector from '../Vectors/Vector';

export default class NewBody extends ConvexPolygon {
    constructor(x, y) {

        super(x, y, [
            [-30, -55],
            [25, -55],
            [25, 48],
            [-30, 48],
        ])

        this.rotationAllowed = false
        this.rotationAngle = Math.random() / 5
        this.wireFrameAllowed = true
        this.goingBack = false
        this.acceleration.set(0, 0.1)
        this.restitution = 0.5

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
    }
}