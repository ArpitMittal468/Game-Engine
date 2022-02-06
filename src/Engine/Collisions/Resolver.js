import Vector from "../Vectors/Vector";
import VectorMath from "../Vectors/VectorMath";
import Collision from "./Collision";

export default class Resolver {

    constructor() {
        /**
         * @type {Array<Collision>}
        */
        this.collisionList = []
        this.shiftOffest = 0
    }

    /**
     * @param {Collision} collision
    */
    pushCollision(collision) {
        if (!(collision instanceof Collision))
            throw 'Parameter must be of type Collision'

        this.collisionList.push(collision)
    }

    resolveCollision() {
        for (const collision of this.collisionList) {

            // resolve logic

            let {
                poly1, poly2, collisionDepth, collisionNormal
            } = collision;

            if (poly1.isStatic && poly2.isStatic) continue;

            if (collisionNormal.dot(VectorMath.sub(poly2.position, poly1.position)) < 0) { collisionNormal.invert() }
            collisionNormal.normalize()

            if (poly1.isStatic) {
                collisionNormal.mul(collisionDepth + this.shiftOffest)
                poly2.addToPosition(collisionNormal)

            }
            else if (poly2.isStatic) {
                collisionNormal.mul(collisionDepth + this.shiftOffest)
                poly1.addToPosition(collisionNormal.invert())
                collisionNormal.invert()
            }
            else {

                collisionNormal.mul(collisionDepth / 2 + this.shiftOffest / 2)
                poly2.addToPosition(collisionNormal)
                poly1.addToPosition(collisionNormal.invert())
                collisionNormal.invert()

            }
            collisionNormal.normalize()

            let restitution = Math.min(poly1.restitution, poly2.restitution)

            let j = -(1 + restitution) * VectorMath.dot(VectorMath.sub(poly2.velocity, poly1.velocity), collisionNormal)
            j /= (1 / poly1.mass + 1 / poly2.mass)


            poly1.velocity.sub(
                collisionNormal.clone().mul(j / poly1.mass)
            )
            poly2.velocity.add(
                collisionNormal.clone().mul(j / poly2.mass)
            )

            // console.log(poly1.velocity, poly2.velocity, collisionNormal.mag())
            // collisionNormal.invert()
            // console.log(poly1.velocity.mag())
        }

        this.collisionList.length = 0
    }
}