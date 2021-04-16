class Block {
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
            resitution:0.5
        }
        this.visibility = 225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display() {
        if(this.body.speed < 3) {
        var pos = this.body.position;
        stroke("lime");
        fill("white");
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        }
        else {
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility-5;
            pop();
        }
    }
}