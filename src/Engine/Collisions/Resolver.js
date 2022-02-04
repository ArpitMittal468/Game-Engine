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
            
        }
        
        this.collisionList.length = 0
    }
}