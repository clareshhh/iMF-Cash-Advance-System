



// // FROM USER FORMS TO TRANSACTION CARDS IN HOME PAGE
// // Get the container where cards will go
// const container = document.getElementById("completeTransactionContainer");

// // Get saved data from localStorage
// const requests = JSON.parse(localStorage.getItem("requests")) || [];

// // FORMAT THE PAYMENT TYPE
// const formatPaymentType = (type) => {
//   if (type === "cashAdvance") return "Cash Advance";
//   if (type === "payroll") return "Payroll";
//   return type;
// }

// const iconOption = (option) => {
//   if(option === "cashAdvance") return "budget";
//   if(option === "payroll") return "toolbox";
// }

// // Loop through each request and make a card
// requests.reverse().forEach((request) => {
//   const card = document.createElement("div");
//   card.classList.add("card");


//   card.innerHTML = `
//     <div id="transactionIcon"> 
//       <div id="iconImage">
//         <img id="icon" src="transaction-icons/${iconOption(request.paymentType)}-image.png">
//       </div>
//     </div>

//     <div id="infoContainer">
//       <div id="topRow">
//         <div id="leftInfoTop">
//           <div class="transactionName">${request.name}</div>
//         </div>
//         <div id="rightInfoTop">
//           <div id="amount">₱ ${Number(request.budget).toLocaleString('en-PH', {
//             minimumFractionDigits: 2
//           })}</div>
//         </div>
//       </div>

      
//     <div id="midRow">
//       <div id="midLeftInfo">
//         <div id="payment">${formatPaymentType(request.paymentType)}</div>
//       </div>
//       <div id="midRightInfo">
//         <div id="statusPending"><div id="pending">pending</div></div>
//       </div>
//     </div>

//       <div id="bottomRow">
//         <div id="bottomLeftInfo">
//           <div id="mobileNo">Mobile No.</div>
//           <div id="number">${request.mobileNo}</div>
//         </div>
//         <div id="bottomRightInfo">
//           <div id="date">${request.date}</div>
//           <div id="time">${request.time}</div>
//         </div>
//       </div>
//     </div>
//   `;

//   container.appendChild(card);
// });
