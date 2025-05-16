let quotes = [
    "Tell me, you fool. If I continue to regress, will I ever get to see you again? - Yoo Joonghyuk",
    "Ultimately, every human is their own writer.",
    "「 There are three ways to survive in a ruined world. I have forgotten some of them now. However, one thing is certain: you who are currently reading these words will survive.」",
    "「The moments that passed like nothing became precious memories that returned.」",
    "「I won't give up on this life. So don't give up either. 」",
    "Really? This is the end?",
    "As long as they read something, humans won't be lonely. I probably wanted to believe this.",
    "The gaps in the black print. My own little snow garden lay in between the letters. This space, which was too small for someone to go into, was a perfect place for a child who liked to hide. Every time a pleasant sound was heard, the letters stacked up like snow.",
    "「Look around you and try to live somehow!」",
    "「 The magnitude of the consciousness determines the degree of existence, making it possible for the smallest being to see the greatest universe. 」",
    "[ Some stories are read quickly and some are read slowly. ]",
    "Someone was left and someone was leaving. No matter what was chosen, everyone would eventually reach their end.",
    "...Every story has a value. It is a story that is interesting to some people and salvation for others.",
    "If I was really a god, then I was the most incompetent god in the world. The most helpless god in the world who knew everything but couldn't explain anything.",
    "I can't die here." ,
    "There is almost nothing that I can do in here. As long as I'm here, I'll always remain as a simple 'reader'.",
    "「 Release your hand and get lost you damn son of a bitch 」",
    "「 There is a beginning in existence, so the smallest is the greatest. 」",
    "「 The magnitude of the consciousness determines the degree of existence, making it possible for the smallest being to see the greatest universe. 」",
    "「Look around you and try to live somehow!」",
    "「The moments that passed like nothing became precious memories that returned.」",
    "This world, for the most part, is fiction. We fabricate it, exaggerate it, and neatly hide the parts that are inconvenient to us.",
    "A lie is an exceptional form of Love!",
    "I am the embodiment of Amaterasu. I am what you call a 'God'.",
    "I realized that the world is all about money.",
    "HOLY CRAP YOUTUBE'S AMAZING! WHAT A PROGRESSIVE ERA WE LIVE IN!",
    "Life is like fortnite… at the end of the day even the winner goes back to the lobby🚬🐐",
    "When life gives you lemons, call them 'yellow oranges' and sell them for double the price.",
    "Anything that can go wrong, will go wrong, and at the worst possible time.",
    "Computers are like air conditioning, they become useless once you open Windows",
    "Whatever happens, happens",
];

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