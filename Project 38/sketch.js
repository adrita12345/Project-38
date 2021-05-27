

var ground, groundImage, bow, bowImage,b1, b1Image,  b2,               b2Image,  b3, b3Image, b4, b4Image, b5, b5Image, arrow,             arrowImage;

var score;


function preload(){
         groundImage = loadImage("background0.png");
         bowImage = loadImage("bow0.png");
         b1Image = loadImage("pink_balloon0.png"); 
         b2Image = loadImage("blue_balloon0.png"); 
         b3Image = loadImage("green_balloon0.png"); 
         b4Image = loadImage("yellow_balloon0.png");
         b5Image = loadImage("red_balloon0.png"); 
         arrowImage = loadImage("arrow0.png");
}

function setup() {
  
        createCanvas(displayWidth, displayHeight);
        score = 0;
  
  balloonGroup = new Group();
  
  textSize(20);
  fill("black");
   text("Score: "+ score, 370, 30);
  text.visible = true;

  
  
         b1Group = new Group();
          b2Group = new Group();
          b3Group = new Group();
          b4Group = new Group();
          b5Group = new Group();
          arrowGroup = new Group();
  
  
        ground = createSprite(250, 130, displayWidth, displayHeight/2);
        ground.addAnimation("ground1", groundImage);
        ground.scale = 4;
        ground.velocityX = -5;

        bow = createSprite(900, 100, 20, 80);
        bow.addAnimation("bow1", bowImage);
        bow.scale = 2;
  
 
        
  
       
}

function draw() {
  
  
        background("white");

        bow.y = mouseY ;
  
        camera.position.x = displayWidth/4;
  
        
  
        if (keyWentDown ("space")){
            var temp_arrow = createArrow();
            temp_arrow.addAnimation('arrow1', arrowImage);
            temp_arrow.y = bow.y; 
            temp_arrow.x = 890;
          
            }


        if(ground.x<300){
          ground.x = ground.width;
        }

     
  
   if (arrowGroup.isTouching(balloonGroup)){
    balloonGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score+3;
       }      
  
 
      balloons();
    
        drawSprites();
  
  text("Score: "+score, 370, 30);
  score = score ; 
   
  
  
  
   
         
  
  
}

function createArrow (){
        arrow = createSprite(360, 100, 5, 10);
        arrow.velocityX = -10; 
        arrow.scale = 0.5;
        arrow.lifetime = 800;
        arrowGroup.add(arrow);
        return arrow;
        
}  


function balloons (){
  if(World.frameCount%100 === 0){
    balloon = createSprite(-100, 200, 20, 20);
    
    
    r= Math.round(random(1,5));
    if(r===1){
     balloon.addImage(b1Image);
      balloon.scale = 1.2;
    } else if(r===2){
      balloon.addImage(b2Image);
      balloon.scale = 0.2;
    } else if(r===3){
     balloon.addImage(b3Image);
      balloon.scale = 0.2;
    } else if(r===4){
     balloon.addImage(b4Image);
      balloon.scale = 0.06;
    } else if(r===5){
      balloon.addImage(b5Image);
      balloon.scale = 0.2;
    } 
     balloon.y = Math.round(random(40, 450));
     
    balloon.velocityX = 6;
    balloon.setLifetime = 120;
    
    balloonGroup.add(balloon);
  
}
  
}