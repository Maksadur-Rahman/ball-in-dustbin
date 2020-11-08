class Peaper{

    constructor(x,y,radius){

        var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2,

        }

        this.x=x;
        this.y=y;
        this.radius=radius/2;
        this.body=Bodies.circle(this.x,this.y,this.radius/2,options);
        World.add(world,this.body);


    }

    display(){

    var peaperpos=this.body.position;

     push()
     translate(peaperpos.x,peaperpos.y);
     rectMode(CENTER);
     strokeWeight(0);
     fill(235,0,235); 
     ellipse(0,0,this.radius,this.radius);
     pop() 

    }
}