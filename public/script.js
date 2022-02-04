import NewBody from '../src/Engine/Bodys/NewBody'
import Wall from '../src/Engine/Bodys/Wall';
import Vector from '../src/Engine/Vectors/Vector';
import { Engine } from '../src/Engine/Engine';


window.engine = new Engine('myCanvas', 800, 600);

for (let i = 0; i < 30; i++) {
    let obj = new NewBody()
    obj.velocity.add(new Vector(Math.random() * 10, Math.random() * 10).normalize())
    if (Math.random() * 10 < 5) obj.velocity.X *= -1
    if (Math.random() * 10 < 5) obj.velocity.Y *= -1
    engine.pushObj(obj)
}
// engine.pushObj(new NewBody())

engine.pushObj(new Wall(30, 360, [[-10, -330], [10, -330], [10, 360], [-10, 360],]))
engine.pushObj(new Wall(930, 360, [[-10, -330], [10, -330], [10, 360], [-10, 360],]))

engine.pushObj(new Wall(415, 20, [[-370, -10], [500, -10], [500, 10], [-370, 10],]))
engine.pushObj(new Wall(415, 700, [[-370, -10], [500, -10], [500, 10], [-370, 10],]))

let runningStatus = false;

document.getElementById('start-stop').addEventListener('click', () => {

    runningStatus = !runningStatus

    if (runningStatus)
        engine.stopEngine();
    else
        engine.startEngine();
})

engine.startEngine()