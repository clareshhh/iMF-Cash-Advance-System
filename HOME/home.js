


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



// FROM USER FORMS TO TRANSACTION CARDS IN HOME PAGE
// Get the container where cards will go
const container = document.getElementById("transactionContainer");

// Get saved data from localStorage
const requests = JSON.parse(localStorage.getItem("requests")) || [];

// FORMAT THE PAYMENT TYPE
const formatPaymentType = (type) => {
  if (type === "cashAdvance") return "Cash Advance";
  if (type === "payroll") return "Payroll";
  return type;
}

const iconOption = (option) => {
  if(option === "cashAdvance") return "budget";
  if(option === "payroll") return "toolbox";
}

// Loop through each request and make a card
requests.reverse().forEach((request) => {
  const card = document.createElement("div");
  card.classList.add("card");


  card.innerHTML = `
    <div id="transactionIcon"> 
      <div id="iconImage">
        <img id="icon" src="transaction-icons/${iconOption(request.paymentType)}-image.png">
      </div>
    </div>

    <div id="infoContainer">
      <div id="topRow">
        <div id="leftInfoTop">
          <div class="transactionName">${request.name}</div>
        </div>
        <div id="rightInfoTop">
          <div id="amount">₱ ${Number(request.budget).toLocaleString('en-PH', {
            minimumFractionDigits: 2
          })}</div>
        </div>
      </div>

      
    <div id="midRow">
      <div id="midLeftInfo">
        <div id="payment">${formatPaymentType(request.paymentType)}</div>
      </div>
      <div id="midRightInfo">
        <div id="statusPending"><div id="pending">pending</div></div>
      </div>
    </div>

      <div id="bottomRow">
        <div id="bottomLeftInfo">
          <div id="mobileNo">Mobile No.</div>
          <div id="number">${request.mobileNo}</div>
        </div>
        <div id="bottomRightInfo">
          <div id="date">${request.date}</div>
          <div id="time">${request.time}</div>
        </div>
      </div>
    </div>
  `;


card.addEventListener("click", () => {
    localStorage.setItem("selectedRequest", JSON.stringify(request));
    window.location.href = "../MORE-INFO/more-info.html";
});


  container.appendChild(card);
});
