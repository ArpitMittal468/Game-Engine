import Detector from "./Collisions/Detector";

export class Engine {
    constructor(canvasId, canvasWidht, canvasHeight) {
        this.canvas = document.getElementById(canvasId);
        this.canvasHeight = canvasHeight
        this.canvasWidht = canvasWidht

        this._2dCtx = this.canvas.getContext("2d")
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
        // Clear the old frame
        this._2dCtx.clearRect(0, 0, this.ratio * this.canvasWidht, this.ratio * this.canvasHeight)

        this.collisionDetection()

        for (let i = 0; i < this.objectList.length; i++) {
            this.objectList[i].ping(this._2dCtx)
        }

        this.frameCounter++

        if (this.engineStatus)
            requestAnimationFrame(() => {
                this.updateNextFrame()
            })
    }

    startEngine() {

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
        Detector(this.objectList)
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

