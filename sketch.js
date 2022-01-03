const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World

var engine, world
var backgroundimg
var snow1 = []

function preload(){
backgroundimg = loadImage("snow2.jpg");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  //snow1 = new Snow(50,50,30,30)
}

function draw() {
  background(backgroundimg);
  Engine.update(engine);
  if(frameCount%60=== 0){
    snow1.push(new Snow(random(0,800),0,30,30))
  }
 
  for (var i = 0; i < snow1.length; i++) {
    snow1[i].display();   
  }
  drawSprites();
}