const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
     getBackgroundImg();
     backgroundImg = loadImage("sunrise1.png")
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    background(backgroundImg);
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
    var responce =  await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    var rjson = await responce.json();

    var dtime = rjson.datetime;
    var hour =  dtime.slice(11,13);

    if(hour >= 11 && hour <= 16){
        bg = "sunset11.png";

    }
    else{
        bg = "sunset12.png";
    }
    backgroundImg = loadImage(bg);
   

    // write code to fetch time from API
    
    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
