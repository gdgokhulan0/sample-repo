class Calculator extends SimpleCalculator{
    constructor(x, y){
        super(x, y);
        this.x = x;
        this.y = y;
    }

    add(){
        //adds x and y
        return this.x+this.y;
    }
    sub(){
        //subtracts x and y
        return this.x-this.y;
    }
    mul(){
        return this.x*this.y;
    }
    divide(){
        return this.x/this.y;
    }
};

let calculator = new Calculator(10, 5);
console.log(calculator.add());
console.log(calculator.mul());
console.log(calculator.divide());
console.log(calculator.sub());
