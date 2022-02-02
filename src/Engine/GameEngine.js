
import { VectorMath } from "./Vector";

export class GameEnige {
    constructor(canvasId, canvasWidht, canvasHeight) {
        this.canvas = document.getElementById(canvasId);
        this.canvasHeight = canvasHeight
        this.canvasWidht = canvasWidht

        this._2dCtx = this.canvas.getContext("2d")
        this.frameUpdateInterval = 1000 / 60
        this.currentTime = 0
        this.frameUpdateRefernce

        // this.canvas.setAttribute('width', canvasWidht)
        // this.canvas.setAttribute('height', canvasHeight)

        this.ratio = window.devicePixelRatio;

        this.canvas.width = canvasWidht * this.ratio;
        this.canvas.height = canvasHeight * this.ratio;
        this.canvas.style.width = canvasWidht + "px";
        this.canvas.style.height = canvasHeight + "px";

        this.objectList = []
        this.engineStatus = 0

        this.frameCounter = 0

        this.canvas.onmousemove = (ev) => EnvVariables.updateMousePosition(ev)
    }

    pushObj(obj) {
        this.objectList.push(obj)
    }

    updateNextFrame() {
        this._2dCtx.clearRect(0, 0, this.ratio * this.canvasWidht, this.ratio * this.canvasHeight)

        for (let i = 0; i < this.objectList.length; i++) {
            this.objectList[i].ping(this._2dCtx)
        }

        this.collisionDetection()

        this.frameCounter++

        if (this.engineStatus)
            requestAnimationFrame(() => {
                this.updateNextFrame()
            })
    }

    startEngine() {
        // this.collisionDetection()

        if (this.engineStatus == 0) {
            this.engineStatus = 1
            this.updateNextFrame()
        }


        // delete this
        this.chosenInd = 0


        addEventListener('keydown', (ev) => {
            // console.log(ev.key)
            if (ev.key == 'Tab')
                this.chosenInd = (this.chosenInd + 1) % this.objectList.length;
            else this.objectList[this.chosenInd].keyPress(ev.key)
        })
    }

    stopEngine() {
        this.engineStatus = 0
    }


    collisionDetection() {
        let collisionProfileGlobal = Array(this.objectList.length).fill(false)
        for (let i = 0; i < this.objectList.length; i++) {
            let collisionProfile = Array(this.objectList.length).fill(true)
            for (let j = i + 1; j < this.objectList.length; j++) {


                let ob1 = this.objectList[i]
                let ob2 = this.objectList[j]

                for (let vi = 0; vi < ob1.verticeLenght; vi++) {

                    let normalVec = VectorMath.sub(
                        ob1.vertice[(vi + 1) % ob1.verticeLenght],
                        ob1.vertice[vi]
                    )

                    normalVec.set(
                        - normalVec.Y,
                        normalVec.X
                    )
                    // console.log('%cNoraml Vec', 'color: red')
                    // console.log(normalVec)

                    let axis1 = []
                    let axis2 = []

                    for (let vj = 0; vj < ob2.verticeLenght; vj++) {

                        let projectionVec = VectorMath.sub(
                            ob2.vertice[vj],
                            ob1.vertice[vi]
                        )
                        let projectionCord = projectionVec.X * normalVec.X + projectionVec.Y * normalVec.Y

                        projectionCord = projectionCord / normalVec.mag()
                        axis1.push(projectionCord)

                        // console.log(projectionVec, projectionCord)
                    }

                    for (let vj = 0; vj < ob1.verticeLenght; vj++) {

                        let projectionVec = VectorMath.sub(
                            ob1.vertice[vj],
                            ob1.vertice[vi]
                        )
                        let projectionCord = projectionVec.X * normalVec.X + projectionVec.Y * normalVec.Y

                        projectionCord = projectionCord / normalVec.mag()
                        axis2.push(projectionCord)

                        // console.log(projectionVec, projectionCord)
                    }


                    let a1mn = Math.min(...axis1)
                    let a2mn = Math.min(...axis2)
                    let a1mx = Math.max(...axis1)
                    let a2mx = Math.max(...axis2)


                    let colliding = a1mx < a2mn || a2mx < a1mn
                    colliding = !colliding
                    collisionProfile[j] &&= colliding

                }
                collisionProfileGlobal[j] ||= collisionProfile[j]
            }
        }

        for (let i = 0; i < this.objectList.length; i++) {
            const element = this.objectList[i];
            element.collided = collisionProfileGlobal[i]
        }
    }
}

export var EnvVariables = {
    MouseX: 0,
    MouseY: 0,
    updateMousePosition({ offsetX, offsetY }) {
        this.MouseX = offsetX * window.devicePixelRatio
        this.MouseY = offsetY * window.devicePixelRatio
    }
}

// module.export = { GameEnige }

