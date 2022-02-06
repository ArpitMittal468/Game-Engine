import ConvexPolygon from './ConvexPolygon';
import Vector from '../Vectors/Vector';

export default class Wall extends ConvexPolygon {
    constructor(x, y, list) {
        super(x, y, list)

        this.wireFrameAllowed = true
        this.isStatic = true
        this.mass = Infinity
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