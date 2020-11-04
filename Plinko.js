class Plinko {
    constructor(x,y,r,options){
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x,y,10,options);
        this.w = w;
        this.h = h;
        world.add(world,this.body);
    }
    display (){
        var pos = this.body.position;
        rectMode(CENTRE);
        Fill("white");
        rect (pos.x,pos.y,this.w,this.h);
    }

}