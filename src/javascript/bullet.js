export default class bullet {
    constructor(canvas, x, y, velocity, bulletColor){
        this.canvas = canvas;
        thix.x = x;
        this.y = y;
        this.velocity = velocity;
        this.bulletColor = bulletColor;

        this.width = 5;
        this.height = 20;
    }

    draw(ctx) {
        this.y -= this.velocity;
        ctx.fillStyle = this.bulletColor;
        ctx.fillRect(this.x, this.x, this.width, this.height);
    }
    collideWith(sprite) {
        
    }
}

