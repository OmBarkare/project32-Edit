class Box1{
    constructor(x,y,width,height){
        var options = {
            restitution: 0.3,
            friction: 100,
            density: 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/box.png")
        this.visibility = 255;

        World.add(world,this.body);
    }
    display(){
        if(this.body.speed<6){
            push();
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            angleMode(RADIANS);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();    
        } else {
            World.remove(world,this.body);
            push();
            this.visibility -= 10; 
            tint(255,this.visibility);
//            translate(this.body.position.x, this.body.position.y);
            angleMode(RADIANS);
            Matter.Body.setAngle(this.body ,this.body.angle);
            image(this.image, this.body.position.x, this.body.position.y, 20, 30);
            pop();
          }
    }
}