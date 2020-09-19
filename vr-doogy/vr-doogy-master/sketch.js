//Create variables here
var dogimage
var doghappyimage
var dog
var database
var foods
var foodstock
var feed_doogy
var ship_yummies
var FedTime
var lastFed
var foodobj
function preload()
{
  //load images here
dogimage=loadImage("images/dogImg.png")
doghappyimage=loadImage("images/dogImg1.png")
 
  
  
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database()
  foodstock=database.ref('Food')
foodstock.on("value",readStock)
dog = createSprite(400,300,50,50)
dog.addImage(dogimage)
dog.scale=0.23
foodobj = new Food()
feed_doogy = createButton("feed the doogy")
feed_doogy.position(220,20)
ship_yummies = createButton("click to ship dog food from mars")
ship_yummies.position(400,20)
feed_doogy.mousePressed(feeddog)
ship_yummies.mousePressed(addFoods)

}


function draw() {  
  background(46,139,87)
  drawSprites();
  //add styles here
  FedTime=database.ref('FedTime');
  FedTime.on("value",function(data){
  lastFed=data.val();
  })
textSize(15)
fill(255,255,254)
stroke(10)
foodobj.display();
}
function readStock(data){
  foods=data.val()
}
function writeStock(x){
  if(x===0){
    x=0
  }else{x=x-1}
  database.ref('/').update({
    Food:x
  })
}
function feeddog(){
  dog.addImage(dogimage)

  //foodobj.updateFoodStock(foodobj.getFoodStock()-1)
database.ref('/').update({
  Food:foods-1,
  FedTime:hour()
})
}
function addFoods(){
  foods++;
  database.ref('/').update({
    Food:foods
  })
}
