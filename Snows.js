class snow{
constructor(x,y,r){
  var  Option={
      friction: 0.2,
      density: 0.1
  }
  this.body = Bodies.circle(x,y,r,Option)
  this.image = loadImage("snow4.webp")
  this.r = r
  World.add(world, this.body)

}
display(){
    imageMode(CENTER)
    image(this.image, this.body.position.x,this.body.position.y, this.r,this.r )
}
}