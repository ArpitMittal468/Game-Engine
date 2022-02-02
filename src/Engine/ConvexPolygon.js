import { Vector } from "./Vector"

export default class ConvexPolygon {
    constructor(center, verticeList) {
        this.center = new Vector(...center)

        // this.center = new Vector(125 + 200, 125 + 200)
        this.vertice = [
            new Vector(-50, -50).add(this.center),
            new Vector(50, -50).add(this.center),
            new Vector(50, 50).add(this.center),
            new Vector(-50, 50).add(this.center)
        ]
        this.normals = []


        this.rotationAngle = Math.random() * 0.10
        this.verticeLenght = this.vertice.length

        this.collided = false
    }

    ping(ctx) {
        this.update()
        this.render(ctx)
    }
    update() {
        // if (!this.collided)
        this.rotation()
    }

    render(ctx) {
        for (let i = 0; i < this.vertice.length; i++) {
            ctx.beginPath()
            ctx.moveTo(...this.vertice[i].toArray())
            ctx.lineTo(...this.vertice[(i + 1) % this.verticeLenght].toArray())
            ctx.strokeStyle = (this.collided ? 'red' : 'black')
            ctx.stroke()
        }
        ctx.beginPath()
        ctx.moveTo(...this.center.toArray())
        ctx.lineTo(...this.vertice[0].toArray())
        ctx.stroke()

        ctx.strokeStyle = 'black'
    }


    rotation() {

        for (let i = 0; i < this.verticeLenght; i++) {
            let v = this.vertice[i]
            v.sub(this.center)
            v.set(
                v.X * Math.cos(this.rotationAngle) - v.Y * Math.sin(this.rotationAngle),
                v.X * Math.sin(this.rotationAngle) + v.Y * Math.cos(this.rotationAngle)
            )
            v.add(this.center)
        }
    }


    keyPress(key) {
        switch (key) {
            case 'ArrowRight':
                for (let v of this.vertice)
                    v.add(new Vector(2, 0))
                this.center.add(new Vector(2, 0))
                break
            case 'ArrowLeft':
                for (let v of this.vertice)
                    v.add(new Vector(-2, 0))
                this.center.add(new Vector(-2, 0))
                break
            case 'ArrowUp':
                for (let v of this.vertice)
                    v.add(new Vector(0, -2))
                this.center.add(new Vector(0, -2))
                break
            case 'ArrowDown':
                for (let v of this.vertice)
                    v.add(new Vector(0, 2))
                this.center.add(new Vector(0, 2))
                break
        }
    }
}