var PLAY = 1;
var END = 0;
var gameState = PLAY
var bg
var wall,bullet;
var thickness,speed,weight;
var dis = "Please Press Space To Check The Output";
var reload = "";

alert("This Is A Simulator To Check The Reliability Of The Walls When Bullets Hit Them")

/*
function preload(){
  bulletImage = loadImage("bullet.png");
}
*/

function setup(){
  createCanvas(1600,800);

  thickness = Math.round(random(22,83));
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));

  wall = createSprite(1200,200,thickness,400/2);
  wall.shapeColor = 80,80,80;
  wall.debug = false
  
  bullet = createSprite(50,200,20,7);
  bullet.shapeColor = "white"
  // bullet.addImage(bulletImage);
  // bullet.scale = 0.1
  bullet.debug = false

  red = createSprite(300,700,50,50);
  red.shapeColor = "red"
  
  green = createSprite(550,700,50,50); 
  green.shapeColor = "green"
  
  bg = createSprite(800,200,1600,400);
  bg.shapeColor = "Black";

  bg.depth = wall.depth
  bg.depth = bg.depth -1
}
function draw() {
  background("White");

  if(gameState === PLAY){
    if(keyDown("space")){
      bullet.velocityX = speed;
      dis = ""
      console.log(gameState)
    }
    calculateDamage(bullet,wall)
  }
  if (gameState === END){
    reload = "Please Press R To Reload The Page";

     if(keyDown("R")){
       reset();
     }
  }
  TEXTES();
  drawSprites();

}
function hasCollide(object1,object2){
  object1RightEdge = object1.x + object1.width
  object2LeftEdge = object2.x;
  
  if(object1RightEdge >= object2LeftEdge ){
    return true

  }
    return false;
}
function calculateDamage(input1,input2){
  if(hasCollide(input1,input2)){
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

    if(damage > 10){
      input2.shapeColor = color(255,0,0)
      input1.velocityX = 0
      gameState = END
      console.log(gameState);

    }
    if(damage<10){
      input2.shapeColor = color(0,255,0)
      input1.x = input2.x
      input1.velocityX = 0
      gameState = END
      console.log(gameState);
    }
  }
}
function TEXTES() {
  fill("Black");
  textSize(20);
  text("Bullet's Speed = "+ speed,200,500);

  fill("Black");
  textSize(20);
  text("Bullet's Speed = "+ speed,200,500);
  
  fill("Black");
  textSize(20);
  text("Bullet's Speed = "+ speed,200,500);

  fill("Black");
  textSize(20);
  text("Bullet's Speed = "+ speed,200,500);
  
  fill("Black");
  textSize(20);
  text("Bullet's Weight = "+ weight,200,550);
  
  fill("Black");
  textSize(20);
  text("Bullet's Weight = "+ weight,200,550);
  
  fill("Black");
  textSize(20);
  text("Bullet's Weight = "+ weight,200,550);
  
  fill("Black");
  textSize(20);
  text("Bullet's Weight = "+ weight,200,550);


  //displaying the thickness of the wall
  
  fill("Black");
  textSize(20);
  text("Thickness of the Wall = "+ thickness,200,600);
  
  fill("Black");
  textSize(20);
  text("Thickness of the Wall = "+ thickness,200,600);
  
  fill("Black");
  textSize(20);
  text("Thickness of the Wall = "+ thickness,200,600);
  
  fill("Black");
  textSize(20);
  text("Thickness of the Wall = "+ thickness,200,600);
 

//displaying what the color says

  fill("Black");
  textSize(20);
  text("= Lethal ",340,705);

  fill("Black");
  textSize(20);
  text("= Lethal ",340,705);
  
  fill("Black");
  textSize(20);
  text("= Good ",590,705);

  fill("Black");
  textSize(20);
  text("= Good",590,705);


  //desplaying the text to reloding the page
  
  fill("Black");
  textSize(20);
  text(reload,1200,755);
  
  fill("Black");
  textSize(20);
  text(reload,1200,755);
  
  fill("Black");
  textSize(20);
  text(reload,1200,755); 
  
  fill("Black");
  textSize(20);
  text(reload,1200,755);

  
  
  fill("Black");
  textSize(25);
  text(dis,650,500);
  
  fill("Black");
  textSize(25);
  text(dis,650,500);

}
function reset(){
  bullet.x = 50
  thickness = Math.round(random(22,83));
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));

  reload = "";

  wall.shapeColor = color(80,80,80)

  dis = "Please Press Space To Check The Output";

  wall.width = thickness

  gameState = PLAY
}