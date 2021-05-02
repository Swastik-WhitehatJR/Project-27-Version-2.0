const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofObject, rope1, rope2, rope3, rope4, rope5;
var walltop;
var sideRight, sideLeft;
var ball1, ball2, ball3, ball4, ball5;
var ball1img, ball2img, ball3img, balll4img, ball5img;
var left,right,left2,right2,left3,right3;
var leftimg,rightimg,leftimg2,rightimg2,leftimg3,rightimg3;

function preload() {
  ball1img = loadImage("ball1.jpg")
  ball2img = loadImage("ball2.png")
  ball3img = loadImage("ball3.png")
  ball4img = loadImage("ball4.png")
  ball5img = loadImage("ball5.png")
  leftimg = loadImage("leftarrow.png")
  rightimg = loadImage("rightarrow.png")
  left2img = loadImage("leftarrow2.png")
  right2img = loadImage("rightarrow2.png")
  left3img = loadImage("leftarrow3.png")
  right3img = loadImage("rightarrow3.png")
}

function setup() {
  createCanvas(2200, 900);

  engine = Engine.create();
  world = engine.world;

  bob1 = new Ball(700, 400);
  bob2 = new Ball(800, 400);
  bob3 = new Ball(890, 400);
  bob4 = new Ball(950, 400);
  bob5 = new Ball(1060, 400);

  ball1 = createSprite(bob1.body.position.x, bob1.body.position.y, 55, 55)
  ball1.addImage("ball1image", ball1img);
  ball1.scale = 0.07;

  ball2 = createSprite(bob2.body.position.x, bob2.body.position.y, 55, 55)
  ball2.addImage("ball2image", ball2img);
  ball2.scale = 0.1;

  ball3 = createSprite(bob3.body.position.x, bob3.body.position.y, 55, 55)
  ball3.addImage("ball3image", ball3img);
  ball3.scale = 0.04;

  ball4 = createSprite(bob4.body.position.x, bob4.body.position.y, 55, 55)
  ball4.addImage("ball4image", ball4img);
  ball4.scale = 0.18;

  ball5 = createSprite(bob5.body.position.x, bob5.body.position.y, 55, 55)
  ball5.addImage("ball5image", ball5img);
  ball5.scale = 0.065;

  left3 = createSprite(1800,200,50,50)
  left3.addImage("left3", left3img);
  left3.scale = 0.5;

  right3 = createSprite(2100,200,50,50)
  right3.addImage("right3", right3img);
  right3.scale = 0.5;

  left2 = createSprite(1860,200,50,50)
  left2.addImage("left2", left2img);
  left2.scale = 0.5;

  right2 = createSprite(2040,200,50,50)
  right2.addImage("right3", right2img);
  right2.scale = 0.5;

  left = createSprite(1920,200,50,50)
  left.addImage("left3", leftimg);
  left.scale = 0.42;

  right = createSprite(1980,200,50,50)
  right.addImage("right", rightimg);
  right.scale = 0.3;


  var roofopt = {
    isStatic: true
  }
  roof = new Roof(900, 20, 1500, 30, roofopt);
  ground = new Ground(900, 750, 1800, 500, roofopt);

  sideRight = new Side(1650, 290, 30, 555, roofopt);
  sideLeft = new Side(150, 290, 30, 555, roofopt);

  rope1 = new Rope(bob1.body, roof.body, -200, 0);
  rope2 = new Rope(bob2.body, roof.body, -100, 0);
  rope3 = new Rope(bob3.body, roof.body, 0, 0);
  rope4 = new Rope(bob4.body, roof.body, 100, 0);
  rope5 = new Rope(bob5.body, roof.body, 200, 0);

  walltop = new Wall(0, 0, 3200, 5);

  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("pink");

  ball1.x = bob1.body.position.x;
  ball2.x = bob2.body.position.x;
  ball3.x = bob3.body.position.x;
  ball4.x = bob4.body.position.x;
  ball5.x = bob5.body.position.x;

  ball1.y = bob1.body.position.y;
  ball2.y = bob2.body.position.y;
  ball3.y = bob3.body.position.y;
  ball4.y = bob4.body.position.y+2;
  ball5.y = bob5.body.position.y;

  sideLeft.depth = ground.depth + 1;

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  sideLeft.display();
  sideRight.display();
  ground.display();
  drawSprites();

  if(mousePressedOver(left))
  {
    Matter.Body.applyForce(bob1.body, bob1.body.position, { x: -10, y: -10 });
  }

  if(mousePressedOver(right))
  {
    Matter.Body.applyForce(bob5.body, bob5.body.position, { x: 10, y: -10 });
  }

  if(mousePressedOver(left2))
  {
    Matter.Body.applyForce(bob1.body, bob1.body.position, { x: -30, y: -30 });
  }

  if(mousePressedOver(right2))
  {
    Matter.Body.applyForce(bob5.body, bob5.body.position, { x: 30, y: -30 });
  }

  if(mousePressedOver(left3))
  {
    Matter.Body.applyForce(bob1.body, bob1.body.position, { x: -50, y: -50 });
  }

  if(mousePressedOver(right3))
  {
    Matter.Body.applyForce(bob5.body, bob5.body.position, { x: 50, y: -50 });
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(bob5.body, bob5.body.position, { x: 70, y: -50 });
  }

  if (keyCode === DOWN_ARROW) {
    Matter.Body.applyForce(bob1.body, bob1.body.position, { x: -70, y: -50 });
  }
}
