//Created 2 objects car1, car2 with 8 properties 
//and 3 behaviours using object literal.


var car1 = {
    name:"Toyota Fortuner.",
    model:2018,
    colour:"silver",
    powerSteering:"yes",
    seatbeltsReminder:"yes",
    rps:2,                                     //reverse parking sensors
    speed:0,
    autoEmBr:"no",                             //auotmatic emergency breaking

     
    maxSpeed:function() {
        this.speed++;
        
    },
    carName:function(){
        console.log("your are slelcted", this.name);
    },
    iscolour1:function(){
        console.log(this.colour, ' is the colour of toyota fortuner.');
    }
    
};

var car2 = {
    name:"Hyundai Creta.",
    model:2019,
    colour:"red",
    powerSteering:"yes",
    seatbeltsReminder:"yes",
    rps:1,                                     //reverse parking sensors
    speed:0,
    autoEmBr:"yes",                             //auotmatic emergency breaking
    carName:function(){
        console.log("your are slelcted", this.name);
    },
    iscolour2:function(){
        console.log(this.colour, " is the colour of hyundai Creta.");
    }

};
car1.maxSpeed();
car1.carName();
car1.iscolour1();
car2.carName();
car2.iscolour2();

console.log("car1 model is " + car1.model);
console.log("car2  mode is " +car2.model);
