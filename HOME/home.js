


// SEARCH PANEL ANIMATION SLIDE IN
const searchButton = document.getElementById("search");
const searchPanel = document.getElementById("searchPanel");
const clearButton = document.getElementById("clearSearch");
const overlay = document.getElementById("overlay");

// Show panel + overlay
searchButton.addEventListener("click", () => {
  searchPanel.classList.add("active");
  overlay.classList.add("active");  
});

// Hide panel 
overlay.addEventListener("click", () => {
  searchPanel.classList.remove("active");
  overlay.classList.remove("active");
});

// Clear the input
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



// FILTER ANIMATION SLIDE IN
const filterBtn = document.getElementById("filter");
const filterPanel = document.getElementById("filterPanel");

filterBtn.addEventListener("click", () => {
  filterPanel.classList.add("active");
  overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
  filterPanel.classList.remove("active");
  overlay.classList.remove("active");
});


// FILTER BUTTONS ACTIVE
const periodButtons = document.querySelectorAll("#period-container button");
const statusButtons = document.querySelectorAll("#status-container button");

periodButtons.forEach(button => {
  button.addEventListener("click", () => {
    if(button.classList.contains("active")) {
      button.classList.remove('active');
    } else {

      periodButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    }

  });
});


statusButtons.forEach(button => {
  button.addEventListener("click", () => {
    if(button.classList.contains("active")) {
      button.classList.remove('active');
    } else {

      statusButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    }

  });
});


// FILTER: CLEAR BUTTON
const clearFilterSearch = document.getElementById("clearFilterSearch");

clearFilterSearch.addEventListener("click", () => {
  periodButtons.forEach(button => button.classList.remove("active"));
  statusButtons.forEach(button => button.classList.remove("active"));
});

