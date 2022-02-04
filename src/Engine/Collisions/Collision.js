import ConvexPolygon from "../Bodys/ConvexPolygon"
import Vector from "../Vectors/Vector"

export default class Collision {

    constructor(poly1, poly2, normal, depth) {
        if (!(poly1 instanceof ConvexPolygon) || !(poly2 instanceof ConvexPolygon))
            throw 'Parameter must be of types ConvexPolygon'

        if (!(normal instanceof Vector))
            throw 'Normal Must be of type Vector'

        if (typeof depth !== 'number')
            throw 'Collision depth Must be a Number'

        this.poly1 = poly1
        this.poly2 = poly2
        this.collisionNormal = normal
        this.collisionDepth = depth
    }
}