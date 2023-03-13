//qoute
//getting qoute
const quotes = [
  {
    qouteText: "One today is worth two tomorrows.",
    author: "Benjamin Franklin",
  },
  {
    qouteText:
      "Prejudice is a burden that confuses the past, threatens the future and renders the present inaccessible.",
    author: "Maya Angelou",
  },
  {
    qouteText:
      "The secret of joy in work is contained in one word excellence. To know how to do something well is to enjoy it.",
    author: "Pearl Buck",
  },
  {
    qouteText:
      "When one tugs at a single thing in nature, he finds it attached to the rest of the world.",
    author: "John Muir",
  },
  {
    qouteText:
      "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.",
    author: "Isaac Asimov",
  },
];

// getting html element
const qouteText = document.getElementById("qoutetextwrapper");
const aut = document.getElementById("aut");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

// functioin for the qoute which will be load first time.
let count = 0;
const loadFrist = () => {
  qouteText.innerText = `${quotes[count].qouteText}`;
  aut.innerText = `${quotes[count].author}`;
};

next.addEventListener("click", function () {
  count += 1;
  if (count > quotes.length - 1) {
    count = 0;
  }
  loadFrist();
});

prev.addEventListener("click", function () {
  count -= 1;
  if (count < 0) {
    count = quotes.length - 1;
  }
  loadFrist();
});

loadFrist();
