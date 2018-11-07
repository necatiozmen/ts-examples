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

const countdown = (start: number) : void => {
    console.log(start);
}

// &&

const countdown = (start: number = 10) : void => {
    console.log(start);
}



//function types
//function alacagi argument ve return edeecegi typelari belirleyebiliriz.
let myMultiply: (a: number, b: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));



//objects
//objeclerde siralama onemli olmadigi icin property namelerin uyusmasi gerekiyor.
let userData: { name: string, age: number } = {
    name: 'max',
    age: 27
};

// userData = {
//     a: "Hello",
//     b: 22
// }


// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data:[100, 3.99, 10],
    output: function(all:boolean): number[] {
        return this.data;
    }
}

// class --> protected typelar 

class Person { 
    name: string;
    private type: string; // means accessible from inside
    protected age: number = 27;

    constructor(name: string, public username:string) {
        this.name = name;
    }

    printAge() {
        console.log(this.age);
    }

    setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

const person = new Person("Max", "max");
console.log(person.name, person.username);
person.printAge(); // age protected oldugu icin person tarafindan ulasilabilir
person.setType("cool guy"); // calismaz cunku type private


class Plant {
    private _species:string = "Default";

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = "Default";
        }
    }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "AB"; 
console.log(plant.species);// bunu yazar 
plant.species = "Green Plant"; 
console.log(plant.species); // yazmaz set in icindeki kosula bakiyor.


// class instansiate etmeden disaridan ulasilmasina sagalamak icin static kullanildi
class Helpers { 
    static PI: number = 3.14;
    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

//Abstract class ==> cannot instanstioa directly. You have to inherit from them. Bunu anlatabilirsin
abstract class Project {
    projectName: string = "Default";
    budget: number;

    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}
//direk olarak Project icinden methodu deger yollayip cagiramiyoruz

// burada extend ediyoruz
class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);


//Singletons bunu anlatabilirsin
class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public name: string) {} // burada private static verilince singleton oluyor

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}
//Ornegin amac disaridan instance tanimlandirilmasi izin vermiyor. 
let wrong = new OnlyOne('The Only One'); // zaten getInstance icinde instatiated edildigi icin burasi hata verir
let right = OnlyOne.getInstance(); // bu calisir tanimlanmis 

//readyonly
right.name = "Something else"  // satir 184 readyonly eklersek readonly olur
// private constructor(public readonly name: string) {} 





//EXERCISES
// Exercise 1
function Car(name) {
    this.name = name;
    this.acceleration = 0;

    this.honk = function() {
        console.log("Toooooooooot!");
    };

    this.accelerate = function(speed) {
        this.acceleration = this.acceleration + speed;
    }
}
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);



// Exercise 1 - Class
class Car {
    name: string;
    acceleration: number = 0;

    constructor(name: string) {
        this.name = name;
    }

    honk() {
        console.log("Toooooooot!");
    }

    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }
}

const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(20);
console.log(car.acceleration);



// Exercise 2
var baseObject = {
    width: 0,
    length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function() {
    return this.width * this.length;
};
console.log(rectangle.calcSize());

////////////////////
class BaseObject {
    width = 0;
    length = 0;
}

class Rectangle extends BaseObject {
    calcSize() {
        return this.width * this.length;
    }
}

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());




// Exercise 3
var person = {
    _firstName: ""
};
Object.defineProperty(person, "firstName", {
    get: function () {
        return this._firstName;
    },
    set: function (value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    },
    enumerable: true,
    configurable: true
});
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);

//////////////////////
class Person {
    private _firstName: string = "";

    get firstName() {
        return this._firstName;
    }

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        } else {
            this._firstName = "";
        }
    }
}

const person = new Person();
