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
    this.tick = function(){
        this.seconds++;
        if(this.seconds==60){
            this.minutes++;
            this.seconds=0;
        }
        if(this.minutes==60){
            this.hours++;
            this.minutes = 0;
        }
        if(this.hours==24){
            console.log('it completes a new day');
        }
    }
    this.now = function(){
        if(this.hours<10){
            this.hours = "0" +this.hours;
        }
        if(this.minutes<10){
            this.minutes = "0" + this.minutes;
        }
        if(this.seconds<10){
            this.seconds = "0"+this.seconds;
        }
    }
    /*
    this.tickDown = function(){
        if(this.seconds==00){
        this.seconds=59;
            if(this.seconds<=59){
                this.seconds--;
            }
            
        }
    }*/

    
    
}


var clock1 = new clock(23, 59, 59);

clock1.showtime();
clock1.tick();

clock1.now();
//clock1.tick();
//clock1.tick();
clock1.showtime();
//clock1.tickDown();
//clock1.showtime();

