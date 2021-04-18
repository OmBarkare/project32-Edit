class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 100
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    display(){
        if(this.sling.bodyA){
            var pntA = this.sling.bodyA.position;
            var pntB = this.sling.pointB;
            push();
            strokeWeight(3);
            stroke("white");
            line(pntA.x, pntA.y, pntB.x, pntB.y);
            pop();
        }
    }
    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }
}