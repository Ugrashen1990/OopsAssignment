//part 5 Employee

function Employee(id, name, salary){
    this.id = id,
    this.name = name,
    this.salary = salary;

    this.details = function(){
    console.log("the salary of " + this.name + " is " + this.salary);
    }
    this.bonus = function(){
    console.log(this.name + " will be get extra bonus");
    }
    this.raiseSalary = function(percent){
        //var increment = 0;
        
        this.salary += (this.salary*percent)/100;
    }
}
var emp1 = new Employee(101, "arvind ", 56000);
var emp2 = new Employee(102, "kunal ",70000);
var emp3 = new Employee(103, "shishupal ", 75000);
emp1.raiseSalary(emp1.salary, 50);
emp3.raiseSalary(emp3.salary, 100);
//console.log(emp1, emp2, emp3);

emp1.details();
//emp2.bonus();
//emp2.details();
emp3.details();
