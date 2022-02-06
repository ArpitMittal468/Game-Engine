import Vector from "./Vector";

export default {
    /**
     * @param {Vector} vec1
     * @param {Vector} vec2
    */
    add(vec1, vec2) {
        return new Vector(vec1.X + vec2.X, vec1.Y + vec2.Y);
    },
    /**
     * @param {Vector} vec1
     * @param {Vector} vec2
    */
    sub(vec1, vec2) {
        return new Vector(vec1.X - vec2.X, vec1.Y - vec2.Y);
    },
    /**
     * @param {Vector} vec1
     * @param {Vector} vec2
    */
    dot(vec1, vec2) {
        return vec1.X * vec2.X + vec1.Y * vec2.Y
    },
    /**
     * @param {Vector} vec
    */
    clone(vec) {
        return new Vector(vec.X, vec.Y);
    }
};
