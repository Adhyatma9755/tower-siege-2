class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        restitution:0.3
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed<3){
      var position =this.body.position;
      var angle = this.body.angle;
      push();
      rotate(angle);
      translate(position.x,position.y);
      rectMode(CENTER);
      rect(0,0, this.width, this.height);
      pop();
    }
    else {
    World.remove(world, this.body);
    }
    
    
  }

  
  };