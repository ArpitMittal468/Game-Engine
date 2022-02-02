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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_Engine_Engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Engine/Engine */ \"./src/Engine/Engine.js\");\nconst { default: NewBody } = __webpack_require__(/*! ../src/Engine/NewBody.js */ \"./src/Engine/NewBody.js\");\r\n\r\n\r\nwindow.engine = new _src_Engine_Engine__WEBPACK_IMPORTED_MODULE_0__.Engine('myCanvas', 800, 600);\r\n\r\nengine.pushObj(new NewBody())\r\nengine.pushObj(new NewBody())\r\n\r\n\r\nlet runningStatus = false;\r\n\r\ndocument.getElementById('start-stop').addEventListener('click', () => {\r\n\r\n    runningStatus = !runningStatus\r\n\r\n    if (runningStatus)\r\n        engine.stopEngine();\r\n    else\r\n        engine.startEngine();\r\n})\r\n\r\nengine.startEngine()\n\n//# sourceURL=webpack://physicsengine/./public/script.js?");

/***/ }),

/***/ "./src/Engine/ConvexPolygon.js":
/*!*************************************!*\
  !*** ./src/Engine/ConvexPolygon.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ConvexPolygon)\n/* harmony export */ });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ \"./src/Engine/Entity.js\");\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector */ \"./src/Engine/Vector.js\");\n\r\n\r\n\r\nclass ConvexPolygon extends _Entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    /**\r\n     * @param {number} centerX position on x Axis\r\n     * @param {number} centerY postion on y Axis\r\n     * @param {Array<Array<number>>} verticeList Array of vertices of form [x, y] relate to center\r\n    */\r\n    constructor(centerX, centerY, verticeList) {\r\n\r\n        super()\r\n\r\n        if (typeof centerX !== 'number' || typeof centerY !== 'number')\r\n            throw 'Center points must by numbers'\r\n\r\n        this.center = new _Vector__WEBPACK_IMPORTED_MODULE_1__.Vector(centerX, centerY)\r\n        this.vertice = []\r\n\r\n        for (let i = 0; i < verticeList.length; i++) {\r\n            if (!(verticeList[i] instanceof Array)\r\n                || verticeList[i].length < 2\r\n                || typeof verticeList[i][0] !== \"number\"\r\n                || typeof verticeList[i][1] !== 'number')\r\n                throw 'verticeList has a wrong type'\r\n\r\n            this.vertice.push(new _Vector__WEBPACK_IMPORTED_MODULE_1__.Vector(verticeList[i][0], verticeList[i][1]).add(this.center))\r\n        }\r\n\r\n        this.verticeLength = this.vertice.length\r\n\r\n        if (this.verticeLength < 3)\r\n            throw 'Must have atleast 3 sides'\r\n\r\n        this.rotationAngle = 0\r\n        this.rotationAllowed = false\r\n        this.isColliding = false\r\n        this.wireFrameAllowed = false\r\n        this.position = this.center\r\n    }\r\n\r\n    update() {\r\n\r\n        if (this.rotationAllowed)\r\n            this.rotate()\r\n\r\n        for (let v of this.vertice) {\r\n            v.add(this.velocity)\r\n        }\r\n\r\n        super.update()\r\n\r\n    }\r\n\r\n    render(ctx) {\r\n\r\n        if (this.wireFrameAllowed) {\r\n\r\n            for (let i = 0; i < this.vertice.length; i++) {\r\n                ctx.beginPath()\r\n                ctx.moveTo(...this.vertice[i].toArray())\r\n                ctx.lineTo(...this.vertice[(i + 1) % this.verticeLength].toArray())\r\n                ctx.strokeStyle = (this.isColliding ? 'red' : 'black')\r\n                ctx.stroke()\r\n            }\r\n            ctx.beginPath()\r\n            ctx.moveTo(...this.center.toArray())\r\n            ctx.lineTo(...this.vertice[0].toArray())\r\n            ctx.stroke()\r\n\r\n            ctx.strokeStyle = 'black'\r\n        }\r\n    }\r\n\r\n    rotate() {\r\n\r\n        for (let i = 0; i < this.verticeLength; i++) {\r\n            let v = this.vertice[i]\r\n            v.sub(this.center)\r\n            v.set(\r\n                v.X * Math.cos(this.rotationAngle) - v.Y * Math.sin(this.rotationAngle),\r\n                v.X * Math.sin(this.rotationAngle) + v.Y * Math.cos(this.rotationAngle)\r\n            )\r\n            v.add(this.center)\r\n        }\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://physicsengine/./src/Engine/ConvexPolygon.js?");

/***/ }),

/***/ "./src/Engine/Engine.js":
/*!******************************!*\
  !*** ./src/Engine/Engine.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Engine\": () => (/* binding */ Engine),\n/* harmony export */   \"EnvVariables\": () => (/* binding */ EnvVariables)\n/* harmony export */ });\n/* harmony import */ var _SAT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SAT */ \"./src/Engine/SAT.js\");\n\r\n\r\nclass Engine {\r\n    constructor(canvasId, canvasWidht, canvasHeight) {\r\n        this.canvas = document.getElementById(canvasId);\r\n        this.canvasHeight = canvasHeight\r\n        this.canvasWidht = canvasWidht\r\n\r\n        this._2dCtx = this.canvas.getContext(\"2d\")\r\n        this.currentTime = 0\r\n        this.frameUpdateRefernce\r\n\r\n        // this.canvas.setAttribute('width', canvasWidht)\r\n        // this.canvas.setAttribute('height', canvasHeight)\r\n\r\n        this.ratio = window.devicePixelRatio;\r\n\r\n        this.canvas.width = canvasWidht * this.ratio;\r\n        this.canvas.height = canvasHeight * this.ratio;\r\n        this.canvas.style.width = canvasWidht + \"px\";\r\n        this.canvas.style.height = canvasHeight + \"px\";\r\n\r\n        this.objectList = []\r\n        this.engineStatus = 0\r\n\r\n        this.frameCounter = 0\r\n\r\n        this.canvas.onmousemove = (ev) => EnvVariables.updateMousePosition(ev)\r\n    }\r\n\r\n    pushObj(obj) {\r\n        this.objectList.push(obj)\r\n    }\r\n\r\n    updateNextFrame() {\r\n        this._2dCtx.clearRect(0, 0, this.ratio * this.canvasWidht, this.ratio * this.canvasHeight)\r\n\r\n        this.collisionDetection()\r\n\r\n        for (let i = 0; i < this.objectList.length; i++) {\r\n            this.objectList[i].ping(this._2dCtx)\r\n        }\r\n\r\n        this.frameCounter++\r\n\r\n        if (this.engineStatus)\r\n            requestAnimationFrame(() => {\r\n                this.updateNextFrame()\r\n            })\r\n    }\r\n\r\n    startEngine() {\r\n\r\n        if (this.engineStatus == 0) {\r\n            this.engineStatus = 1\r\n            this.updateNextFrame()\r\n        }\r\n\r\n        // delete this\r\n        this.chosenInd = 0\r\n        addEventListener('keydown', (ev) => {\r\n            // console.log(ev.key)\r\n            if (ev.key == 'Tab')\r\n                this.chosenInd = (this.chosenInd + 1) % this.objectList.length;\r\n            else this.objectList[this.chosenInd].keyPress(ev.key)\r\n        })\r\n    }\r\n\r\n    stopEngine() {\r\n        this.engineStatus = 0\r\n    }\r\n\r\n\r\n    collisionDetection() {\r\n\r\n        let collisionProfileGlobal = Array(this.objectList.length).fill(false)\r\n\r\n        for (let i = 0; i < this.objectList.length; i++) {\r\n\r\n            for (let j = i + 1; j < this.objectList.length; j++) {\r\n\r\n                let ob1 = this.objectList[i]\r\n                let ob2 = this.objectList[j]\r\n\r\n                let result = (0,_SAT__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(ob1, ob2) && (0,_SAT__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(ob2, ob1)\r\n\r\n                collisionProfileGlobal[j] ||= result\r\n                collisionProfileGlobal[i] ||= result\r\n            }\r\n        }\r\n\r\n        for (let i = 0; i < this.objectList.length; i++) {\r\n            const element = this.objectList[i];\r\n            element.isColliding = collisionProfileGlobal[i]\r\n        }\r\n    }\r\n}\r\n\r\nvar EnvVariables = {\r\n    MouseX: 0,\r\n    MouseY: 0,\r\n    updateMousePosition({ offsetX, offsetY }) {\r\n        this.MouseX = offsetX * window.devicePixelRatio\r\n        this.MouseY = offsetY * window.devicePixelRatio\r\n    }\r\n}\r\n\r\n// module.export = { GameEnige }\r\n\r\n\n\n//# sourceURL=webpack://physicsengine/./src/Engine/Engine.js?");

/***/ }),

/***/ "./src/Engine/Entity.js":
/*!******************************!*\
  !*** ./src/Engine/Entity.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Entity)\n/* harmony export */ });\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ \"./src/Engine/Vector.js\");\n\r\n\r\nclass Entity {\r\n\r\n    constructor() {\r\n        this.position = new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector()\r\n        this.velocity = new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector()\r\n        this.acceleration = new _Vector__WEBPACK_IMPORTED_MODULE_0__.Vector()\r\n        this.mass = 0\r\n    }\r\n\r\n    applyForce(vec) {\r\n        this.acceleration.add(\r\n            _Vector__WEBPACK_IMPORTED_MODULE_0__.VectorMath.clone(vec).div(this.mass)\r\n        )\r\n    }\r\n    \r\n    update() {\r\n        this.position.add(this.velocity)\r\n        this.velocity.add(this.acceleration)\r\n    }\r\n}\n\n//# sourceURL=webpack://physicsengine/./src/Engine/Entity.js?");

/***/ }),

/***/ "./src/Engine/NewBody.js":
/*!*******************************!*\
  !*** ./src/Engine/NewBody.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NewBody)\n/* harmony export */ });\n/* harmony import */ var _ConvexPolygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConvexPolygon */ \"./src/Engine/ConvexPolygon.js\");\n\r\nconst { Vector, VectorMath } = __webpack_require__(/*! ./Vector */ \"./src/Engine/Vector.js\");\r\n\r\nclass NewBody extends _ConvexPolygon__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor() {\r\n        super(Math.random() * 500 + 10, 100, [\r\n            [3, -20],\r\n            [-3, -20],\r\n            [-9, -18],\r\n            [-14, -14],\r\n            [-18, -9],\r\n            [-20, -3],\r\n            [-20, 3],\r\n            [-18, 9],\r\n            [-14, 14],\r\n            [-9, 18],\r\n            [-3, 20],\r\n            [3, 20],\r\n            [9, 18],\r\n            [14, 14],\r\n            [18, 9],\r\n            [20, 3],\r\n            [20, -3],\r\n            [18, -9],\r\n            [14, -14],\r\n            [9, -18],\r\n        ])\r\n        // this.rotationAllowed = true\r\n        // this.rotationAngle = 0.01\r\n        this.wireFrameAllowed = true\r\n        this.goingBack = false\r\n    }\r\n\r\n    ping(ctx) {\r\n        this.update()\r\n        this.render(ctx)\r\n    }\r\n\r\n    update() {\r\n        super.update()\r\n\r\n        if (this.isColliding) {\r\n            if (!this.goingBack) {\r\n\r\n                this.velocity.setMag(\r\n                    -0.5 * this.velocity.mag()\r\n                )\r\n                this.goingBack = true\r\n            }\r\n        }\r\n        else {\r\n            this.goingBack = false\r\n        }\r\n        console.log(this.goingBack, this.velocity)\r\n    }\r\n\r\n    /**\r\n     * @param {CanvasRenderingContext2D} ctx\r\n    */\r\n    render(ctx) {\r\n\r\n        super.render(ctx)\r\n        // ctx.beginPath()\r\n        // ctx.arc(this.position.X, this.position.Y, 20, 0, 2 * Math.PI)\r\n        // ctx.stroke()\r\n\r\n    }\r\n\r\n    keyPress(key) {\r\n        switch (key) {\r\n            case 'ArrowRight':\r\n\r\n                // this.velocity.add(new Vector(1, 0))\r\n                this.acceleration.add(new Vector(1, 0).setMag(0.01))\r\n                break\r\n            case 'ArrowLeft':\r\n\r\n                this.velocity.add(new Vector(-1, 0))\r\n                break\r\n            case 'ArrowUp':\r\n\r\n                this.velocity.add(new Vector(0, -1))\r\n                break\r\n            case 'ArrowDown':\r\n\r\n                this.velocity.add(new Vector(0, 1))\r\n                break\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://physicsengine/./src/Engine/NewBody.js?");

/***/ }),

/***/ "./src/Engine/SAT.js":
/*!***************************!*\
  !*** ./src/Engine/SAT.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SAT)\n/* harmony export */ });\n/* harmony import */ var _ConvexPolygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConvexPolygon */ \"./src/Engine/ConvexPolygon.js\");\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector */ \"./src/Engine/Vector.js\");\n\r\n\r\n\r\n/**\r\n * @param {ConvexPolygon} poly1\r\n * @param {ConvexPolygon} poly2\r\n * @returns {boolean} Return true/false if projection of polygons intersects on all the axises generated by the noramals of the vertices of poly1 \r\n*/\r\nfunction SAT(poly1, poly2) {\r\n\r\n    if (!(poly1 instanceof _ConvexPolygon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) || !(poly2 instanceof _ConvexPolygon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]))\r\n        throw 'Parameter must be of types ConvexPolygon'\r\n\r\n    for (let i = 0; i < poly1.verticeLength; i++) {\r\n        let normalVector = _Vector__WEBPACK_IMPORTED_MODULE_1__.VectorMath.sub(\r\n            poly1.vertice[(i + 1) % poly1.verticeLength],\r\n            poly1.vertice[i]\r\n        )\r\n        // Rotation by 90\r\n        normalVector.set(\r\n            -normalVector.Y,\r\n            normalVector.X\r\n        )\r\n        let projectionsPoly1 = []\r\n        let projectionsPoly2 = []\r\n\r\n        for (let j = 0; j < poly1.verticeLength; j++) {\r\n            let projectionVector = _Vector__WEBPACK_IMPORTED_MODULE_1__.VectorMath.sub(\r\n                poly1.vertice[j],\r\n                poly1.vertice[i]\r\n            )\r\n            let projectionCordinate = projectionVector.X * normalVector.X + projectionVector.Y * normalVector.Y\r\n            \r\n            projectionCordinate /= normalVector.mag()\r\n\r\n            projectionsPoly1.push(projectionCordinate)\r\n        }\r\n\r\n        for (let j = 0; j < poly2.verticeLength; j++) {\r\n            let projectionVector = _Vector__WEBPACK_IMPORTED_MODULE_1__.VectorMath.sub(\r\n                poly2.vertice[j],\r\n                poly1.vertice[i]\r\n            )\r\n            let projectionCordinate = projectionVector.X * normalVector.X + projectionVector.Y * normalVector.Y\r\n            \r\n            projectionCordinate /= normalVector.mag()\r\n\r\n            projectionsPoly2.push(projectionCordinate)\r\n        }\r\n\r\n        let p1min = Math.min(...projectionsPoly1)\r\n        let p1max = Math.max(...projectionsPoly1)\r\n        let p2min = Math.min(...projectionsPoly2)\r\n        let p2max = Math.max(...projectionsPoly2)\r\n\r\n        let notColling = p1max < p2min || p2max < p1min\r\n\r\n        if (notColling) \r\n            return false\r\n    }\r\n    return true\r\n}\n\n//# sourceURL=webpack://physicsengine/./src/Engine/SAT.js?");

/***/ }),

/***/ "./src/Engine/Vector.js":
/*!******************************!*\
  !*** ./src/Engine/Vector.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Vector\": () => (/* binding */ Vector),\n/* harmony export */   \"VectorMath\": () => (/* binding */ VectorMath)\n/* harmony export */ });\nclass Vector {\r\n    /**\r\n     * @param {number} xCord\r\n     * @param {number} yCord\r\n    */\r\n    constructor(xCord, yCord) {\r\n        this.X = xCord || 0\r\n        this.Y = yCord || 0\r\n    }\r\n\r\n    /**\r\n     * \r\n     * @param {Vector} vec \r\n    */\r\n    add(vec) {\r\n        this.X += vec.X\r\n        this.Y += vec.Y\r\n        return this\r\n    }\r\n\r\n    /**\r\n     * @param {Vector} vec\r\n    */\r\n    sub(vec) {\r\n        this.X -= vec.X\r\n        this.Y -= vec.Y\r\n        return this\r\n    }\r\n\r\n    /**\r\n     * @param {number} mag\r\n    */\r\n    mul(mag) {\r\n        this.X *= mag\r\n        this.Y *= mag\r\n        return this\r\n    }\r\n    /**\r\n     * @param {number} mag\r\n    */\r\n    div(mag) {\r\n        if (mag != 0) {\r\n            this.X /= mag\r\n            this.Y /= mag\r\n        }\r\n        return this\r\n    }\r\n\r\n    mag() {\r\n        return Math.sqrt(this.X * this.X + this.Y * this.Y)\r\n    }\r\n\r\n    /**\r\n    * @param {number} mag\r\n    */\r\n    setMag(mag) {\r\n        this.normalize()\r\n        this.mul(mag)\r\n        return this\r\n    }\r\n\r\n    normalize() {\r\n        let x = this.mag()\r\n        if (x != 0) this.div(x)\r\n        return this\r\n    }\r\n\r\n    toArray() {\r\n        return [this.X, this.Y]\r\n    }\r\n\r\n    /**\r\n     * @param {number} xCord\r\n     * @param {number} yCord\r\n    */\r\n    set(xCord, yCord) {\r\n        this.X = xCord\r\n        this.Y = yCord\r\n        return this\r\n    }\r\n\r\n    /**\r\n     * @param {number} x\r\n    */\r\n    limit(x) {\r\n        if (this.mag() > x)\r\n            this.setMag(x)\r\n\r\n        return this\r\n    }\r\n}\r\n\r\nconst VectorMath = {\r\n\r\n    /**\r\n     * @param {Vector} vec1\r\n     * @param {Vector} vec2\r\n    */\r\n    add(vec1, vec2) {\r\n        return new Vector(vec1.X + vec2.X, vec1.Y + vec2.Y);\r\n    },\r\n    /**\r\n     * @param {Vector} vec1\r\n     * @param {Vector} vec2\r\n    */\r\n    sub(vec1, vec2) {\r\n        return new Vector(vec1.X - vec2.X, vec1.Y - vec2.Y);\r\n    },\r\n    /**\r\n     * @param {Vector} vec\r\n    */\r\n    clone(vec) {\r\n        return new Vector(vec.X, vec.Y)\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://physicsengine/./src/Engine/Vector.js?");

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