const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var b1, b2, b3;
var backgroundImg;
var c1, c2;
var trainSound , crashSound ; 
var r1 ;
var flag ;


function preload() {
    backgroundImg = loadImage("images/bg.jpg");
    trainSound =  loadSound("sound/train.mp3");
    crashSound = loadSound("sound/train_crossing.mp3");
}

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600, height, 1200, 20);
    b1 = new Boggie(50,170,50,50);
    b2 = new Boggie(150,170,50,50);
    b3 = new Boggie(250,170,50,50);
     
    c1 = new Chain(b1.body , b2.body);
    c2 = new Chain(b2.body , b3.body);

    r1 = new Rock(1100,200,100,100); 


}

function draw() {

    background(backgroundImg);




    Engine.update(engine);

    ground.show();
    b1.show();
    b2.show();
    b3.show();
    c1.show();
    c2.show();
    r1.show();

    var collision = Matter.SAT.collides(b3.body, r1.body);
    if (collision.collided) {
        flag = 1;
    }
if (flag === 1 ){
    textSize(30);
    stroke(3);
    fill("blue");
    text("Crash",500,200);
    crashSound.play();
}

}

function keyPressed() {
    if(keyCode === RIGHT_ARROW ){
        Matter.Body.applyForce(b3.body, {x:b3.body.position.x,y:b3.body.position.y}, {x:0.5 , y:0});
        trainSound.play();
    }




}



