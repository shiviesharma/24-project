
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var paperObject = new paper(50,500,40,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		matter.Body.applyForce(paperObject.Body, paperObject.Body.position,{x:85,y:-85})
	}
}

