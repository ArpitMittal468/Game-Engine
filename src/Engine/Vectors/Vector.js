export default class Vector {
    /**
     * @param {number} xCord
     * @param {number} yCord
    */
    constructor(xCord, yCord) {
        this.X = xCord || 0
        this.Y = yCord || 0
    }

    /**
     * 
     * @param {Vector} vec 
    */
    add(vec) {
        this.X += vec.X
        this.Y += vec.Y
        return this
    }

    /**
     * @param {Vector} vec
    */
    sub(vec) {
        this.X -= vec.X
        this.Y -= vec.Y
        return this
    }

    /**
     * @param {number} mag
    */
    mul(mag) {
        this.X *= mag
        this.Y *= mag
        return this
    }
    /**
     * @param {number} mag
    */
    div(mag) {
        if (mag != 0) {
            this.X /= mag
            this.Y /= mag
        }
        return this
    }

    mag() {
        return Math.sqrt(this.X * this.X + this.Y * this.Y)
    }

    /**
    * @param {number} mag
    */
    setMag(mag) {
        this.normalize()
        this.mul(mag)
        return this
    }

    normalize() {
        let x = this.mag()
        if (x != 0) this.div(x)
        return this
    }

    toArray() {
        return [this.X, this.Y]
    }

    /**
     * @param {number} xCord
     * @param {number} yCord
    */
    set(xCord, yCord) {
        this.X = xCord
        this.Y = yCord
        return this
    }

    /**
     * @param {number} x
    */
    limit(x) {
        if (this.mag() > x)
            this.setMag(x)

        return this
    }
    invert() {
        this.X *= -1
        this.Y *= -1
        return this
    }

    /**
    * @param {Vector} vec
    */
    dot(vec) {
        return this.X * vec.X + this.Y * vec.Y
    }
}


