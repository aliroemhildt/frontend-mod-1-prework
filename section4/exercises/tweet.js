/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }

  addLikes(numberNewLikes) {
    this.numberOfLikes = this.numberOfLikes + numberNewLikes;
  }

  addComment(newComment) {
    this.comments.push(newComment);
  }

};

var tweet1 = new Tweet('Ali','hello world','1:24pm',4,['hi']);
console.log(tweet1);

tweet1.addLikes(4);
console.log(tweet1);

var tweet2 = new Tweet('Mike', 'Whats up?', '10:30am',7,['not much, you?','a lot']);
console.log(tweet2);

tweet2.addComment('the sky');
console.log(tweet2);

tweet3 = new Tweet('Beyonce', 'New album coming soon', '11:22pm',65000,['omg', 'yes!']);
console.log(tweet3);

tweet3.addLikes(20000);
tweet3.addComment('I cant wait!!!');
console.log(tweet3);
