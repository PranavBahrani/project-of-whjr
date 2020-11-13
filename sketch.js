const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground;
var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionsHeight = 300;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(0,800,1200,10)
  for(var k = 0;k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionsHeight/2,10,divisionsHeight));
  }
  for(var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75,10))
  }
  for(var j = 15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175,10))
  }
  for(var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,275,10))
  }
  for(var j = 15; j<width-10; j=j+50){
    plinkos.push(new Plinko (j,375,10))
  }
 
}

function draw() {
  background(0);  
  ground.display();
  for(var i = 0;i<divisions.length;i=i+1){
    divisions[i].display()
  }
  for(var i = 0;i<plinkos.length;i=i+1){
    plinkos[i].display()
  }
  if(frameCount%60===0){
   particles.push(new Particle(random(width/2-10, width/2+10), 10,10)); 
 }
  for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }

  drawSprites();
}