
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ballObject1,ballObject2,ballObject3,ballObject4,ballObject5;
var roofObject;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	background(255,255,0);

	engine = Engine.create();
	world = engine.world;

	ballObject1=new Bob(600,550,100);
	ballObject2=new Bob(500,550,100);
	ballObject3=new Bob(400,550,100);
	ballObject4=new Bob(300,550,100);
	ballObject5=new Bob(200,550,100);

	roofObject=new Roof(400,150,500,30);

	rope1=new Rope(ballObject1.body,roofObject.body,200*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ballObject1.display();
  ballObject2.display();
  ballObject3.display();
  ballObject4.display();
  ballObject5.display();

  roofObject.display();
  drawSprites();
 
}



