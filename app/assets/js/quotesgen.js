import {quotes} from "./quotes.js";

const quoteField = document.querySelector('.quoteField');


function shuffleQuotes(array) {
  let shuffledArray = array.slice(); // Create a copy of the array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const randomizedQuotes = shuffleQuotes(quotes);

if (quoteField) {
    new Typed(quoteField, {
      strings: randomizedQuotes,
      loop: true,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 2000
    });
}