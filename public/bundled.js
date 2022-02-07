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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_Engine_Bodys_NewBody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Engine/Bodys/NewBody */ \"./src/Engine/Bodys/NewBody.js\");\n/* harmony import */ var _src_Engine_Bodys_Wall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/Engine/Bodys/Wall */ \"./src/Engine/Bodys/Wall.js\");\n/* harmony import */ var _src_Engine_Vectors_Vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Engine/Vectors/Vector */ \"./src/Engine/Vectors/Vector.js\");\n/* harmony import */ var _src_Engine_Engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Engine/Engine */ \"./src/Engine/Engine.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.engine = new _src_Engine_Engine__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('myCanvas', 800, 600);\r\n\r\nlet obj;\r\nobj = new _src_Engine_Bodys_NewBody__WEBPACK_IMPORTED_MODULE_0__[\"default\"](Math.random() * 200 + 300, Math.random() * 100 + 200)\r\nobj.mass = 10\r\nengine.pushObj(obj)\r\n\r\nobj = new _src_Engine_Bodys_NewBody__WEBPACK_IMPORTED_MODULE_0__[\"default\"](Math.random() * 200 + 300, Math.random() * 100 + 200)\r\nobj.mass = 200\r\nengine.pushObj(obj)\r\n\r\nengine.pushObj(new _src_Engine_Bodys_Wall__WEBPACK_IMPORTED_MODULE_1__[\"default\"](30, 360, [[-10, -330], [10, -330], [10, 360], [-10, 360],]))\r\nengine.pushObj(new _src_Engine_Bodys_Wall__WEBPACK_IMPORTED_MODULE_1__[\"default\"](930, 360, [[-10, -330], [10, -330], [10, 360], [-10, 360],]))\r\n\r\n// for (let i = 0; i < 3; i++) {\r\n//     let obj = new NewBody(Math.random() * 200 + 300, Math.random() * 100 + 200)\r\n//     obj.velocity.set(Math.random(), Math.random())\r\n//     engine.pushObj(obj)\r\n// }\r\nengine.pushObj(new _src_Engine_Bodys_Wall__WEBPACK_IMPORTED_MODULE_1__[\"default\"](415, 20, [[-370, -10], [500, -10], [500, 10], [-370, 10],]))\r\nengine.pushObj(new _src_Engine_Bodys_Wall__WEBPACK_IMPORTED_MODULE_1__[\"default\"](415, 700, [[-370, -10], [500, -10], [500, 10], [-370, 10],]))\r\n\r\nlet runningStatus = false;\r\n\r\ndocument.getElementById('start-stop').addEventListener('click', () => {\r\n\r\n    runningStatus = !runningStatus\r\n\r\n    if (runningStatus)\r\n        engine.stopEngine();\r\n    else\r\n        engine.startEngine();\r\n})\r\n\r\nengine.startEngine()\n\n//# sourceURL=webpack://physicsengine/./public/script.js?");

/***/ }),

/***/ "./src/Engine/Bodys/ConvexPolygon.js":
/*!*******************************************!*\
  !*** ./src/Engine/Bodys/ConvexPolygon.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ConvexPolygon)\n/* harmony export */ });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ \"./src/Engine/Bodys/Entity.js\");\n/* harmony import */ var _Vectors_Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Vectors/Vector */ \"./src/Engine/Vectors/Vector.js\");\n\r\n\r\n\r\nclass ConvexPolygon extends _Entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    /**\r\n     * @param {number} centerX position on x Axis\r\n     * @param {number} centerY postion on y Axis\r\n     * @param {Array<Array<number>>} verticeList Array of vertices of form [x, y] relate to center\r\n    */\r\n    constructor(centerX, centerY, verticeList) {\r\n\r\n        super()\r\n\r\n        if (typeof centerX !== 'number' || typeof centerY !== 'number')\r\n            throw 'Center points must by numbers'\r\n\r\n        this.center = new _Vectors_Vector__WEBPACK_IMPORTED_MODULE_1__[\"default\"](centerX, centerY)\r\n        this.vertice = []\r\n\r\n        for (let i = 0; i < verticeList.length; i++) {\r\n            if (!(verticeList[i] instanceof Array)\r\n                || verticeList[i].length < 2\r\n                || typeof verticeList[i][0] !== \"number\"\r\n                || typeof verticeList[i][1] !== 'number')\r\n                throw 'verticeList has a wrong type'\r\n\r\n            this.vertice.push(new _Vectors_Vector__WEBPACK_IMPORTED_MODULE_1__[\"default\"](verticeList[i][0], verticeList[i][1]).add(this.center))\r\n        }\r\n\r\n        this.verticeLength = this.vertice.length\r\n\r\n        if (this.verticeLength < 3)\r\n            throw 'Must have atleast 3 sides'\r\n\r\n        this.rotationAngle = 0\r\n        this.rotationAllowed = false\r\n        this.isColliding = false\r\n        this.wireFrameAllowed = false\r\n        this.position = this.center\r\n        this.isStatic = false\r\n    }\r\n\r\n    update() {\r\n\r\n        if (this.rotationAllowed)\r\n            this.rotate()\r\n\r\n        for (let v of this.vertice) {\r\n            v.add(this.velocity)\r\n        }\r\n\r\n        super.update()\r\n\r\n    }\r\n\r\n    render(ctx) {\r\n\r\n        if (this.wireFrameAllowed) {\r\n\r\n            for (let i = 0; i < this.vertice.length; i++) {\r\n                ctx.beginPath()\r\n                ctx.moveTo(...this.vertice[i].toArray())\r\n                ctx.lineTo(...this.vertice[(i + 1) % this.verticeLength].toArray())\r\n                ctx.strokeStyle = (this.isColliding ? 'red' : 'black')\r\n                ctx.stroke()\r\n            }\r\n            ctx.beginPath()\r\n            ctx.moveTo(...this.center.toArray())\r\n            ctx.lineTo(...this.vertice[0].toArray())\r\n            ctx.stroke()\r\n\r\n            ctx.strokeStyle = 'black'\r\n        }\r\n    }\r\n\r\n    rotate() {\r\n\r\n        for (let i = 0; i < this.verticeLength; i++) {\r\n            let v = this.vertice[i]\r\n            v.sub(this.center)\r\n            v.set(\r\n                v.X * Math.cos(this.rotationAngle) - v.Y * Math.sin(this.rotationAngle),\r\n                v.X * Math.sin(this.rotationAngle) + v.Y * Math.cos(this.rotationAngle)\r\n            )\r\n            v.add(this.center)\r\n        }\r\n    }\r\n    /**\r\n     * @param {Vector} vec\r\n    */\r\n    addToPosition(vec) {\r\n        this.center.add(vec)\r\n        for (const vertice of this.vertice)\r\n            vertice.add(vec)\r\n    }\r\n}\n\n//# sourceURL=webpack://physicsengine/./src/Engine/Bodys/ConvexPolygon.js?");

/***/ }),

/***/ "./src/Engine/Bodys/Entity.js":
/*!************************************!*\
  !*** ./src/Engine/Bodys/Entity.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Entity)\n/* harmony export */ });\n/* harmony import */ var _Vectors_VectorMath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Vectors/VectorMath */ \"./src/Engine/Vectors/VectorMath.js\");\n/* harmony import */ var _Vectors_Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Vectors/Vector */ \"./src/Engine/Vectors/Vector.js\");\n\r\n\r\n\r\nclass Entity {\r\n\r\n    constructor() {\r\n        this.position = new _Vectors_Vector__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\r\n        this.velocity = new _Vectors_Vector__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\r\n        this.acceleration = new _Vectors_Vector__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\r\n        this.mass = 1\r\n        this.restitution = 1\r\n    }\r\n\r\n    applyForce(vec) {\r\n        this.acceleration.add(\r\n            _Vectors_VectorMath__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clone(vec).div(this.mass)\r\n        )\r\n    }\r\n    \r\n    update() {\r\n        this.position.add(this.velocity)\r\n        this.velocity.add(this.acceleration)\r\n    }\r\n}\n\n//# sourceURL=webpack://physicsengine/./src/Engine/Bodys/Entity.js?");

/***/ }),

/***/ "./src/Engine/Bodys/NewBody.js":
/*!*************************************!*\
  !*** ./src/Engine/Bodys/NewBody.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NewBody)\n/* harmony export */ });\n/* harmony import */ var _ConvexPolygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConvexPolygon */ \"./src/Engine/Bodys/ConvexPolygon.js\");\n/* harmony import */ var _Vectors_Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Vectors/Vector */ \"./src/Engine/Vectors/Vector.js\");\n\r\n\r\n\r\nclass NewBody extends _ConvexPolygon__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(x, y) {\r\n\r\n        super(x, y, [\r\n            [-30, -55],\r\n            [25, -55],\r\n            [25, 48],\r\n            [-30, 48],\r\n        ])\r\n\r\n        this.rotationAllowed = false\r\n        this.rotationAngle = Math.random() / 5\r\n        this.wireFrameAllowed = true\r\n        this.goingBack = false\r\n        this.acceleration.set(0, 0.1)\r\n        this.restitution = 0.5\r\n\r\n    }\r\n\r\n    ping(ctx) {\r\n        this.update()\r\n        this.render(ctx)\r\n    }\r\n\r\n    update() {\r\n        super.update()\r\n    }\r\n\r\n    /**\r\n     * @param {CanvasRenderingContext2D} ctx\r\n    */\r\n    render(ctx) {\r\n        super.render(ctx)\r\n    }\r\n}\n\n//# sourceURL=webpack://physicsengine/./src/Engine/Bodys/NewBody.js?");

/***/ }),

/***/ "./src/Engine/Bodys/Wall.js":
/*!**********************************!*\
  !*** ./src/Engine/Bodys/Wall.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Wall)\n/* harmony export */ });\n/* harmony import */ var _ConvexPolygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConvexPolygon */ \"./src/Engine/Bodys/ConvexPolygon.js\");\n/* harmony import */ var _Vectors_Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Vectors/Vector */ \"./src/Engine/Vectors/Vector.js\");\n\r\n\r\n\r\nclass Wall extends _ConvexPolygon__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(x, y, list) {\r\n        super(x, y, list)\r\n\r\n        this.wireFrameAllowed = true\r\n        this.isStatic = true\r\n        this.mass = Infinity\r\n    }\r\n\r\n    ping(ctx) {\r\n        this.update()\r\n        this.render(ctx)\r\n    }\r\n\r\n    update() {\r\n        super.update()\r\n    }\r\n\r\n    /**\r\n     * @param {CanvasRenderingContext2D} ctx\r\n    */\r\n    render(ctx) {\r\n\r\n        super.render(ctx)\r\n        \r\n    }\r\n\r\n\r\n}\n\n//# sourceURL=webpack://physicsengine/./src/Engine/Bodys/Wall.js?");

/***/ }),

/***/ "./src/Engine/Collisions/Collision.js":
/*!********************************************!*\
  !*** ./src/Engine/Collisions/Collision.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Collision)\n/* harmony export */ });\n/* harmony import */ var _Bodys_ConvexPolygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Bodys/ConvexPolygon */ \"./src/Engine/Bodys/ConvexPolygon.js\");\n/* harmony import */ var _Vectors_Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Vectors/Vector */ \"./src/Engine/Vectors/Vector.js\");\n\r\n\r\n\r\nclass Collision {\r\n    \r\n    /**\r\n     * @param {ConvexPolygon} poly1\r\n     * @param {ConvexPolygon} poly2\r\n     * @param {Vector} normal\r\n     * @param {number} depth\r\n     */\r\n    constructor(poly1, poly2, normal, depth) {\r\n        if (!(poly1 instanceof _Bodys_ConvexPolygon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) || !(poly2 instanceof _Bodys_ConvexPolygon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]))\r\n            throw 'Parameter must be of types ConvexPolygon'\r\n\r\n        if (!(normal instanceof _Vectors_Vector__WEBPACK_IMPORTED_MODULE_1__[\"default\"]))\r\n            throw 'Normal Must be of type Vector'\r\n\r\n        if (typeof depth !== 'number')\r\n            throw 'Collision depth Must be a Number'\r\n\r\n        this.poly1 = poly1\r\n        this.poly2 = poly2\r\n        this.collisionNormal = normal\r\n        this.collisionDepth = depth\r\n    }\r\n}\n\n//# sourceURL=webpack://physicsengine/./src/Engine/Collisions/Collision.js?");

/***/ }),

/***/ "./src/Engine/Collisions/Detector.js":
/*!*******************************************!*\
  !*** ./src/Engine/Collisions/Detector.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Detector)\n/* harmony export */ });\n/* harmony import */ var _Bodys_ConvexPolygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Bodys/ConvexPolygon */ \"./src/Engine/Bodys/ConvexPolygon.js\");\n/* harmony import */ var _Collision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collision */ \"./src/Engine/Collisions/Collision.js\");\n/* harmony import */ var _Resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Resolver */ \"./src/Engine/Collisions/Resolver.js\");\n/* harmony import */ var _SAT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SAT */ \"./src/Engine/Collisions/SAT.js\");\n\r\n\r\n\r\n\r\n\r\nconst resolver = new _Resolver__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()\r\n\r\n/**\r\n * @param {Array<ConvexPolygon>} objectList\r\n*/\r\nfunction Detector(objectList) {\r\n\r\n    let collisionProfileGlobal = Array(objectList.length).fill(false)\r\n\r\n    for (let i = 0; i < objectList.length; i++) {\r\n\r\n        for (let j = i + 1; j < objectList.length; j++) {\r\n\r\n            let ob1 = objectList[i]\r\n            let ob2 = objectList[j]\r\n\r\n            let result = (0,_SAT__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ob1, ob2)\r\n\r\n            if (result.status)\r\n                resolver.pushCollision(\r\n                    new _Collision__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n                        ob1, ob2,\r\n                        result.normal,\r\n                        result.depth\r\n                    )\r\n                )\r\n\r\n            collisionProfileGlobal[j] ||= result.status\r\n            collisionProfileGlobal[i] ||= result.status\r\n        }\r\n    }\r\n\r\n    for (let i = 0; i < objectList.length; i++) {\r\n        const element = objectList[i];\r\n        element.isColliding = collisionProfileGlobal[i]\r\n    }\r\n\r\n    resolver.resolveCollision()\r\n}\n\n//# sourceURL=webpack://physicsengine/./src/Engine/Collisions/Detector.js?");

/***/ }),

/***/ "./src/Engine/Collisions/Resolver.js":
/*!*******************************************!*\
  !*** ./src/Engine/Collisions/Resolver.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Resolver)\n/* harmony export */ });\n/* harmony import */ var _Vectors_Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Vectors/Vector */ \"./src/Engine/Vectors/Vector.js\");\n/* harmony import */ var _Vectors_VectorMath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Vectors/VectorMath */ \"./src/Engine/Vectors/VectorMath.js\");\n/* harmony import */ var _Collision__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Collision */ \"./src/Engine/Collisions/Collision.js\");\n\r\n\r\n\r\n\r\nclass Resolver {\r\n\r\n    constructor() {\r\n        /**\r\n         * @type {Array<Collision>}\r\n        */\r\n        this.collisionList = []\r\n        this.shiftOffest = 0\r\n    }\r\n\r\n    /**\r\n     * @param {Collision} collision\r\n    */\r\n    pushCollision(collision) {\r\n        if (!(collision instanceof _Collision__WEBPACK_IMPORTED_MODULE_2__[\"default\"]))\r\n            throw 'Parameter must be of type Collision'\r\n\r\n        this.collisionList.push(collision)\r\n    }\r\n\r\n    resolveCollision() {\r\n        for (const collision of this.collisionList) {\r\n\r\n            // resolve logic\r\n\r\n            let {\r\n                poly1, poly2, collisionDepth, collisionNormal\r\n            } = collision;\r\n\r\n            if (poly1.isStatic && poly2.isStatic) continue;\r\n\r\n            if (collisionNormal.dot(_Vectors_VectorMath__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sub(poly2.position, poly1.position)) < 0) { collisionNormal.invert() }\r\n            collisionNormal.normalize()\r\n\r\n            if (poly1.isStatic) {\r\n                collisionNormal.mul(collisionDepth + this.shiftOffest)\r\n                poly2.addToPosition(collisionNormal)\r\n\r\n            }\r\n            else if (poly2.isStatic) {\r\n                collisionNormal.mul(collisionDepth + this.shiftOffest)\r\n                poly1.addToPosition(collisionNormal.invert())\r\n                collisionNormal.invert()\r\n            }\r\n            else {\r\n\r\n                collisionNormal.mul(collisionDepth / 2 + this.shiftOffest / 2)\r\n                poly2.addToPosition(collisionNormal)\r\n                poly1.addToPosition(collisionNormal.invert())\r\n                collisionNormal.invert()\r\n\r\n            }\r\n            collisionNormal.normalize()\r\n\r\n            let restitution = Math.min(poly1.restitution, poly2.restitution)\r\n\r\n            let j = -(1 + restitution) * _Vectors_VectorMath__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dot(_Vectors_VectorMath__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sub(poly2.velocity, poly1.velocity), collisionNormal)\r\n            j /= (1 / poly1.mass + 1 / poly2.mass)\r\n\r\n\r\n            poly1.velocity.sub(\r\n                collisionNormal.clone().mul(j / poly1.mass)\r\n            )\r\n            poly2.velocity.add(\r\n                collisionNormal.clone().mul(j / poly2.mass)\r\n            )\r\n\r\n            // console.log(poly1.velocity, poly2.velocity, collisionNormal.mag())\r\n            // collisionNormal.invert()\r\n            // console.log(poly1.velocity.mag())\r\n        }\r\n\r\n        this.collisionList.length = 0\r\n    }\r\n}\n\n//# sourceURL=webpack://physicsengine/./src/Engine/Collisions/Resolver.js?");

/***/ }),

/***/ "./src/Engine/Collisions/SAT.js":
/*!**************************************!*\
  !*** ./src/Engine/Collisions/SAT.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SAT)\n/* harmony export */ });\n/* harmony import */ var _Bodys_ConvexPolygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Bodys/ConvexPolygon */ \"./src/Engine/Bodys/ConvexPolygon.js\");\n/* harmony import */ var _Vectors_Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Vectors/Vector */ \"./src/Engine/Vectors/Vector.js\");\n/* harmony import */ var _Vectors_VectorMath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Vectors/VectorMath */ \"./src/Engine/Vectors/VectorMath.js\");\n\r\n\r\n\r\n\r\n/**\r\n * @param {ConvexPolygon} poly1\r\n * @param {ConvexPolygon} poly2\r\n * @returns {Inclusion} Returns [Status, {CollisionDepth, CollisionNormal}]\r\n*/\r\nfunction SAT(poly1, poly2) {\r\n\r\n    if (!(poly1 instanceof _Bodys_ConvexPolygon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) || !(poly2 instanceof _Bodys_ConvexPolygon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]))\r\n        throw 'Parameter must be of types ConvexPolygon'\r\n\r\n    let Inclusion = {\r\n        status: false,\r\n        depth: Infinity,\r\n        normal: new _Vectors_Vector__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\r\n    }\r\n\r\n    Inclusion.status = Project(poly1, poly2, Inclusion) && Project(poly2, poly1, Inclusion)\r\n\r\n    return Inclusion\r\n}\r\n\r\n/**\r\n * @param {ConvexPolygon} poly1\r\n * @param {ConvexPolygon} poly2\r\n * @returns {boolean} Return true/false if projection of polygons intersects on all the axises generated by the noramals of the vertices of poly1\r\n*/\r\nfunction Project(poly1, poly2, Inclusion) {\r\n\r\n    for (let i = 0; i < poly1.verticeLength; i++) {\r\n        let normalVector = _Vectors_VectorMath__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sub(\r\n            poly1.vertice[(i + 1) % poly1.verticeLength],\r\n            poly1.vertice[i]\r\n        )\r\n        // Rotation by 90\r\n        normalVector.set(\r\n            -normalVector.Y,\r\n            normalVector.X\r\n        )\r\n        let projectionsPoly1 = []\r\n        let projectionsPoly2 = []\r\n\r\n        for (let j = 0; j < poly1.verticeLength; j++) {\r\n            let projectionVector = _Vectors_VectorMath__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sub(\r\n                poly1.vertice[j],\r\n                poly1.vertice[i]\r\n            )\r\n            let projectionCordinate = projectionVector.X * normalVector.X + projectionVector.Y * normalVector.Y\r\n\r\n            projectionCordinate /= normalVector.mag()\r\n\r\n            projectionsPoly1.push(projectionCordinate)\r\n        }\r\n\r\n        for (let j = 0; j < poly2.verticeLength; j++) {\r\n            let projectionVector = _Vectors_VectorMath__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sub(\r\n                poly2.vertice[j],\r\n                poly1.vertice[i]\r\n            )\r\n            let projectionCordinate = projectionVector.X * normalVector.X + projectionVector.Y * normalVector.Y\r\n\r\n            projectionCordinate /= normalVector.mag()\r\n\r\n            projectionsPoly2.push(projectionCordinate)\r\n        }\r\n\r\n        let p1min = Math.min(...projectionsPoly1)\r\n        let p1max = Math.max(...projectionsPoly1)\r\n        let p2min = Math.min(...projectionsPoly2)\r\n        let p2max = Math.max(...projectionsPoly2)\r\n\r\n        let notColling = p1max < p2min || p2max < p1min\r\n\r\n        if (notColling)\r\n            return false\r\n\r\n        if (p1max - p2min < Inclusion.depth) {\r\n            Inclusion.depth = p1max - p2min\r\n            Inclusion.normal = normalVector\r\n        }\r\n\r\n        if (p2max - p1min < Inclusion.depth) {\r\n            Inclusion.depth = p2max - p1min\r\n            Inclusion.normal = normalVector\r\n        }\r\n    }\r\n\r\n    return true\r\n}\n\n//# sourceURL=webpack://physicsengine/./src/Engine/Collisions/SAT.js?");

/***/ }),

/***/ "./src/Engine/Engine.js":
/*!******************************!*\
  !*** ./src/Engine/Engine.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Engine)\n/* harmony export */ });\n/* harmony import */ var _Bodys_ConvexPolygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bodys/ConvexPolygon */ \"./src/Engine/Bodys/ConvexPolygon.js\");\n/* harmony import */ var _Collisions_Detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collisions/Detector */ \"./src/Engine/Collisions/Detector.js\");\n\r\n\r\n\r\nclass Engine {\r\n    constructor(canvasId, canvasWidht, canvasHeight) {\r\n\r\n        /**\r\n         * @type {HTMLElement}\r\n        */\r\n        this.canvas = document.getElementById(canvasId);\r\n\r\n        if (this.canvas == null)\r\n            throw 'Canvas does not exsist with id : ' + canvasId\r\n\r\n        if (typeof canvasHeight !== 'number' || typeof canvasWidht !== 'number')\r\n            throw 'Canvas Dimensions must be in number'\r\n\r\n        if (canvasHeight < 0 || canvasWidht < 0)\r\n            throw 'Dimensions must be positive'\r\n\r\n        /**\r\n         * @type {number}\r\n        */\r\n        this.canvasHeight = canvasHeight\r\n\r\n        /**\r\n         * @type {number}\r\n        */\r\n        this.canvasWidht = canvasWidht\r\n\r\n        /**\r\n         * @type {CanvasRenderingContext2D}\r\n        */\r\n        this._2dCtx = this.canvas.getContext(\"2d\")\r\n\r\n        this.ratio = window.devicePixelRatio;\r\n\r\n        this.canvas.width = canvasWidht * this.ratio;\r\n        this.canvas.height = canvasHeight * this.ratio;\r\n        this.canvas.style.width = canvasWidht + \"px\";\r\n        this.canvas.style.height = canvasHeight + \"px\";\r\n\r\n        this.objectList = []\r\n        this.engineStatus = 0\r\n\r\n        this.fps = 0\r\n        this.showFpsAllowed = true\r\n        this.frameCounter = 0\r\n        this.fpsUpdateInterval = 0\r\n        this.frameUpdateAvailable = false\r\n\r\n    }\r\n\r\n    pushObj(obj) {\r\n        if (!(obj instanceof _Bodys_ConvexPolygon__WEBPACK_IMPORTED_MODULE_0__[\"default\"])) {\r\n            throw 'Object Must of be type ConvexPolygon'\r\n        }\r\n        this.objectList.push(obj)\r\n    }\r\n\r\n    updateNextFrame(currentTime) {\r\n\r\n        if (this.frameUpdateAvailable) {\r\n            this.fps = parseInt(1000 / (currentTime - this.frameCounter))\r\n            this.frameUpdateAvailable = false\r\n        }\r\n\r\n        this.frameCounter = currentTime\r\n\r\n        for (let iter = 0; iter < 1; iter++) {\r\n\r\n            // Clear the old frame\r\n            this._2dCtx.clearRect(0, 0, this.ratio * this.canvasWidht, this.ratio * this.canvasHeight)\r\n\r\n            this.collisionDetection()\r\n\r\n            for (let i = 0; i < this.objectList.length; i++) {\r\n                this.objectList[i].ping(this._2dCtx)\r\n            }\r\n        }\r\n\r\n        if (this.showFpsAllowed)\r\n            this.showFps()\r\n\r\n        if (this.engineStatus)\r\n            requestAnimationFrame((currentTime) => {\r\n                this.updateNextFrame(currentTime)\r\n            })\r\n    }\r\n\r\n    startEngine() {\r\n\r\n        if (this.engineStatus == 0) {\r\n\r\n            this.engineStatus = 1\r\n            this.updateNextFrame()\r\n\r\n            this.fpsUpdateInterval = setInterval(\r\n                () => { this.frameUpdateAvailable = true },\r\n                1000\r\n            )\r\n        }\r\n\r\n    }\r\n\r\n    stopEngine() {\r\n        this.engineStatus = 0\r\n        clearInterval(this.fpsUpdateInterval)\r\n    }\r\n\r\n    collisionDetection() {\r\n        (0,_Collisions_Detector__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.objectList)\r\n    }\r\n\r\n    showFps() {\r\n\r\n        this._2dCtx.fillStyle = '#131313ab'\r\n        this._2dCtx.fillRect(0, 0, 70, 30)\r\n        this._2dCtx.fillStyle = '#2bfe41'\r\n        this._2dCtx.font = '15px monospace'\r\n        this._2dCtx.fillText(this.fps + 'FPS', 10, 20)\r\n    }\r\n}\r\n\r\n\r\n// module.export = { GameEnige }\r\n\r\n\n\n//# sourceURL=webpack://physicsengine/./src/Engine/Engine.js?");

/***/ }),

/***/ "./src/Engine/Vectors/Vector.js":
/*!**************************************!*\
  !*** ./src/Engine/Vectors/Vector.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Vector)\n/* harmony export */ });\nclass Vector {\r\n    /**\r\n     * @param {number} xCord\r\n     * @param {number} yCord\r\n    */\r\n    constructor(xCord, yCord) {\r\n        this.X = xCord || 0\r\n        this.Y = yCord || 0\r\n    }\r\n\r\n    /**\r\n     * \r\n     * @param {Vector} vec \r\n    */\r\n    add(vec) {\r\n        this.X += vec.X\r\n        this.Y += vec.Y\r\n        return this\r\n    }\r\n\r\n    /**\r\n     * @param {Vector} vec\r\n    */\r\n    sub(vec) {\r\n        this.X -= vec.X\r\n        this.Y -= vec.Y\r\n        return this\r\n    }\r\n\r\n    /**\r\n     * @param {number} mag\r\n    */\r\n    mul(mag) {\r\n        this.X *= mag\r\n        this.Y *= mag\r\n        return this\r\n    }\r\n    /**\r\n     * @param {number} mag\r\n    */\r\n    div(mag) {\r\n        if (mag != 0) {\r\n            this.X /= mag\r\n            this.Y /= mag\r\n        }\r\n        return this\r\n    }\r\n\r\n    mag() {\r\n        return Math.sqrt(this.X * this.X + this.Y * this.Y)\r\n    }\r\n\r\n    /**\r\n    * @param {number} mag\r\n    */\r\n    setMag(mag) {\r\n        this.normalize()\r\n        this.mul(mag)\r\n        return this\r\n    }\r\n\r\n    normalize() {\r\n        let x = this.mag()\r\n        if (x != 0) this.div(x)\r\n        return this\r\n    }\r\n\r\n    toArray() {\r\n        return [this.X, this.Y]\r\n    }\r\n\r\n    /**\r\n     * @param {number} xCord\r\n     * @param {number} yCord\r\n    */\r\n    set(xCord, yCord) {\r\n        this.X = xCord\r\n        this.Y = yCord\r\n        return this\r\n    }\r\n\r\n    /**\r\n     * @param {number} x\r\n    */\r\n    limit(x) {\r\n        if (this.mag() > x)\r\n            this.setMag(x)\r\n\r\n        return this\r\n    }\r\n    invert() {\r\n        this.X *= -1\r\n        this.Y *= -1\r\n        return this\r\n    }\r\n\r\n    /**\r\n    * @param {Vector} vec\r\n    */\r\n    dot(vec) {\r\n        return this.X * vec.X + this.Y * vec.Y\r\n    }\r\n    clone(){\r\n        return new Vector(this.X, this.Y)\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://physicsengine/./src/Engine/Vectors/Vector.js?");

/***/ }),

/***/ "./src/Engine/Vectors/VectorMath.js":
/*!******************************************!*\
  !*** ./src/Engine/Vectors/VectorMath.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ \"./src/Engine/Vectors/Vector.js\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    /**\r\n     * @param {Vector} vec1\r\n     * @param {Vector} vec2\r\n    */\r\n    add(vec1, vec2) {\r\n        return new _Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](vec1.X + vec2.X, vec1.Y + vec2.Y);\r\n    },\r\n    /**\r\n     * @param {Vector} vec1\r\n     * @param {Vector} vec2\r\n    */\r\n    sub(vec1, vec2) {\r\n        return new _Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](vec1.X - vec2.X, vec1.Y - vec2.Y);\r\n    },\r\n    /**\r\n     * @param {Vector} vec1\r\n     * @param {Vector} vec2\r\n    */\r\n    dot(vec1, vec2) {\r\n        return vec1.X * vec2.X + vec1.Y * vec2.Y\r\n    },\r\n    /**\r\n     * @param {Vector} vec\r\n    */\r\n    clone(vec) {\r\n        return new _Vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](vec.X, vec.Y);\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://physicsengine/./src/Engine/Vectors/VectorMath.js?");

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