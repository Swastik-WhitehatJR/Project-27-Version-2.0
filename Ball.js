class Ball {
    constructor(x,y) {
      var options = {
          isStatic:false,
         restitution:1,
          friction:0,
          density:0.5
      }
    this.x = x;
    this.y = y;
      this.body = Bodies.circle(x,y,30,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      ellipseMode(RADIUS);
      fill("rgb(106,3,119)");
      ellipse(0, 0, 30,30 );
      pop();
  }
}

/*class Bob extends BaseClassBall{
  constructor(x,y,width,height,image)
  {
    super(x,y,width,height);
    this.image = loadImage("ball1.png");
  }
}*/

/*class Ball{
  constructor(x, y) {
    var options = {
      isStatic:false,
     restitution:1,
      friction:0,
      density:0.5
  }
   this.x = x;
   this.y = y;
  this.body = Bodies.circle(x,y,30,options);
  World.add(world, this.body);

      this.image = loadImage("ball1.png");
      this.body.scale = 0.1;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
}*/
