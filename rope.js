class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.4,
            length: 250
        }
        //this.sling1 = loadImage('sprites/sling1.png');
        //this.sling2 = loadImage('sprites/sling2.png');
        //this.sling3 = loadImage('sprites/sling3.png');
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    

    display(){
if (this.rope.bodyA) {
    var pointA = this.rope.bodyA.position
    var pointB = this.pointB
    stroke("brown")
    strokeWeight  (3)
    line(pointB.x,pointB.y,pointA.x,pointA.y)
}      
        }
    }
    
