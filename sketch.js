const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bird, slingshot;
var backgroundImage, bg;
var gameState;

var ground1, ground2, ground3, ground4, ground5;
var box1 = [], box9 = [];
var box2 = [], box10 = [];
var box3 = [], box11 = [];
var box4 = [], box12 = [];
var box5 = [], box13 = [];
var box6 = [], box14 = [];
var box7 = [];
var box8 = [];

function preload(){
    getBgrndImage();
}
function setup(){
    createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(950,550,450,8);
    ground2 = new Ground(885,330,40,8);
    ground3 = new Ground(1015,330,40,8);
    ground4 = new Ground(810,460,40,8);
    ground5 = new Ground(1090,460,40,8)
    bird = new Hex(200, 300, 30, 30);
    slingshot = new SlingShot(bird.body, {x: 180, y: 200});

    gameState = "connected"

// Left pillar and Eight pillar
    var valYRLP = 500;
    for(var i = 0; i<=3; i = i + 1){
        box1[i] = new Box1(750,valYRLP,20,30);
        box2[i] = new Box1(1150,valYRLP,20,30);
        valYRLP = valYRLP - 40;
    }
// Middle building
    var valYMB = 500;
    for(var i = 0; i<=10; i = i + 1){
        box3[i] = new Box1(950,valYMB,20,30);
        valYMB = valYMB - 30;
    }

// Left and Right buildings
    var valYLRB = 500;
    for(var i = 0; i<=5; i = i + 1){
        box4[i] = new Box1(930,valYLRB,20,30);
        box5[i] = new Box1(970,valYLRB,20,30);
        box6[i] = new Box1(1000,valYLRB,20,30);
        box7[i] = new Box1(1030,valYLRB,20,30);
        box8[i] = new Box1(900,valYLRB,20,30);
        box9[i] = new Box1(870,valYLRB,20,30);
        box10[i] = new Box1(885,valYLRB-200,20,30);
        box11[i] = new Box1(1015,valYLRB-200,20,30);
        box12[i] = new Box1(810,valYLRB,20,30);
        box13[i] = new Box1(1090,valYLRB,20,30);
        valYLRB = valYLRB - 30;
    }


}



function draw(){
    if(backgroundImage)
        background(backgroundImage/*0*/);

    for(var i = 0; i<=3; i = i + 1){
        box1[i].display();
        box2[i].display();
    }
    for(var i = 0; i<=10; i = i + 1){
        box3[i].display();
    }
    for(var i = 0; i<=5; i = i + 1){
        box4[i].display();
        box5[i].display();
        box6[i].display();
        box7[i].display();
        box8[i].display();
        box9[i].display();
        box10[i].display();
        box11[i].display();
        box12[i].display();
        box13[i].display();
    }

    bird.display();
    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();
    ground5.display();
    slingshot.display();

    Engine.update(engine);
    text("x"+mouseX+"y"+mouseY,mouseX,mouseY);
}

function mouseDragged(){
    if(gameState === "connected"){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    if(gameState === "connected"){
    slingshot.fly();
    }
    gameState = "flying";
}

function keyPressed(){
    if (keyCode === 32){
        gameState = "connected";
        Matter.Body.setPosition(bird.body, {x:200, y:250})
        slingshot.attach(bird.body);
    }
}

async function getBgrndImage(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var hour = responseJSON.datetime.slice(11,13);

    if(hour < 18){
        bg = "images/day.jpg";
    }
    if(hour > 18){
        bg = "images/night.jpg"
    }

    backgroundImage = loadImage(bg);
}