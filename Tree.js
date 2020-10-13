class Tree {
 
constructor(x,y,width,height){
  
  this.body=Bodies.rectangle(x,y,width,height);
  this.width=width;
  this.height=height;
  this.x=x;
  this.y=y;
  this.image=loadImage("sprites/tree.png");
  

  World.add(world,this.body);
  
}
  display(){
    
     fill("brown");
    var pos = this.body.position
     push()
    translate(this.body.position.x, this.body.position.y);
     pop()
    imageMode(CENTER);
    image(this.image,470,260,270,270);
      
    
  }
   
}