const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var slingShot;

var polygon, polygonImg;

var ground1;

var block1, block2, block3, block4, block5, block6, block7, block8, block9;

var stand;

function preload() {
  polygonImg = loadImage("sprites/polygon.png");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(400, 400, 800, 20);

  stand = new Ground(390, 266, 200, 15);

  // level two
  block1 = new Block(330, 235, 30, 40);
  block2 = new Block(360, 235, 30, 40);
  block3 = new Block(390, 235, 30, 40);
  block4 = new Block(420, 235, 30, 40);
  block5 = new Block(450, 235, 30, 40);
  //level three
  block6 = new Block(360, 195, 30, 40);
  block7 = new Block(390, 195, 30, 40);
  block8 = new Block(420, 195, 30, 40);
  //top
  block9 = new Block(390, 155, 30, 40);

  polygon = Bodies.circle(50, 200, 40);
  World.add(world, polygon);

  slingShot = new SlingShot(this.polygon, {x:120, y:120});

}

function draw() {
  // background(0);  
  Engine.update(engine);
  
  ground1.display();

  stand.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);

  slingShot.display();

  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}
function keyPressed() {
  if(keyCode === 32) {
    slingShot.attach(this.polygon);
  }
}

async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  console.log(responseJSON);
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(8,10);
  console.log(datetime);
  console.log(hour);
  if(hour>=06 && hour<=19){
    background("white");
  }
  else{
    background("night");
  }
}