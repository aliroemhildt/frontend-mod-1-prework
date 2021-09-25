// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//Declare a function called buildABear that takes five arguments - name, age, fur, clothes, specialPower
function buildABear(name, age, fur, clothes, specialPower) {
//Declare a variable called greeting that is assigned to a string that uses interpolation to include the name argument
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
//Declare a variable called demographics that is assigned to an array that includes the name and age arguements
  var demographics = [name, age];
//Declare a variable called powerSaying that is assigned to a string that uses concatenation to include the specialPower argument
  var powerSaying = "Did you know that I can " + specialPower + " ?";
//Declare a variable called builtBear that is assigned to an object with the following key/value pairs:
//basicInfo, assigned to the demographics variable
//clothes, assigned to the clothes argument
//exterior, assigned to the fur argument
//cost, assigned to the value 49.99
//sayings, assigned to an array that includes the greetings argument, the powerSaying argument, and the string "Goodnight my friend!"
//isCuddly, assigned to the value true
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };

//return the builtBear object
  return builtBear
}

//create a new instance of the builtBear object with the following arguments - name = 'Fluffy', age = 4, fur = 'brown', clothes = ['pants', 'jorts', 'tanktop'], specialPower = 'give you nightmares'
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
//create a new instance of the builtBear object with the following arguments - name = 'Sleepy', age = 2, fur = 'purple', clothes = ['pajamas', 'sleeping cap'], specialPower = 'sleeping in'
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
//Create a function called fizzBuzz that takes three arguements
//The function should include a for loop that iterates from 0 through the given range
//The function should include an if/elseif/else statement that meets the following criteria:
function fizzBuzz(num1, num2, range) {
  for (var i = 0; i <= range; i++) {
//If the remainder of the counter i divided by num1 is exactly equal to 0 and the remainder of the counter i divided by num2 is exactly equal to 0, log the string 'fizzbuzz' to the console
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
//If the first condition is false and the remainder of the counter i divided by num1 is exactly equal to 0, log the string 'fizz' to the console
    } else if (i % num1 === 0) {
      console.log('fizz');
//If the first two conditions are false and the remainder of the counter i divided by num2 is exactly equal to 0, log the string 'buzz' to the console
    } else if (i % num2 === 0) {
      console.log('buzz');
//If all of the conditions are fale, log the value of the counter i to the console
    } else {
      console.log(i);
    }
  }
}

//call the fizzBuzz function with the arguments 3, 5, 100
fizzBuzz(3, 5, 100);
//call the fizzBuzz function with the arguments 5, 8, 400
fizzbuzz(5, 8, 400);
