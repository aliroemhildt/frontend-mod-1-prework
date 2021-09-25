## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?

   It felt more productive. Instead of a large block on my calendar to "work on section 4", I set small blocks for specific tasks like "section 4 part A" and "classProperties exercise". It kept me motivated to track the progress I was making on subtasks, instead of working for a few hours and not finishing my task of "complete prework section 4". My work schedule felt more manageable and my time estimates for tasks were more accurate.

1. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

   I used the tomato timer app and it really did help me to stay more focused while I was working. I realized I get easily distracted or burnt out when there is no end in sight, but thinking to myself "keep going for 10 more minutes, then you can take a breather" kept me much more focused and productive. It was also a lot easier to estimate the time a task would take when I broke down the prework into very small subtasks. For step 1, I set intentions like: section 4 part B reading/notes, objects exercise, methods notes and exercise, classes/instances reading/notes, classProperties exercise, etc. This made it feel like I was working towards a more manageable goal.

1. What is an Object, and how is it different from an Array in Javascript?

   An object is a complex data type that stores and organizes data that is all related somehow. It uses key-value pairs to link several different variables to the same object, and the interpreter recognizes that these key-value pairs are all related. This is different than an array, because the interpreter does not know that the elements in an array are related to each other when they are outside of the array.

1. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class
     * Array - there is only one piece of information that we are keeping track of, each name is linked to the same class
  * List of states and their capitals
     * Object - each capital is linked to a different state, so we want to create key-value pairs
  * List of things to pack for vacation
     * Array - this would be one list of items that are all going into one suitcase
  * Names of all the Instagram accounts I follow
     * Array - the list of accounts are all linked to the same "following" list
  * List of student names and their cohort
     * Object - each student name could be linked to one of many cohorts, so we want to create a key-value pairs
  * Ingredients and amount of each ingredient to bake a cake
     * Object - each ingredient will have a different amount, but are all used to make one cake. So, we want to use key-value pairs
  * All my favorite restaurants
     * Array - this is one single list of restaurant names

1. In this section, we talked about an `transaction item object`. It has keys that represent different properties a bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?

   In google calendar, adding an event could be considered a `calendar event object`. It is one event on your calendar that has several different values related to it. Some the object and key-value pairs might look like:

   ```Javascript
   var calendarEvent {
     name: 'Dinner with Taylor',
     timeStart: '6:00pm',
     timeEnd: '8:30pm',
     location: 'Denver Brewing Co.',
     calendarType: 'Personal',
     hasReminder: false
   };
   ```

1. What questions do you still have about classes and/or Objects?
   - should the name that follows "this." in the constructor method match the name of the parameter? In some examples they were the same and in some they were not. Is this just personal preference?
   - Not really a question, but I want to get some more practice/see more examples of naming for objects, classes, and methods
