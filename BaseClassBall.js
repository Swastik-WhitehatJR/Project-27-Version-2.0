/*class BaseClassBall{
    constructor(x, y, width, height) {
      var options = {
        isStatic:false,
       restitution:1,
        friction:0,
        density:0.5
    }
        this.body = Bodies.circle(x,y,30,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("base.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}*/