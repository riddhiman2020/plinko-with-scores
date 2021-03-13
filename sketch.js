const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
 
var particle;
var particles = [particle];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var count=0;
var ground;
var gameState="play"

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  Engine.update(engine);
  textSize(20)
  stroke("white")
  text("Score : "+score,20,30);


  stroke("white")
  text("500",20,540)
  text("500",100,540)
  text("500",180,540)
  text("500",260,540)
  text("200",340,540)
  text("200",420,540)
  text("200",500,540)
  text("100",580,540)
  text("100",660,540)
  text("50",740,540)
  
 
   ground.display();

   if (gameState==="end"){
    background(0)
    textSize(50)
    text("GAME OVER", 300,300)
 }


   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 

  

   if(particle!=null){

      particle.display();

      if(particle.body.position.x>760){

        if(particle.body.postion.x<280){
          score=score+500
          particle=null
          if(count>=5) gameState="end"
        }

      else  if(particle.body.postion.x>281 && particle.body.position.x<520){
          score=score+200
          particle=null
          if(count>=5) gameState="end"
        }

      else  if(particle.body.postion.x>521 && particle.body.position.x<660){
          score=score+100
          particle=null
          if(count>=5) gameState="end"
        }

      else  if(particle.body.postion.x>661 && particle.body.position.x<740){
          score=score+50
          particle=null
          if(count>=5) gameState="end"
        }
      }
   }



for (var k = 0; k < divisions.length; k++) {
     
  divisions[k].display();
}


}

function mousePressed(){
  if (gameState!=="end"){
    count++;
     particle=new Particle(mouseX,50,10,10);
  } 
}
