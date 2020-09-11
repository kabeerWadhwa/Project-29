//class slingshot
class SlingShot{
    //constructor
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        //create sling
        this.sling = Constraint.create(options);
        //add to world
        World.add(world, this.sling);
    }
    //makes bird fly out of slingshot
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //slingshot images
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        if(this.sling.bodyA){
            //point A and Point B
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(48,22,8)
            push()
            if(pointA.x < 220){

            line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
            line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y);
            image(this.sling3,pointA.x - 30, pointA.y - 10,15,30);
            }

            else{
            line(pointA.x + 25, pointA.y, pointB.x - 10, pointB.y);
            line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y);
            image(this.sling3,pointA.x + 25, pointA.y - 10,15,30);
            }
            pop()
        }
    }
    
}