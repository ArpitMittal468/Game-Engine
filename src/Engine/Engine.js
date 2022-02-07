import ConvexPolygon from "./Bodys/ConvexPolygon";
import Detector from "./Collisions/Detector";

export default class Engine {
    constructor(canvasId, canvasWidht, canvasHeight) {

        /**
         * @type {HTMLElement}
        */
        this.canvas = document.getElementById(canvasId);

        if (this.canvas == null)
            throw 'Canvas does not exsist with id : ' + canvasId

        if (typeof canvasHeight !== 'number' || typeof canvasWidht !== 'number')
            throw 'Canvas Dimensions must be in number'

        if (canvasHeight < 0 || canvasWidht < 0)
            throw 'Dimensions must be positive'

        /**
         * @type {number}
        */
        this.canvasHeight = canvasHeight

        /**
         * @type {number}
        */
        this.canvasWidht = canvasWidht

        /**
         * @type {CanvasRenderingContext2D}
        */
        this._2dCtx = this.canvas.getContext("2d")

        this.ratio = window.devicePixelRatio;

        this.canvas.width = canvasWidht * this.ratio;
        this.canvas.height = canvasHeight * this.ratio;
        this.canvas.style.width = canvasWidht + "px";
        this.canvas.style.height = canvasHeight + "px";

        this.objectList = []
        this.engineStatus = 0

        this.fps = 0
        this.showFpsAllowed = true
        this.frameCounter = 0
        this.fpsUpdateInterval = 0
        this.frameUpdateAvailable = false

    }

    pushObj(obj) {
        if (!(obj instanceof ConvexPolygon)) {
            throw 'Object Must of be type ConvexPolygon'
        }
        this.objectList.push(obj)
    }

    updateNextFrame(currentTime) {

        if (this.frameUpdateAvailable) {
            this.fps = parseInt(1000 / (currentTime - this.frameCounter))
            this.frameUpdateAvailable = false
        }

        this.frameCounter = currentTime

        for (let iter = 0; iter < 1; iter++) {

            // Clear the old frame
            this._2dCtx.clearRect(0, 0, this.ratio * this.canvasWidht, this.ratio * this.canvasHeight)

            this.collisionDetection()

            for (let i = 0; i < this.objectList.length; i++) {
                this.objectList[i].ping(this._2dCtx)
            }
        }

        if (this.showFpsAllowed)
            this.showFps()

        if (this.engineStatus)
            requestAnimationFrame((currentTime) => {
                this.updateNextFrame(currentTime)
            })
    }

    startEngine() {

        if (this.engineStatus == 0) {

            this.engineStatus = 1
            this.updateNextFrame()

            this.fpsUpdateInterval = setInterval(
                () => { this.frameUpdateAvailable = true },
                1000
            )
        }

    }

    stopEngine() {
        this.engineStatus = 0
        clearInterval(this.fpsUpdateInterval)
    }

    collisionDetection() {
        Detector(this.objectList)
    }

    showFps() {

        this._2dCtx.fillStyle = '#131313ab'
        this._2dCtx.fillRect(0, 0, 70, 30)
        this._2dCtx.fillStyle = '#2bfe41'
        this._2dCtx.font = '15px monospace'
        this._2dCtx.fillText(this.fps + 'FPS', 10, 20)
    }
}


// module.export = { GameEnige }

