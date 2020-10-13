class Stone{
  constructor(x, y,r) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body=Bodies.circle(x,y,(r-20)/2,options);
      this.r=r;
      this.x=x;
      this.y=y;
      this.image=loadImage("sprites/stone.png");
    
      World.add(world,this.body);
    }
    display(){
  // this.body.position.x = mouseX;
    //this.body.position.y = mouseY;  
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image,-145, 130,this.r,this.r);
      pop();
    }
}