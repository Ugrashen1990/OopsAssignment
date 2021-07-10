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
