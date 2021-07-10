function ComplexNum(real, imaginary){
    this.real = real;
    this.imaginary= imaginary;

    this.addComplex = function(){
        this.real = ComplexNum1.real + ComplexNum2.real;
        this.imaginary = ComplexNum1.imaginary + ComplexNum2.imaginary;
        console.log(this.real + " + i" + this.imaginary);

    }
    this.subComplex = function(){
        this.real = ComplexNum1.real - ComplexNum2.real;
        this.imaginary = ComplexNum1.imaginary - ComplexNum2.imaginary;
        console.log(this.real + " + i" + this.imaginary);

    }
    this.mulComplex = function(){
        this.real = ComplexNum1.real * ComplexNum2.real;
        this.imaginary = ComplexNum1.imaginary * ComplexNum2.imaginary;
        console.log(this.real + " + i" + this.imaginary);

    }
}
var ComplexNum1 = new ComplexNum(5, 6);
var ComplexNum2 = new ComplexNum(3, 5);
var ComplexNum3 = new ComplexNum(0, 0);
console.log(ComplexNum1.real);
console.log(ComplexNum2.real);
console.log(ComplexNum2.imaginary);
console.log(ComplexNum1.imaginary);
ComplexNum3.addComplex();
ComplexNum3.subComplex();
ComplexNum3.mulComplex();
