


// SEARCH PANEL
const searchButton = document.getElementById("search");
const searchPanel = document.getElementById("searchPanel");
const clearButton = document.getElementById("clearSearch");
const overlay = document.getElementById("overlay");

// Show panel + overlay
searchButton.addEventListener("click", () => {
  searchPanel.classList.add("active");
  overlay.classList.add("active"); 
});

// Hide panel when clicking overlay
overlay.addEventListener("click", () => {
  searchPanel.classList.remove("active");
  overlay.classList.remove("active");
});

// Clear only the input (not hiding the panel)
clearButton.addEventListener("click", () => {
  document.getElementById("searchTextbox").value = "";
});


// SEARCH BUT FOR EVERY TEXT IN THE CARD
// const searchInput = document.getElementById('searchTextbox');
// const clearBtn = document.getElementById('clearSearch');

// function filterCards() {
//   const searchedWord = searchInput.value.toLowerCase().trim();
//   const cards = document.querySelectorAll('.card');

//   cards.forEach(card => {
//     const cardText = card.innerText.toLowerCase();
//     if (cardText.includes(searchedWord)) {
//       card.classList.remove('hide');
//     } else {
//       card.classList.add('hide');
//     }
//   });
// }

// searchInput.addEventListener('input', filterCards);

// clearBtn.addEventListener('click', () => {
//   searchInput.value = '';
//   filterCards();
// });

// SEARCH BUT FOR THE TRANSACTION NAME ONLY
const searchInput = document.getElementById("searchTextbox");
const clearBtn = document.getElementById("clearSearch");

function filterCards(){
  const searchedWord = searchInput.value.toLowerCase().trim()
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
  const eachTransactionName = card.querySelector(".transactionName"); //use card.querySelector cuz we are inside the forEach loop
  const transactionName = eachTransactionName.innerText.toLowerCase().trim();

      if(transactionName.includes(searchedWord)) {
        card.classList.remove('hide');
      } else {
        card.classList.add('hide');
      }

  });
}
  
searchInput.addEventListener('input', filterCards);

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  filterCards();
});
