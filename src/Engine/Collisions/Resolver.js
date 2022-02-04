import Vector from "../Vectors/Vector";
import VectorMath from "../Vectors/VectorMath";
import Collision from "./Collision";

export default class Resolver {

    constructor() {
        /**
         * @type {Array<Collision>}
        */
        this.collisionList = []
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
            // console.log(collision);
            let x = VectorMath.sub(collision.poly2.position, collision.poly1.position);

            if (collision.collisionNormal.dot(x) > 0) {
                collision.collisionNormal.invert()
            }

            if (collision.poly1.isStatic) {
                collision.collisionNormal.normalize().mul(collision.collisionDepth)
                collision.poly2.addToPosition(collision.collisionNormal.invert())
                collision.poly2.velocity.invert()
            }
            else if (collision.poly2.isStatic) {
                collision.collisionNormal.normalize().mul(collision.collisionDepth)
                collision.poly1.addToPosition(collision.collisionNormal)
                collision.collisionNormal.normalize()
                let v = VectorMath.sub(
                    collision.collisionNormal.mul(
                        2 * collision.collisionNormal.dot(collision.poly1.velocity)
                    ),
                    collision.poly1.velocity,
                ).mul(-1)
                collision.poly1.velocity.set(...v.toArray())
            }
            else {

                collision.collisionNormal.normalize().mul(collision.collisionDepth / 2)
                collision.poly1.addToPosition(collision.collisionNormal)
                collision.poly2.addToPosition(collision.collisionNormal.invert())

                let tmp = collision.poly1.velocity
                collision.poly1.velocity = collision.poly2.velocity
                collision.poly2.velocity = tmp
            }
            // collision.poly1.addToPosition()
        }

        this.collisionList.length = 0
    }
}