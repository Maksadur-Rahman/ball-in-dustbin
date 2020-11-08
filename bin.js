class Bin{

    constructor(x,y,width,height){

     var opction={

        isStatic:true,

     }

     this.x=x;
     this.y=y;
     this.width=width;
     this.height=height;
     this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,opction);
     World.add(world,this.body);

    }
    display(){

        var pos=this.body.position;

        
     push()
     translate(pos.x,pos.y);
     rectMode(CENTER);
     stroke("cyan");
     fill("cyan"); 
     pop() 

    }

}