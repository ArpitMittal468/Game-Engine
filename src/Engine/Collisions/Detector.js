import ConvexPolygon from "../Bodys/ConvexPolygon";
import Collision from "./Collision";
import Resolver from "./Resolver";
import SAT from "./SAT";

const resolver = new Resolver()

/**
 * @param {Array<ConvexPolygon>} objectList
*/
export default function Detector(objectList) {

    let collisionProfileGlobal = Array(objectList.length).fill(false)

    for (let i = 0; i < objectList.length; i++) {

        for (let j = i + 1; j < objectList.length; j++) {

            let ob1 = objectList[i]
            let ob2 = objectList[j]

            let result = SAT(ob1, ob2)

            if (result.status)
                resolver.pushCollision(
                    new Collision(
                        ob1, ob2,
                        result.normal,
                        result.depth
                    )
                )

            collisionProfileGlobal[j] ||= result.status
            collisionProfileGlobal[i] ||= result.status
        }
    }

    for (let i = 0; i < objectList.length; i++) {
        const element = objectList[i];
        element.isColliding = collisionProfileGlobal[i]
    }

    resolver.resolveCollision()
}