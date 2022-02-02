const { default: NewBody } = require('../src/Engine/NewBody.js');
import { Engine } from '../src/Engine/Engine';

window.engine = new Engine('myCanvas', 800, 600);

engine.pushObj(new NewBody())
engine.pushObj(new NewBody())


let runningStatus = false;

document.getElementById('start-stop').addEventListener('click', () => {

    runningStatus = !runningStatus

    if (runningStatus)
        engine.stopEngine();
    else
        engine.startEngine();
})

engine.startEngine()