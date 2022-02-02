const { GameEnige } = require('../src/Engine/GameEngine');

import ConvexPolygon from '../src/Engine/ConvexPolygon';

window.engine = new GameEnige('myCanvas', 800, 600);


engine.pushObj(new ConvexPolygon([200, 250]))
engine.pushObj(new ConvexPolygon([400, 200]))
engine.pushObj(new ConvexPolygon([500, 600]))
engine.pushObj(new ConvexPolygon([600, 700]))


let runningStatus = false;

document.getElementById('start-stop').addEventListener('click', () => {

    runningStatus = !runningStatus

    if (runningStatus)
        engine.stopEngine();
    else
        engine.startEngine();
})

engine.startEngine()