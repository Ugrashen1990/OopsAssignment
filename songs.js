//creat a constructor called song() with at least 5 property and 2 behavior and instantiate 3 times.

function song(name, duration, singer, writer, music){
    this.name = name,
    this.duration = duration,
    this.singer = singer,
    this.writer = writer,
    this.music = music;
    
    this.start = function(){
        console.log(this.name + " is sang by " + this.singer);
    }
    this.write = function(){
        console.log(this.name + " written by " + this.writer);
    }
    
}

var song1 = new song( "vande mataram", 120, "lata mangeskar", "Bankimchandra chatterji", "someone");
//console.log(song1.name);
var song2 = new song("jana gana mana", 180, "lata mangeskar","ravindranath taigore", "someone");
//console.log(song2.singer);
var song3 = new song("rang de basanti", 300, "udit narayan","ram prasad bismila", "A R Rahaman");
//console.log(song3.music);
console.log(song1, song2, song3);
song1.start();
song1.write();
song2.start();
song2.write();
song3.start();
song3.write();
