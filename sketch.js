var snake;
var snakeImg;

var backgroundImg;
var bg;
var bg1;

var extraSnake;
var extraSnakeImg;

var extra1_snake;
var extra1_snakeImg;

var extra2_snake;
var extra2_snakeImg;

var extra3_snake;
var extra3_snakeImg;

var extra4_snake;
var extra4_snakeImg;

var stars;
var starsimg;

var stars2;
var stars2img;

var dots;
var dotsImg;

var border1,border2,border3,border4;

var score = 0;
var chance = 3;

var gameState = "play";

function preload()
{
snakeImg = loadImage('snake_green.png')
backgroundImg = loadImage('background.png')
extraSnakeImg = loadImage('extra_snake.png')
dotsImg = loadImage('dots.png');
extra1_snakeImg = loadImage('extra1_snake.png')
extra2_snakeImg = loadImage('extra2_snake.png')
extra3_snakeImg = loadImage('extra3_snake.png')
extra4_snakeImg = loadImage('extra4_snake.png')
starsimg = loadImage('stars.png');
stars2img = loadImage('stars2.png');
}

function setup() {
   createCanvas(displayWidth-20, displayHeight-30);

   bg = createSprite(displayWidth/2,displayHeight/2);
   bg.addImage(backgroundImg);
   bg.scale = 4;

   snake = createSprite(displayWidth/2,displayHeight-30)
   snake.addImage(snakeImg);
   snake.scale = 0.5;

   extraSnake = createSprite(displayWidth/2-300,displayHeight-30)
   extraSnake.addImage(extraSnakeImg);
   extraSnake.scale = 0.5

   border1 = createSprite(displayWidth/2,-3400,14000,20);
   border1.shapeColor ="black" 
   border2 = createSprite(-5600,displayHeight/2,20,8000);
   border2.shapeColor ="black" 
   border3 = createSprite(displayWidth/2,4300,14000,20);
   border3.shapeColor ="black" 
   border4 = createSprite(7200,displayHeight/2,20,8000);
   border4.shapeColor ="black" 

   extra1_snake = createSprite(displayWidth/2-1000,displayHeight-30);
   extra1_snake.addImage(extra1_snakeImg);

   extra2_snake = createSprite(displayWidth/2,displayHeight/2-1500);
   extra2_snake.addImage(extra2_snakeImg);

   extra3_snake = createSprite(displayWidth/2+2000,displayHeight-30);
   extra3_snake.addImage(extra3_snakeImg);

   extra4_snake = createSprite(displayWidth/2,displayHeight/2);
   extra4_snake.addImage(extra4_snakeImg);

   extraSnake.velocityX = random(-5,5);
   extraSnake.velocityY = random(-5,5);

   extra1_snake.velocityX = random(7,-7);
   extra1_snake.velocityY = random(7,-7);

   extra2_snake.velocityX = random(-3,3);
   extra2_snake.velocityY = random(3,-3);

   extra3_snake.velocityX = random(7,-7);
   extra3_snake.velocityY = random(-7,7);

   extra4_snake.velocityX = random(3,-3);
   extra4_snake.velocityY = random(3,-3);

   stars1Group = new Group();
   stars2Group = new Group();
   dots1Group = new Group();

   stars3Group = new Group();
   stars4Group = new Group();
   dots2Group = new Group();

   snake.debug = true;
   snake.setCollider("circle",0,0,50);
}


function draw() {

  background(0);
  
  if(gameState === "play"){
  if(keyWentDown(UP_ARROW)){
	  snake.velocityY = -8;
  }
  

  if(keyWentDown(DOWN_ARROW)){
    snake.velocityY = 8;
  }

  if(keyWentDown(RIGHT_ARROW)){
	  snake.velocityX = 8;
  }

  if(keyWentDown(LEFT_ARROW)){
    snake.velocityX = -8;
  }
 
  extraSnake.bounceOff(border1);
  extraSnake.bounceOff(border2);
  extraSnake.bounceOff(border3);
  extraSnake.bounceOff(border4);

  extra1_snake.bounceOff(border1);
  extra1_snake.bounceOff(border2);
  extra1_snake.bounceOff(border3);
  extra1_snake.bounceOff(border4);

  extra2_snake.bounceOff(border1);
  extra2_snake.bounceOff(border2);
  extra2_snake.bounceOff(border3);
  extra2_snake.bounceOff(border4);

  extra3_snake.bounceOff(border1);
  extra3_snake.bounceOff(border2);
  extra3_snake.bounceOff(border3);
  extra3_snake.bounceOff(border4);

  extra4_snake.bounceOff(border1);
  extra4_snake.bounceOff(border2);
  extra4_snake.bounceOff(border3);
  extra4_snake.bounceOff(border4);

  camera.x = snake.x;
  camera.y = snake.y ;
  stars1();
  dots1();
  stars5();
  dots2();
  drawSprites();
  if(stars1Group.isTouching(snake)){
    snake.scale = snake.scale+0.008;
    stars1Group.destroyEach();
    score = score+5;
  }
  fill("white")
  textSize(30)
  text("Score : "+score,snake.x,snake.y-100)
  if(stars2Group.isTouching(snake)){
    snake.scale = snake.scale+0.008;
    stars2Group.destroyEach();
    score = score+5;
  }

  if(dots1Group.isTouching(snake)){
    snake.scale = snake.scale+0.008;
    dots1Group.destroyEach();
    score = score+5;
  }

  if(stars4Group.isTouching(snake)){
    snake.scale = snake.scale+0.008;
    stars4Group.destroyEach();
    score = score+5;
  }

  if(stars3Group.isTouching(snake)){
    snake.scale = snake.scale+0.008;
    stars3Group.destroyEach();
    score = score+5;
  }

  if(dots2Group.isTouching(snake)){
    snake.scale = snake.scale+0.008;
    dots2Group.destroyEach();
    score = score+5;
  }

  if(snake.collide(extraSnake)){
   chance = chance-1;
  }

  if(snake.collide(extra1_snake)){
    chance = chance-1;
    }

  if(snake.collide(extra2_snake)){
    chance = chance-1;
    }

  if(snake.collide(extra3_snake)){
    chance = chance-1;
    }

  if(snake.collide(extra4_snake)){
    chance = chance-1;
    }
    
    if(chance === 0){
      gameState = "end";
    }

    //if(score%100===0){
      //snake.velocityX = snake.velocityX+2;
      //snake.velocityY = snake.velocityY+2;
    //}
  }
  else if(gameState === "end"){
    snake.destroy();
   // bg.x = displayWidth/2+500;
    //bg.y = displayHeight/2+200;
   // bg.scale = 2;
    stars1Group.destroyEach();
    stars2Group.destroyEach();
    stars3Group.destroyEach();
    stars4Group.destroyEach();
    dots1Group.destroyEach();
    dots2Group.destroyEach();
    console.log(bg.x)
    console.log(bg.y)
   // bg1 = createSprite(displayWidth/2,displayHeight/2)
   // bg1.addImage(backgroundImg)
    textSize(30);
    text("Your final score is "+score,displayWidth/2,displayHeight/2);
  }

  text("Chance : "+chance,snake.x,snake.y)
  console.log(gameState);

  //console.log(snake.scale);


  extraSnake.setCollider("circle",0,0,50);
  extra1_snake.setCollider("circle",0,0,50);
  extra2_snake.setCollider("circle",0,0,50);
  extra3_snake.setCollider("circle",0,0,50);
  extra4_snake.setCollider("circle",0,0,50);

}

function stars1(){
  if(frameCount%50 == 0 || frameCount%90 == 0){
    stars = createSprite(random(-1200,1000),random(-1200,1000),10,10);
    stars.addImage(starsimg);
    stars.scale = 0.45;
    stars1Group.add(stars)
  }

  if(frameCount%40 == 0 || frameCount%35 == 0){
    stars2 = createSprite(random(-3000,4000),random(-3000,4000));
    stars2.addImage(stars2img);
    stars2.scale = 0.25;
    stars2Group.add(stars2);
  }
}

function dots1(){
  if(frameCount%30 == 0){
    dots = createSprite(random(0,3000),random(0,3000),10,10);
    dots.addImage(dotsImg);
    dots.scale = 0.15;
    dots1Group.add(dots);
  }
}

function stars5(){
  if(frameCount%50 == 0 || frameCount%90 == 0){
    stars3 = createSprite(random(-1200,1000),random(-1200,1000),10,10);
    stars3.addImage(starsimg);
    stars3.scale = 0.45;
    stars3Group.add(stars3)
  }

  if(frameCount%40 == 0 || frameCount%35 == 0){
    stars4 = createSprite(random(-3000,4000),random(-3000,4000));
    stars4.addImage(stars2img);
    stars4.scale = 0.25;
    stars4Group.add(stars4);
  }
}

function dots2(){
  if(frameCount%30 == 0){
    dots3 = createSprite(random(0,3000),random(0,3000),10,10);
    dots3.addImage(dotsImg);
    dots3.scale = 0.15;
    dots2Group.add(dots3);
  }
}
