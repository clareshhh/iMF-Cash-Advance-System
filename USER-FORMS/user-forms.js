


// SUBMIT REQUEST BUTTON | CREATES A DIV CARD FOR THE NEW REQUEST TRANSACTION
// Wait until the page is fully loaded
window.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submitRequestBtn");

  submitBtn.addEventListener("click", () => {
    // Get values from inputs
    const name = document.getElementById("nameInput").value;
    const mobileNo = document.getElementById("mobileNoInput").value;
    const description = document.getElementById("descriptionInput").value;
    const budget = document.getElementById("budgetInput").value;
    const paymentType = document.getElementById("paymentInput").value; 


    // Make sure all fields are filled (optional validation)
    if (!name || !mobileNo || !description || !budget || !paymentType) {
      alert("Please fill out all fields.");
      return;
    }

    // Create new request object
    const newRequest = {
      name,
      mobileNo,
      description,
      budget,
      paymentType,
      date: new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      }),
      time: new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      })
    };

    // Get existing requests or set to empty array
    const existingRequests = JSON.parse(localStorage.getItem("requests")) || [];

    // Add the new request to the array
    existingRequests.push(newRequest);

    // Save back to localStorage
    localStorage.setItem("requests", JSON.stringify(existingRequests));

    // Redirect to home page
    window.location.href = "../HOME/home.html";
  });
});