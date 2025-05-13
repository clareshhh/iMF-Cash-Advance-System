

// localStorage.clear();


// FROM USER FORMS TO TRANSACTION CARDS IN HOME PAGE
// Get the container where cards will go
const container = document.getElementById("completeTransactionContainer");

// Get saved data from localStorage
const requests = JSON.parse(localStorage.getItem("requests")) || [];

// FORMAT THE PAYMENT TYPE
const formatPaymentType = (type) => {
  if (type === "cashAdvance") return "Cash Advance";
  if (type === "payroll") return "Payroll";
  return type;
};

const iconOption = (option) => {
  if (option === "cashAdvance") return "budget";
  if (option === "payroll") return "toolbox";
};

// Get the most recent request
const latestRequest = requests[requests.length - 1];

if (latestRequest) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `  
  <div id="topInfoContainer">
      <div id="transactionIcon"> 
          <div id="iconImage">
          <img id="icon" src="transaction-icons/${iconOption(latestRequest.paymentType)}-image.png">
          </div>
      </div>

      <div id="infoContainer">
          <div id="topRow">
              <div id="leftInfoTop">
                  <div class="transactionName">${latestRequest.name}</div>
              </div>
              <div id="rightInfoTop">
                  <div id="amount">₱ ${Number(latestRequest.budget).toLocaleString('en-PH', {
                    minimumFractionDigits: 2
                  })}</div>
              </div>
          </div>

          <div id="midRow">
              <div id="midLeftInfo">
                  <div id="payment">${formatPaymentType(latestRequest.paymentType)}</div>
              </div>
              <div id="midRightInfo">
                  <div id="statusPending"><div id="pending">pending</div></div>
              </div>
          </div>

          <div id="bottomRow">
              <div id="bottomLeftInfo">
                  <div id="mobileNo">Mobile No.</div>
                  <div id="number">${latestRequest.mobileNo}</div>
              </div>
              <div id="bottomRightInfo">
                  <div id="date">${latestRequest.date}</div>
                  <div id="time">${latestRequest.time}</div>
              </div>
          </div>
      </div>
  </div>

  <div id="bottomInfoContainer">
      <div id="descriptionContainer">
          <div id="description">Description</div>
          <div id="textDescription">${latestRequest.description}</div>
      </div>
      <div id="statusContainer">
          <div id="status">Status</div>
          <div id="textStatus">Up for First Approval</div>
      </div>
  </div>
  `;

  container.appendChild(card);
}
