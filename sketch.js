const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var ground1
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground1 = new ground(400,380,800,20);
  polygon1 = new Polygon(220,60,20);
  block1 = new box(120,235,30,40);
  block2 = new box(150,235,30,40);
  block3 = new box(180,235,30,40);
  block4 = new box(210,235,30,40);
  block5 = new box(240,235,30,40);
  block6 = new box(270,235,30,40);
  block7 = new box(300,235,30,40);
  block8 = new box(330,235,30,40);
  block9 = new box(360,235,30,40);
  block10 = new box(390,235,30,40);
  block11 = new box(420,235,30,40);
  block12 = new box(450,235,30,40);
  block13 = new box(480,235,30,40);
  block14 = new box(510,235,30,40);
  block15 = new box(530,235,30,40);
  block16 = new box(550,235,30,40);
  slingshot = new SlingShot(polygon1.body,{x: 100, y: 250})
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  ground1.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  polygon1.display()
  slingshot.display()
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}