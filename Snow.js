class Snow{
    constructor(x,y,w,h){
        var options = {
            friction: 0.5,
            density: 1
        }
    this.image = loadImage("snow4.webp");
    this.body = Bodies.rectangle(x,y,w,h)
    World.add(world,this.body);
    this.w = w
    this.h = h
    }
    display(){
        var pose = this.body.position
        imageMode(CENTER);
        image(this.image,pose.x,pose.y,this.w,this.h);
    }
}