function song(id, name, duration){
    this.id = id,
    this.name = name,
    this.duration = duration,
    this.completeDetails = function(){
        return this.id + "" + this.name + "" + this.duration;
    },
    this.play = function(){
        console.log(this.name + "song is playing");
    }
}
var mySong = new song(123, "jana gana mana",1);
console.log(mySong.completeDetails());
mySong.play();

mySong.pause = function(){
    console.log(this.name + "song is psuse");

}
mySong.pause();