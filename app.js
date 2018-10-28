var myName = 'Max';
// myName = 28;
var myAge = 27;
// myAge = 'necato';
var hasHobbies = false;
// hasHobbies = 1;
var myRealAge;
myRealAge = 27;
// myRealAge = '27';
//array
var hobbies = ["Cooking", "Sports"];
hobbies = [100];
// console.log(hobbies[0]);
//tuples
var address = ["Superstreet", 99];
//enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
//any
var car = "BMW";
car = { brand: "BMW", series: 3 };
