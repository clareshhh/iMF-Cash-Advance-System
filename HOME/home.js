// const searchImg = document.getElementById("searchImg");
// const searchPanel = document.getElementById("searchPanel");
// const clearButton = document.getElementById("clearSearch");
// const searchTextbox = document.getElementById("searchTextbox");

// searchImg.addEventListener("click", () => {
//   searchPanel.classList.add("active");
// });

// document.addEventListener("click", (event) => {
//   const isClickInside = searchPanel.contains(event.target) || searchImg.contains(event.target);
//   if (!isClickInside) {
//     searchPanel.classList.remove("active");
//   }
// });

// clearButton.addEventListener("click", () => {
//   searchTextbox.value = "";
// });



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