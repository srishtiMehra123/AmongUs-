var database;
var pc, gs=0;
var game;
var player;
var form;
var allPlayers 
var finishedPlayers=0
var passedFinished
var silverImage , bronzeImage , goldImage 

var cars
var car1 , car2,car3 , car4 ;

var rand;

function preload() {
car_image1=loadImage("images/car1.png")
car_image2=loadImage("images/car2.png")
car_image3=loadImage("images/car3.png")
car_image4=loadImage("images/car4.png")
groundImage=loadImage("images/ground.png")
trackImage=loadImage("images/track.jpg")

silverImage=loadImage("images/silver.png")
goldImage=loadImage("images/gold.png")
bronzeImage=loadImage("images/bronze.png")
}

function setup() {
    createCanvas(displayWidth, displayHeight);

    database = firebase.database();
    rand = Math.round(random(1,4))
    console.log(rand)
    console.log(database)
    game = new Game()
    game.getState();
    game.start();

}

function draw() {
     

    if (pc === 4 && finishedPlayers===0) {
        game.update(1); //gamestate 0=wait , 1=playing , 2=ending 


    }

    if (gs === 1) {
        clear();
        game.play()
    }

    if(finishedPlayers===4){
      game.update(2);
    }

    if (gs===2 && finishedPlayers===4){
        background(200, 200, 255)
        game.displayRanks();
      
    }
}