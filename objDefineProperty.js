var obj = {counter:0};
Object.defineProperty(obj, "reset", {
    get : function() {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
    get : function() {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
    get : function() {this.counter--;}
});
Object.defineProperty(obj, "add", {
    get : function() {this.counter +=value;}
});
Object.defineProperty(obj, "subtract", {
    get : function() {this.counter -= value;}
});
   
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