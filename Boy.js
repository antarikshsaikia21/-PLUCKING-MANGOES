class Boy{
  constructor(bodyA, pointB){
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.04,
          length: 5
      }
      this.image = loadImage("sprites/boy.png");
      this.pointB=pointB;
      this.boy=Constraint.create(options);
      World.add(world, this.boy);
  }

  display(){
      if(this.boy.bodyA){
      var pointA = this.boy.bodyA.position;
      var pointB = this.pointB;
      strokeWeight(4);
      line(pointA.x-145, pointA.y+130, pointB.x+45, pointB.y+230);
      image(this.image,90,360,115,110);
  }
}
  fly(){
      this.boy.bodyA=null;
  }

}