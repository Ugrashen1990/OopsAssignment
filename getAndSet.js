
//getter
var emp = {
            name: "ugrashen",
            city: "patna",
            salary:60500,
            get empCity(){
                return this.city;
            },
            get empName(){
                return this.name;
            },
            get empSalary(){
                return this.salary;
            }
};

console.log(emp.empCity);
console.log(emp.empName);
console.log(emp.empSalary);

console.log('this is setter=========');
//setter
var emp = {
    name: "ugrashen",
    city: "patna",
    salary:60500,
    set empName(empName){
        this.name = empName;
    },
    set empCity(empCity){
        this.city = empCity;
    },
    set empSalary(empSalary){
        this.salary = empSalary;
    }
    
};
emp.empName = "Dev.ugrashen";
emp.empCity = "Bangalore";
emp.empSalary = 70500;

console.log(emp.name);
console.log(emp.city);
console.log(emp.salary);

// playing with counter
var obj = {
    counter:0,
    get reset(){
        this.counter = 0;
    },
    get increment(){
        this.counter++;
    },
    get decrement(){
        this.counter--;
    },
    set add(value){
        this.counter += value;
    },
    set subtract(value){
        this.counter -= value;
    }
};
obj.reset;
console.log(obj.counter);
obj.add = 5;
console.log(obj.counter);
obj.subtract =1;
console.log(obj.counter);
obj.increment;
console.log(obj.counter);
obj.decrement;
console.log(obj.counter);