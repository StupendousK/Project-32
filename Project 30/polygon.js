class Polygon {
    constructor(x, y, width, height) {
        var options = {
            isStatic:true
        }
        this.polygon = loadImage("sprites/polygon.png");

        this.body = Bodies.rectangle(x, y, 150, 140, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        image(this.polygon, pos.x, pos.y, 70, 70);
    }
}