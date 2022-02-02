/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/script.js":
/*!**************************!*\
  !*** ./public/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_Engine_ConvexPolygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Engine/ConvexPolygon */ \"./src/Engine/ConvexPolygon.js\");\nconst { GameEnige } = __webpack_require__(/*! ../src/Engine/GameEngine */ \"./src/Engine/GameEngine.js\");\r\n\r\n\r\n\r\nwindow.engine = new GameEnige('myCanvas', 800, 600);\r\n\r\n\r\nengine.pushObj(new _src_Engine_ConvexPolygon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([200, 250]))\r\nengine.pushObj(new _src_Engine_ConvexPolygon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([400, 200]))\r\nengine.pushObj(new _src_Engine_ConvexPolygon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([500, 600]))\r\nengine.pushObj(new _src_Engine_ConvexPolygon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([600, 700]))\r\n\r\n\r\nlet runningStatus = false;\r\n\r\ndocument.getElementById('start-stop').addEventListener('click', () => {\r\n\r\n    runningStatus = !runningStatus\r\n\r\n    if (runningStatus)\r\n        engine.stopEngine();\r\n    else\r\n        engine.startEngine();\r\n})\r\n\r\nengine.startEngine()\n\n//# sourceURL=webpack://physicsengine/./public/script.js?");

/***/ }),

/***/ "./src/Engine/ConvexPolygon.js":
/*!*************************************!*\
  !*** ./src/Engine/ConvexPolygon.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ConvexPolygon)\n/* harmony export */ });\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ \"./src/Engine/Vector.js\");\n\r\n\r\nclass ConvexPolygon {\r\n    constructor(center, verticeList) {\r\n        this.center = new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(...center)\r\n\r\n        // this.center = new Vector(125 + 200, 125 + 200)\r\n        this.vertice = [\r\n            new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(-50, -50).add(this.center),\r\n            new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(50, -50).add(this.center),\r\n            new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(50, 50).add(this.center),\r\n            new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(-50, 50).add(this.center)\r\n        ]\r\n        this.normals = []\r\n\r\n\r\n        this.rotationAngle = Math.random() * 0.10\r\n        this.verticeLenght = this.vertice.length\r\n\r\n        this.collided = false\r\n    }\r\n\r\n    ping(ctx) {\r\n        this.update()\r\n        this.render(ctx)\r\n    }\r\n    update() {\r\n        // if (!this.collided)\r\n        this.rotation()\r\n    }\r\n\r\n    render(ctx) {\r\n        for (let i = 0; i < this.vertice.length; i++) {\r\n            ctx.beginPath()\r\n            ctx.moveTo(...this.vertice[i].toArray())\r\n            ctx.lineTo(...this.vertice[(i + 1) % this.verticeLenght].toArray())\r\n            ctx.strokeStyle = (this.collided ? 'red' : 'black')\r\n            ctx.stroke()\r\n        }\r\n        ctx.beginPath()\r\n        ctx.moveTo(...this.center.toArray())\r\n        ctx.lineTo(...this.vertice[0].toArray())\r\n        ctx.stroke()\r\n\r\n        ctx.strokeStyle = 'black'\r\n    }\r\n\r\n\r\n    rotation() {\r\n\r\n        for (let i = 0; i < this.verticeLenght; i++) {\r\n            let v = this.vertice[i]\r\n            v.sub(this.center)\r\n            v.set(\r\n                v.X * Math.cos(this.rotationAngle) - v.Y * Math.sin(this.rotationAngle),\r\n                v.X * Math.sin(this.rotationAngle) + v.Y * Math.cos(this.rotationAngle)\r\n            )\r\n            v.add(this.center)\r\n        }\r\n    }\r\n\r\n\r\n    keyPress(key) {\r\n        switch (key) {\r\n            case 'ArrowRight':\r\n                for (let v of this.vertice)\r\n                    v.add(new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(2, 0))\r\n                this.center.add(new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(2, 0))\r\n                break\r\n            case 'ArrowLeft':\r\n                for (let v of this.vertice)\r\n                    v.add(new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(-2, 0))\r\n                this.center.add(new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(-2, 0))\r\n                break\r\n            case 'ArrowUp':\r\n                for (let v of this.vertice)\r\n                    v.add(new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(0, -2))\r\n                this.center.add(new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(0, -2))\r\n                break\r\n            case 'ArrowDown':\r\n                for (let v of this.vertice)\r\n                    v.add(new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(0, 2))\r\n                this.center.add(new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(0, 2))\r\n                break\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://physicsengine/./src/Engine/ConvexPolygon.js?");

/***/ }),

/***/ "./src/Engine/GameEngine.js":
/*!**********************************!*\
  !*** ./src/Engine/GameEngine.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameEnige\": () => (/* binding */ GameEnige),\n/* harmony export */   \"EnvVariables\": () => (/* binding */ EnvVariables)\n/* harmony export */ });\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ \"./src/Engine/Vector.js\");\n\r\n\r\n\r\nclass GameEnige {\r\n    constructor(canvasId, canvasWidht, canvasHeight) {\r\n        this.canvas = document.getElementById(canvasId);\r\n        this.canvasHeight = canvasHeight\r\n        this.canvasWidht = canvasWidht\r\n\r\n        this._2dCtx = this.canvas.getContext(\"2d\")\r\n        this.frameUpdateInterval = 1000 / 60\r\n        this.currentTime = 0\r\n        this.frameUpdateRefernce\r\n\r\n        // this.canvas.setAttribute('width', canvasWidht)\r\n        // this.canvas.setAttribute('height', canvasHeight)\r\n\r\n        this.ratio = window.devicePixelRatio;\r\n\r\n        this.canvas.width = canvasWidht * this.ratio;\r\n        this.canvas.height = canvasHeight * this.ratio;\r\n        this.canvas.style.width = canvasWidht + \"px\";\r\n        this.canvas.style.height = canvasHeight + \"px\";\r\n\r\n        this.objectList = []\r\n        this.engineStatus = 0\r\n\r\n        this.frameCounter = 0\r\n\r\n        this.canvas.onmousemove = (ev) => EnvVariables.updateMousePosition(ev)\r\n    }\r\n\r\n    pushObj(obj) {\r\n        this.objectList.push(obj)\r\n    }\r\n\r\n    updateNextFrame() {\r\n        this._2dCtx.clearRect(0, 0, this.ratio * this.canvasWidht, this.ratio * this.canvasHeight)\r\n\r\n        for (let i = 0; i < this.objectList.length; i++) {\r\n            this.objectList[i].ping(this._2dCtx)\r\n        }\r\n\r\n        this.collisionDetection()\r\n\r\n        this.frameCounter++\r\n\r\n        if (this.engineStatus)\r\n            requestAnimationFrame(() => {\r\n                this.updateNextFrame()\r\n            })\r\n    }\r\n\r\n    startEngine() {\r\n        // this.collisionDetection()\r\n\r\n        if (this.engineStatus == 0) {\r\n            this.engineStatus = 1\r\n            this.updateNextFrame()\r\n        }\r\n\r\n\r\n        // delete this\r\n        this.chosenInd = 0\r\n\r\n\r\n        addEventListener('keydown', (ev) => {\r\n            // console.log(ev.key)\r\n            if (ev.key == 'Tab')\r\n                this.chosenInd = (this.chosenInd + 1) % this.objectList.length;\r\n            else this.objectList[this.chosenInd].keyPress(ev.key)\r\n        })\r\n    }\r\n\r\n    stopEngine() {\r\n        this.engineStatus = 0\r\n    }\r\n\r\n\r\n    collisionDetection() {\r\n        let collisionProfileGlobal = Array(this.objectList.length).fill(false)\r\n        for (let i = 0; i < this.objectList.length; i++) {\r\n            let collisionProfile = Array(this.objectList.length).fill(true)\r\n            for (let j = i + 1; j < this.objectList.length; j++) {\r\n\r\n\r\n                let ob1 = this.objectList[i]\r\n                let ob2 = this.objectList[j]\r\n\r\n                for (let vi = 0; vi < ob1.verticeLenght; vi++) {\r\n\r\n                    let normalVec = _Vector__WEBPACK_IMPORTED_MODULE_0__.VectorMath.sub(\r\n                        ob1.vertice[(vi + 1) % ob1.verticeLenght].toFloor(),\r\n                        ob1.vertice[vi].toFloor()\r\n                    ).toFloor()\r\n\r\n                    normalVec.set(\r\n                        - normalVec.Y,\r\n                        normalVec.X\r\n                    )\r\n                    // console.log('%cNoraml Vec', 'color: red')\r\n                    // console.log(normalVec)\r\n\r\n                    let axis1 = []\r\n                    let axis2 = []\r\n\r\n                    for (let vj = 0; vj < ob2.verticeLenght; vj++) {\r\n\r\n                        let projectionVec = _Vector__WEBPACK_IMPORTED_MODULE_0__.VectorMath.sub(\r\n                            ob2.vertice[vj].toFloor(),\r\n                            ob1.vertice[vi].toFloor()\r\n                        ).toFloor()\r\n                        let projectionCord = projectionVec.X * normalVec.X + projectionVec.Y * normalVec.Y\r\n\r\n                        projectionCord = (projectionCord / Math.ceil(normalVec.mag()))\r\n                        axis1.push(Math.floor(projectionCord))\r\n\r\n                        // console.log(projectionVec, projectionCord)\r\n                    }\r\n\r\n                    for (let vj = 0; vj < ob1.verticeLenght; vj++) {\r\n\r\n                        let projectionVec = _Vector__WEBPACK_IMPORTED_MODULE_0__.VectorMath.sub(\r\n                            ob1.vertice[vj].toFloor(),\r\n                            ob1.vertice[vi].toFloor()\r\n                        )\r\n                        let projectionCord = projectionVec.X * normalVec.X + projectionVec.Y * normalVec.Y\r\n\r\n                        projectionCord = projectionCord / Math.ceil(normalVec.mag())\r\n                        axis2.push(Math.floor(projectionCord))\r\n\r\n                        // console.log(projectionVec, projectionCord)\r\n                    }\r\n\r\n\r\n                    let a1mn = Math.min(...axis1)\r\n                    let a2mn = Math.min(...axis2)\r\n                    let a1mx = Math.max(...axis1)\r\n                    let a2mx = Math.max(...axis2)\r\n\r\n                    let colliding = a1mx < a2mn || a2mx < a1mn\r\n                    colliding = !colliding\r\n                    collisionProfile[j] &&= colliding\r\n\r\n                }\r\n                collisionProfileGlobal[j] ||= collisionProfile[j]\r\n            }\r\n        }\r\n\r\n        for (let i = 0; i < this.objectList.length; i++) {\r\n            const element = this.objectList[i];\r\n            element.collided = collisionProfileGlobal[i]\r\n        }\r\n    }\r\n}\r\n\r\nvar EnvVariables = {\r\n    MouseX: 0,\r\n    MouseY: 0,\r\n    updateMousePosition({ offsetX, offsetY }) {\r\n        this.MouseX = offsetX * window.devicePixelRatio\r\n        this.MouseY = offsetY * window.devicePixelRatio\r\n    }\r\n}\r\n\r\n// module.export = { GameEnige }\r\n\r\n\n\n//# sourceURL=webpack://physicsengine/./src/Engine/GameEngine.js?");

/***/ }),

/***/ "./src/Engine/Vector.js":
/*!******************************!*\
  !*** ./src/Engine/Vector.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Vector\": () => (/* binding */ Vector),\n/* harmony export */   \"VectorMath\": () => (/* binding */ VectorMath)\n/* harmony export */ });\nclass Vector {\r\n    /**\r\n     * @param {number} xCord\r\n     * @param {number} yCord\r\n    */\r\n    constructor(xCord, yCord) {\r\n        this.X = xCord || 0\r\n        this.Y = yCord || 0\r\n    }\r\n\r\n    /**\r\n     * @param {Vector} vec \r\n    */\r\n    add(vec) {\r\n        this.X += vec.X\r\n        this.Y += vec.Y\r\n        return this\r\n    }\r\n\r\n    /**\r\n     * @param {Vector} vec\r\n    */\r\n    sub(vec) {\r\n        this.X -= vec.X\r\n        this.Y -= vec.Y\r\n        return this\r\n    }\r\n\r\n    /**\r\n     * @param {number} mag\r\n    */\r\n    mul(mag) {\r\n        this.X *= mag\r\n        this.Y *= mag\r\n        return this\r\n    }\r\n    /**\r\n     * @param {number} mag\r\n    */\r\n    div(mag) {\r\n        if (mag != 0) {\r\n            this.X /= mag\r\n            this.Y /= mag\r\n        }\r\n        return this\r\n    }\r\n\r\n    mag() {\r\n        return Math.sqrt(this.X * this.X + this.Y * this.Y)\r\n    }\r\n\r\n    /**\r\n    * @param {number} mag\r\n    */\r\n    setMag(mag) {\r\n        this.normalize()\r\n        this.mul(mag)\r\n        return this\r\n    }\r\n\r\n    normalize() {\r\n        let x = this.mag()\r\n        if (x != 0) this.div(x)\r\n        return this\r\n    }\r\n\r\n    toArray() {\r\n        return [this.X, this.Y]\r\n    }\r\n\r\n    /**\r\n     * @param {number} xCord\r\n     * @param {number} yCord\r\n    */\r\n    set(xCord, yCord) {\r\n        this.X = xCord\r\n        this.Y = yCord\r\n        return this\r\n    }\r\n\r\n    /**\r\n     * @param {number} x\r\n    */\r\n    limit(x) {\r\n        if (this.mag() > x)\r\n            this.setMag(x)\r\n\r\n        return this\r\n    }\r\n    toFloor() {\r\n        return new Vector(Math.floor(this.X), Math.floor(this.Y))\r\n    }\r\n}\r\n\r\nconst VectorMath = {\r\n\r\n    /**\r\n     * @param {Vector} vec1\r\n     * @param {Vector} vec2\r\n    */\r\n    add(vec1, vec2) {\r\n        return new Vector(vec1.X + vec2.X, vec1.Y + vec2.Y);\r\n    },\r\n    /**\r\n     * @param {Vector} vec1\r\n     * @param {Vector} vec2\r\n    */\r\n    sub(vec1, vec2) {\r\n        return new Vector(vec1.X - vec2.X, vec1.Y - vec2.Y);\r\n    },\r\n    /**\r\n     * @param {Vector} vec\r\n    */\r\n    clone(vec) {\r\n        return new Vector(vec.X, vec.Y)\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://physicsengine/./src/Engine/Vector.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/script.js");
/******/ 	
/******/ })()
;