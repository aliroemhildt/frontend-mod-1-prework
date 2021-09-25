/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog {

};

var goldenRetriever = new Dog();
console.log(goldenRetriever);

var pug = new Dog();
console.log(pug);

// Prompt 2: Snack
class Snack {

};

var granolaBar = new Snack();
console.log(granolaBar);

var chips = new Snack();
console.log(chips);

// Prompt 3: Shirt
class Shirt {

};

var tShirt = new Shirt();
console.log(tShirt);

var sweatshirt = new Shirt();
console.log(sweatshirt);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class Dog2 {
  constructor() {
    this.color = 'brown';
    this.age = 5;
    this.gender = 'Male';
  }
};

var chocLab = new Dog2();
console.log(chocLab);

// Prompt 2: Snack
class Snack2 {
  constructor() {
    this.price = 1.5;
    this.calories = 250;
    this.type = 'fruit';
  }
};

var apple = new Snack2();
console.log(apple);

// Prompt 3: Shirt
class Shirt2 {
  constructor() {
    this.size = 'L';
    this.color = 'blue';
    this.price = 30;
  }
};

var sweater = new Shirt2();
console.log(sweater);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Dog3 {
  constructor(favToy, name, isTrained) {
    this.favToy = favToy;
    this.name = name;
    this.isTrained = isTrained;
  }
};

var poodle = new Dog3('bone', 'Wallace', true);
console.log (poodle);

var stBernard = new Dog3('tennis ball', ' Gary', false);
console.log(stBernard);

// Prompt 2: Snack
class Snack3 {
  constructor(price, calories, isHealthy) {
    this.price = price;
    this.calories = calories;
    this.isHealthy = isHealthy;
  }
};

var oreos = new Snack3(2, 300, false);
console.log(oreos);

var smoothie = new Snack3(7, 350, true);
console.log(smoothie);

// Prompt 3: Shirt
class Shirt3 {
  constructor(store, size, pattern) {
    this.store = store;
    this.size = size;
    this.pattern = pattern;
  }
};

var buttonUp = new Shirt3('Target', 'M', 'striped');
console.log(buttonUp);

var longSleeve = new Shirt3('Zara', 'XL', 'solid');
console.log(longSleeve);
