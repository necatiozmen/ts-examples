let myName: string= 'Max';
// myName = 28;

let myAge: number= 27;
// myAge = 'necato';

let hasHobbies = false;
// hasHobbies = 1;

let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';

//array
let hobbies: any[]= ["Cooking", "Sports"];
hobbies = [100];
// console.log(hobbies[0]);

//tuples
let address: [string, number] = ["Superstreet", 99];

//enum
enum Color {
    Gray,
    Green,
    Blue
}

let myColor: Color = Color.Green;

//any
let car: any = "BMW";
car = {brand:"BMW", series:3};

//functions
function returnMyname(): string {
    return myName;
}

//void --> if there is nothing to return 
function sayHello(): void {
    console.log("hello!");
}

// argument types
function multiply(value1: number, value2: number): number{
    return value1 * value2;
}

//function types
let myMultiply: (a: number, b: number) => number;
myMultiply = sayHello;
myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
