/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Two examples are already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/


//-------------------
// PART 1: Animals: Array Syntax
//-------------------

// EXAMPLE: write code below that will log an array of animals.
// Store the array in a variable.
var animals = ["Zebra", "Giraffe", "Elephant"];
console.log(animals);

// EXAMPLE: Write code below that will log "Zebra" from the animals array
// YOUR CODE HERE
console.log(animals[0]);

// YOU DO: Write code below that will log the number of elements in array of
// animals from above.
console.log(animals.length);

// YOU DO: Write code that will reassign the last item in the animals
// array to "Gorilla"
animals[2] = "Gorilla";

// YOU DO: Write code that will add a new animal (type of your choice) to position 3.
animals.push("Horse");

// YOU DO: Write code that will log the String "Elephant" in the animals array
animals.push("Elephant");
console.log(animals[4]);

//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var food = ['avocado', 'egg', 'mango', 'bread'];

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(food.length);

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
food.push('broccoli');
console.log(food);

// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
food.pop();
console.log(food);

// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
food.push('apple');
food.push('cheese');
food.push('chocolate');
console.log(food);


// YOU DO: Remove the food that is in index position 0.
food.shift();

//-------------------
// PART 3: Where are Arrays used?
//-------------------

/*
Sometimes we need to hold on to multiple pieces of data, but have it grouped together in a list.
This is why programming languages have arrays!

One example of a web/mobile application that uses arrays is Instagram. Each user has a set of posts
associated with their account. Each post, is one of potentially many, that are grouped together in a list,
or, array.

The post itself likely has more complex data, but here's one way we can think about it:
*/

var posts = ["image at beach", "holiday party", "adorable puppy", "video of cute baby"];

// YOU DO: Think of a web application you commonly use. Where do you see LISTS utilized, where arrays
// may be storing data? Come up with 3 examples - they could be from different web applications or
// all from the same one.

// 1: Gmail - if your emails are grouped into different labels/inboxes, there would be a different array for each inbox with a specific set of emails.
var inbox = ['email1','email2','email3'];
var starred = ['email4', 'email5'];
var spam = ['email6','email7'];

// 2: Netfilx - For a TV show, all of the episodes are separated into different arrays for each season.
var season1 = ['S1E1','S1E2','S1E3','S1E4','S1E5'];

// 3: Amazon - your shopping cart on the amazon website could be an array. Each time you add an item to your cart, you add a new item to the array.
var shoppingCart = ['batteries','phone case','book'];


//-------------------
// Part 4: Don't let yourself forget everything from Section 2 of Pre-work
//-------------------

/*
YOU DO:
Using the variables defined below, write a program that will tell a user if they
will be able to call an Uber.

The user can call an uber if they have 15% battery remaining, or more. In this case, it doesn't matter
if the user has a charger at all, or what type.
The can call an uber if they have a charger and it is a car charger.

*/
var percentBatteryLeft = 12;
var hasCharger = true;
var chargerType = "car";

// Write your conditional here
// Check first condition: percentBatteryLeft is greater than or equal to 15
if (percentBatteryLeft >= 15) {
// If first condition is met, print the message 'You can call an uber!' to console
  console.log('You can call an uber!')
// If first condition is not met, check second condition: hasCharger is true and chargerType is equal to 'car'
}  else if (hasCharger && chargerType == "car") {
// If second condition is met, print the message 'You can call an uber!' to console
  console.log('You can call an uber!')
// If first and second conditions are not met, print the message 'Sorry, you can not call an uber...' to console
} else {
  console.log('Sorry, you can not call an uber...')
};

// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
