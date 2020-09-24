class slingshot{
    constructor(bodyA, pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.04,
            length:10
        }
        this.pointB = pointB;
        this.slingshot = constraint.create(options);
        World.add(world, slingshot);
    }
    fly(){
        this.slingshot.bodyA = null;
    }
    display(){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(4);
        
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }
}