class Mango {
 
constructor(x,y,width,height){
  
  this.body=Bodies.circle(x,y,width,height);
  this.width=width;
  this.height=height;
  this.x=x;
  this.y=y;
  this.image=loadImage("sprites/mango.png");

  World.add(world,this.body);
  
}
  display(){
    
     fill("red");
    var pos = this.body.position
    push();
    translate(this.body.position.x, this.body.position.y);
   pop();
    imageMode(CENTER);
    image(this.image,470,240,30,30);
    image(this.image,490,170,30,30);
    image(this.image,400,220,30,30);
    image(this.image,540,220,30,30);
    image(this.image,440,180,30,30);
    image(this.image,580,250,30,30);
  }
   
}