
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var divisions =[];
var plinkos = [];
var particle1 ;
var g;
var score =0;
 var turn=0;
 var PLAY=1;
 var END =0;
 var gameState=PLAY;

function setup() {
  createCanvas(550,800);
  engine=Engine.create();
  world = engine.world;
  g = new ground(width/2,height,width,20)
  for(i=7;i<=width; i=i +65){
    divisions.push(new Division(i,700 , 10, 380));
  }
  for (var j = 30; j <=width; j=j+70) 
    {
    
       plinkos.push(new Plinko(j,150));
    }

    for (var j = 17; j <=width-10; j=j+70) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 30; j <=width; j=j+70) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
   
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  g.display();
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
 
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }
  textSize(23)
  text ("200",19,550)

  textSize(23)
  text ("200",83,550)

  textSize(23)
  text ("2000",149,550)

  textSize(23)
  text ("2000",219,550)

  textSize(23)
  text ("2000",280,550)

  textSize(23)
  text ("500",347,550)

  textSize(23)
  text ("500",420,550)

  textSize(23)
  text ("500",480,550)

  textSize(25)
  text("TURN ="+turn,300,80);

  textSize(25)
  text("SCORE ="+score,100,80);
  stroke ("yellow");
  line (0,510,550,510);
  
  if(particle1!=null){
    particle1.display();
    if(particle1.body.position.y>630 && particle1.body.position.x<141){
      score = score +200;
      particle1=null;
      
    }
    else{
    if(particle1.body.position.y>630 && particle1.body.position.x>345){
       score=score+500;
       particle1=null;
       
    }
  }
 
}
if(particle1!=null){
if(particle1.body.position.y>630 && particle1.body.position.x>141 && particle1.body.position.x<345){
  score=score+2000;
  particle1=null;
  
}
  }
  if(turn>=5){
    gameState=END;
  }
  if(gameState===END){
    textSize(60)
    text("GAME OVER",100,400)
  }
} 
function mouseClicked(){
  
 if(gameState!==END){
  console.log("mousePressed");
   turn++;
   particle1=new particle(mouseX,40,10);
  
 }

}
