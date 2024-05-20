class Enemy {
    constructor(x, y, imageNumber) {
        this.x = x;
        this.y = y;
        this.width = 44;
        this.height = 32;
        thisimage = new Image();
        thisimage.src = `src/assets/images/enemy${imageNumber}.png`;
    }


}