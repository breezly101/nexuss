// Define an array of quotes
const quotes = [
  "i accidentally muted the teacher",
  "my homework ate my dog",
  "oh the weather outside is rizzy",
  "school wifi is sus",
  "late to class again 💀",
  "now with more html",
  "omg i better not get iss for this 😭",
  "no ads!",
  "blocked!",
  "have you played eaglercraft?"
  "made by breezly",
  "carefully crafted",
  "skibidi",
  "press ctrl+shift+q+q for free money",
  "i dare you to rub a magnet on the side of your chromebook",
  "bruh",
  "forgot my charger",
  "teacher caught me playing games again",
  "unblocked",
  "thank you chatgpt for the code",
  "fortnite is cringe",
  "minecraft is goated",
  "goated edition",
  "best proxy",
  "how is this not blocked",
  "help",
  "school lunch is mid",
  "dont forget your homework"
];

// Function to change the quote
function changeQuote() {
  const quoteEl = document.getElementById("quote");
  let newQuote;
  do {
    newQuote = quotes[Math.floor(Math.random() * quotes.length)];
  } while (newQuote === quoteEl.innerText);
  quoteEl.innerText = newQuote;
}

// Add click event listener to change quote on click
document.getElementById('quote').addEventListener('click', changeQuote);
