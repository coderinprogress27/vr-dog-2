
class Food{
    constructor(){
        this.foodstock 
        this.lastFed
         this.milk_bottle
this.milk_bottle = loadImage("images/Milk.png")
        
//getfoodstock(){}
//updatefoodstock(){}
//deductfoodsock(){}
        
    }

    display(){

      if(lastFed>=12){
    text("Last fed :"+ lastFed%12 + "PM", 350,30)
      }else if(lastFed==0){
        text("last fed : 12 AM",350,30);
      }else{
        text("last fed :"+ lastFed + "AM",350,30)
      }
    }
}