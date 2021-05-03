
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine, world

var snowflakes = []

var maxSNOW = 100

var boy, boyIM

function preload(){
  backgroundSnowImage = loadImage("snow1.jpg")
  boyIM = loadImage("Boy.png")
  
}




function setup() {
  createCanvas(800,400);
  
  engine = Engine.create()
  world = engine.world
  
  for (var i =0; i<maxSNOW; i++){
    
    snowflakes.push(new snow(random(50, 750), random(50, 100),30))
  }
 
  

  
 boy = createSprite(400, 340, 50,50);
  boy.addImage("Image", boyIM)
 boy.scale = .3
   
 
  
}

function draw() {
  background(backgroundSnowImage);  
  Engine.update(engine)


 
    for (var i = 0; i<maxSNOW; i++){
      snowflakes[i].display()
    }
  
 

    boy.x = mouseX
    

 
  

  
  drawSprites();
}

