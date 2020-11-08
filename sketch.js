
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var peaper;
var bin1,bin2,bin3;
var world;
var engine;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	

	
	//Create the Bodies Here.
	ground=new Ground(316,605,10,600);
	peaper=new Peaper(100,80,30);
	bin1=new Bin(400,25,20,5);
	bin2=new Bin(410,25,20,5);
	bin3=new Bin(648,569,5,20);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  Engine.update(engine);
  text("x= "+mouseX+" y= "+mouseY,mouseX,mouseY);
  //peaper.collide(ground);
  

  
  peaper.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();
  if (keyDown(UP_ARROW)) {

	Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-20});
	
	  }
  
  
}



