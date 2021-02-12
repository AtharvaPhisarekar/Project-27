
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var bob1,bob2,bob3,bob4,bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new Roof(400,100,250,50);
bob1 = new Bob(300,300,20);
bob2 = new Bob(340,300,20);
bob3 = new Bob(380,300,20);
bob4 = new Bob(420,300,20);
bob5 = new Bob(460,300,20);
rope1 = new Rope(bob1.body,{x:300,y:100})
rope2 = new Rope(bob2.body,{x:340,y:100})
rope3 = new Rope(bob3.body,{x:380,y:100})
rope4 = new Rope(bob4.body,{x:420,y:100})
rope5 = new Rope(bob5.body,{x:460,y:100})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-40,y:-40})
  }
}


