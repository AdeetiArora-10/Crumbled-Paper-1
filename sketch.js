
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Body = Matter.Body;
//var ground,ball;
var ground;
var paper,count=1;
var dustbinM,dustbinL,dustbinR;


 function setup() {
	createCanvas(700, 700);


	engine = Engine.create();
	world = engine.world;

 	//Create the Bodies Here.


	ground=new Ground(800,height-10,1600,10);
	dustbinL=new Dustbin(590,630,20,120);
	dustbinM=new Dustbin(500,680,200,20);
	dustbinR=new Dustbin(400,630,20,120);
	paper=new PAPER(50,600,15);
	Engine.run(engine);

  
 }


 function draw() {
   rectMode(CENTER);
   Engine.update(engine);
   background(0);
//    rect(ground.position.x,ground.position.y,200,20);
//    ellipseMode(RADIUS);
//    ellipse(ball.position.x,ball.position.y,20,20);

	ground.display();
	dustbinL.display();
	dustbinM.display();
	dustbinR.display();
	paper.display();

	
    drawSprites();
 
}
 function keyPressed(){
     if(keyCode===UP_ARROW){
           Body.applyForce(paper.body,paper.body.position,{x:30,y:-30});
        }
		//return false;
    }   