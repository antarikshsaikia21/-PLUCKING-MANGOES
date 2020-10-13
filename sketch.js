
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree1,ground1,boy1,mango1,mango2,mango3,mango4,mango5,mango6,stone1,sling;


function setup() {
	createCanvas(600,400);


	engine = Engine.create();
	world = engine.world;

	tree1=new Tree(200,200,100,20);
	ground1=new Ground(200,390,600,20);
	mango1=new Mango(200,200,100,20);
	mango2=new Mango(200,200,100,20);
	mango3=new Mango(200,200,100,20);
	mango4=new Mango(200,200,100,20);
	mango5=new Mango(200,200,100,20);
  mango6=new Mango(200,200,100,20);
  stone1=new Stone(200,200,20);
  boy1 = new Boy(stone1.body,{x:10,y:105});

  
}


function draw() {
  background("lightblue");
  tree1.display();
  ground1.display();
  boy1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone1.display();
}
function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  boy1.fly();
}
function detectCollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

  if(distance<=lmango.r+lstone.r){

Matter.Body.setStatic(lmango.body,false);

  }

}





