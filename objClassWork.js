
// Store & display 5 employee details with 5 properties 
//and 2 behaviours using object constructor.


var emp1 ={
    id:101,
    name:"kunal",
    age:28,
    gender:"Male",
    salary:50000,
    showRecords:function(){
        console.log(this.id, this.name,this.age,this.gender, this.salary);
    },
    work:function(){
        console.log(this.name, " is working in HR department");

    },
    

};
var emp2 ={
    id:102,
    name:"suman",
    age:27,
    gender:"female",
    salary:60000,
    showRecords:function(){
        console.log(this.id, this.name,this.age, this.gender, this.salary);
    },
    work:function(){
        console.log(this.name, " is working in It department");

    },
};
var emp3 ={
    id:103,
    name:"vikash",
    age:45,
    gender:"Male",
    salary:75000,
    bonus:0,
    showRecords:function(){
        console.log(this.id, this.name, this.salary);
    },
    work:function(){
        console.log(this.name, " is working in HR department");

    },

};
var emp4 ={
    id:104,
    name:"nishant",
    age:28,
    gender:"Male",
    salary:65000,
    bonus:0,
    showRecords:function(){
        console.log(this.id, this.name, this.salary);
    },
    work:function(){
        console.log(this.name, " is working in HR department");

    },


};
var emp5 ={
    id:105,
    name:"priya",
    age:25,
    gender:"female",
    salary:55000,
    bonus:0,
    showRecords:function(){
    console.log(this.id, this.name, this.salary);
},
work:function(){
    console.log(this.name, " is working in it department");

},

};

console.log(emp3.name);
console.log(emp3.salary);
emp1.showRecords();
emp1.work();
emp2.showRecords();
emp2.work();
emp3.showRecords();
emp3.work();
emp4.showRecords();
emp4.work();
emp5.showRecords();
emp5.work();


//creat a constructor called song() with at least 5 property and 2 behavior and instantiate 3 times.

function song(name, duration, singer, writer, music){
    this.name = name,
    this.duration = duration,
    this.singer = singer,
    this.writer = writer,
    this.music = music;
    
    start = function(){
        console.log(this.name + "is sang by" + this.singer);
    }
    write = function(){
        console.log(this.name + "written by" + this.writer);
    }
    
}

var song1 = new song( "vande mataram", 120, "lata mangeskar", "Bankimchandra chatterji", "someone");
console.log(song1.name);
var song2 = new song("jana gana mana", 180, "lata mangeskar","ravindranath taigore", "someone");
console.log(song2.singer);
var song3 = new song("rang de basanti", 300, "udit narayan","ram prasad bismila", "A R Rahaman");
console.log(song3.music);


//part 5 Employee

function Employee(id, name, salary){
    this.id = id,
    this.name = name,
    this.salary = salary;

    this.details = function(){
    console.log("the salary of" + this.name + "is" + this.salary);
    }
    this.bonus = function(){
    console.log(this.name + "will be get extra bonus");
    }
    
}
var emp1 = new Employee(101, "arvind", 56000);
var emp2 = new Employee(102, "kunal",70000);
var emp3 = new Employee(103, "shishupal", 75000);
console.log(emp1, emp2, emp3);
emp1.details();
emp2.bonus();
emp2.details();

// 6 clock

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
console.log(clock1.getHours());
console.log(clock1.getMinutes());
console.log(clock1.getSeconds());



