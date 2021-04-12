class Ball {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution:0.3
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius ;
      World.add(world, this.body);
    }

    display(){
      var position = this.body.position;
      var angle = this.body.angle;
      push();
      rotate(angle);
      translate(position.x,position.y);
      ellipseMode(RADIUS);
      fill("pink")
      circle(0,0,this.radius);
      pop();

  }
    
    };
    