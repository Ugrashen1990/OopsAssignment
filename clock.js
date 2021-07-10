function clock(hours, minutes, seconds){
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.setClock = function(seconds){
        this.hours = parseInt(seconds/3600);
       
        this.minutes = parseInt((seconds - (this.hours*3600))/60);
        this.seconds = seconds-(this.hours*3600)-(this.minutes*60);
    }
    this.showtime = function(){
        console.log(this.hours+ ':' +this.minutes+ ':' +this.seconds)
    }
    
    this.getHours = function(){
        return this.hours;
    }
    this.getMinutes = function(){
        return this.minutes;
    }
    this.getSeconds = function(){
        return this.seconds;
    }
    this.setHours = function(hours){
        this.hours = hours;
    }
    this.setMinutes = function(minutes){
        this.minutes = minutes;
    }
    this.setSeconds = function(seconds){
        this.seconds = seconds;
    }
}


var clock1 = new clock(10, 15, 45);
clock1.setClock(3700);
clock1.showtime();
clock1.setHours(15);
clock1.setMinutes(70);
clock1.setSeconds(120);
console.log(clock1.getHours());
console.log(clock1.getMinutes());
console.log(clock1.getSeconds());
