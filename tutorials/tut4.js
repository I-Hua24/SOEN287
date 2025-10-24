quote="Click the button to generate a motivational quote!";
document.getElementById("quote").innerHTML=quote;
function newQuote(){
    var randomNumber = Math.floor(Math.random()*(quotes.length));
    document.getElementById("quote").innerHTML=quotes[randomNumber];
}   


const quotes = [
  "Believe you can and you're halfway there.",
  "Push yourself, because no one else is going to do it for you.",
  "Success is what comes after you stop making excuses.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream it. Wish it. Do it.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Great things never come from comfort zones.",
  "Wake up with determination. Go to bed with satisfaction.",
  "It always seems impossible until it’s done.",
  "Discipline is the bridge between goals and accomplishment."
];
