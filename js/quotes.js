const quotes = [
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison ",
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky ",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: " Steve Jobs ",
  },
  {
    quote:
      "If you want to go fast, go alone. If you want to go far, go together.",
    author: " African Proverb  Edison ",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt ",
  },
  {
    quote: "Don't watch the clock, do what it does. Keep going.",
    author: " Sam Levenson",
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: " Peter Drucker ",
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
  {
    quote: "A journey of a thousand miles begins with a single step.",
    author: "Lao Tzu ",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill ",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
