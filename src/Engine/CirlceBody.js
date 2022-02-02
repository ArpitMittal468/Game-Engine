export class CircleBody {
    constructor(startX, startY) {

        this.velocity = 0
        this.accelration = 1000
        this.radius = 10
        this.X = startX || 0
        this.Y = startY || 0

        this.displacement = 0
        this.timeInterval = 1 / 60

    }

    /**
     * @param {CanvasRenderingContext2D} ctx
    */
    ping(ctx) {
        this.update()
        this.render(ctx)
    }

    update() {

        this.displacement = this.velocity * this.timeInterval + (this.accelration * this.timeInterval * this.timeInterval) / 2

        this.velocity += (this.accelration * this.timeInterval)
        // this.time += this.timeInterval;

        this.Y = this.Y + this.displacement

        if (this.Y + this.radius >= 500 && this.velocity >= 0) {
            // console.log('bounce')
            this.velocity *= - 0.8 // use 1 for no damping
        }

        // if (this.X == 100)
        //     console.table(this.velocity, this.Y, this.displacement)
    }

    render(ctx) {
        ctx.beginPath();
        ctx.arc(this.X, this.Y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.arc(this.X, this.Y, this.radius + 1, 0, 2 * Math.PI);
        ctx.stroke()
    }
    
}
// module.export = { CircleBody }