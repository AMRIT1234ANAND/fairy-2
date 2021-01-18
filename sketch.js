var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 550);

	// fairyVoice.play();
	fairyVoice.play();
	fairy = createSprite(130, 320);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30,{isStatic:false});
	star.addImage(starImg);
	star.scale = 0.2;
	engine = Engine.create();
	world = engine.world;
	
	starBody = Bodies.circle(650 , 30 , 5 ,{restitution:0.5, isStatic:true});
	World.add(world, starBody);
	Engine.run(engine);
	
	//fairy.debug=true;
}


function draw() {
  background(bgImg);
  star.x=starBody.position.x;
  star.y=starBody.position.y;
  if(starBody.position.y>=300){
Matter.Body.setStatic(starBody,true)
}
 
fairy.velocityX=0;
  //star.velocityY=0;
keyPressed();
  drawSprites();

}

function keyPressed() {
	//write code here
	if(keyDown(LEFT_ARROW)){
		fairy.velocityX=-3;

	}
	if(keyDown(RIGHT_ARROW)){
		fairy.velocityX=3;

	}
	if(keyDown(DOWN_ARROW)){
		Matter.Body.setStatic(starBody,false)
 
	}
}

