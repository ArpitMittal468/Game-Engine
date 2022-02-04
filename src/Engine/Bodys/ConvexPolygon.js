import Entity from "./Entity"
import Vector from "../Vectors/Vector"

export default class ConvexPolygon extends Entity {
    /**
     * @param {number} centerX position on x Axis
     * @param {number} centerY postion on y Axis
     * @param {Array<Array<number>>} verticeList Array of vertices of form [x, y] relate to center
    */
    constructor(centerX, centerY, verticeList) {

        super()

        if (typeof centerX !== 'number' || typeof centerY !== 'number')
            throw 'Center points must by numbers'

        this.center = new Vector(centerX, centerY)
        this.vertice = []

        for (let i = 0; i < verticeList.length; i++) {
            if (!(verticeList[i] instanceof Array)
                || verticeList[i].length < 2
                || typeof verticeList[i][0] !== "number"
                || typeof verticeList[i][1] !== 'number')
                throw 'verticeList has a wrong type'

            this.vertice.push(new Vector(verticeList[i][0], verticeList[i][1]).add(this.center))
        }

        this.verticeLength = this.vertice.length

        if (this.verticeLength < 3)
            throw 'Must have atleast 3 sides'

        this.rotationAngle = 0
        this.rotationAllowed = false
        this.isColliding = false
        this.wireFrameAllowed = false
        this.position = this.center
        this.isStatic = false
    }

    update() {

        if (this.rotationAllowed)
            this.rotate()

        for (let v of this.vertice) {
            v.add(this.velocity)
        }

        super.update()

    }

    render(ctx) {

        if (this.wireFrameAllowed) {

            for (let i = 0; i < this.vertice.length; i++) {
                ctx.beginPath()
                ctx.moveTo(...this.vertice[i].toArray())
                ctx.lineTo(...this.vertice[(i + 1) % this.verticeLength].toArray())
                ctx.strokeStyle = (this.isColliding ? 'red' : 'black')
                ctx.stroke()
            }
            ctx.beginPath()
            ctx.moveTo(...this.center.toArray())
            ctx.lineTo(...this.vertice[0].toArray())
            ctx.stroke()

            ctx.strokeStyle = 'black'
        }
    }

    rotate() {

        for (let i = 0; i < this.verticeLength; i++) {
            let v = this.vertice[i]
            v.sub(this.center)
            v.set(
                v.X * Math.cos(this.rotationAngle) - v.Y * Math.sin(this.rotationAngle),
                v.X * Math.sin(this.rotationAngle) + v.Y * Math.cos(this.rotationAngle)
            )
            v.add(this.center)
        }
    }
    /**
     * @param {Vector} vec
    */
    addToPosition(vec) {
        this.center.add(vec)
        for (const vertice of this.vertice)
            vertice.add(vec)
    }
}