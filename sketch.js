const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
      }
      var box_options ={
      restitution: 1.5
      }
    ground = Bodies.rectangle(200,390,200,20,ground_options);
      World.add(world,ground);
      
      box = Bodies.rectangle(200,100,60,40,box_options);
      World.add(world,box);
}
    
    
    function draw() {
      background(0);
      Engine.update(engine);
      rectMode(CENTER);
      rect(ground.position.x,ground.position.y,400,20);
      
      rectMode(CENTER);
      rect(box.position.x,box.position.y,60,40);

     for(var i = 0; i < 20; i++){
       var spr = createSprite(random(width),random(height),random(10,50),random(10,50));
       spr.shapeColor = random(255);
     }
    
    drawSprites()
    }