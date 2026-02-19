document.getElementById("cashout-btn").addEventListener("click", function () {
  //1. get the agent number input & validate
  const cashoutNumber = getValueFromInput("cashout-number");

  if (cashoutNumber.length !== 11) {
    alert("Invalid agent number. Please enter a 11-digit number.");
    return;
  }

  //2. get the amount validate , convert to number
  const cashoutAmount = getValueFromInput("cashout-amount");

  const currentBalance = getBalance();

  //4.calculate the new ballance
  const newBalance = currentBalance - Number(cashoutAmount);
  console.log(newBalance);

  if (newBalance < 0) {
    alert("Invalid cashout amount.");
    return;
  }

  //5. get the pin and verify
  const cashoutPin = getValueFromInput("cashout-pin");
  if (cashoutPin == "1234") {
    //5.1 true:: show the new ballance and alert cashout successful
    alert(`Cashout ${cashoutAmount} Tk successful.TO ${cashoutNumber} at ${new Date()} Your new balance is ${newBalance} Tk`);
    setBalance(newBalance);

    //1- history-content ke dhora niye asbo

    const history = document.getElementById("history-content");

    //2- new div  create korbo

    const newHistory = document.createElement("div");

    //3- new div innerhtml set korbo

    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">
    cashout ${cashoutAmount} Tk successful. To ${cashoutNumber} at ${new Date()} Your new balance is ${newBalance} Tk 
    </div>
    `;

    //4- history-content er vitore new div ke append korbo

    history.append(newHistory);
  } else {
    //5.2 false:: show an error message and alert cashout failed > return
    alert("Invalid PIN. Cashout failed.");
    return;
  }
});

//document.getElementById("cashout-btn").addEventListener("click", function() {
//     //1. get the agent number input & validate

//     const cashoutNumberInput = document.getElementById("cashout-number");
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);

//     if (cashoutNumber.length !== 11){
//         alert("Invalid agent number. Please enter a 11-digit number.");
//         return;
//     }

//     //2. get the amount validate , convert to number

//     const cashoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);
//     //3. get the current ballance , vLidate , convert to number

//     const balanceElement = document.getElementById("balance");
//     const balance = balanceElement.innerText;
//     console.log(balance);

//     //4.calculate the new ballance

//     const newBalance = Number(balance) - Number(cashoutAmount);
//     console.log(newBalance);

//     if (newBalance < 0) {
//         alert("Invalid cashout amount.");
//         return;
//     }
//     //5. get the pin and verify

//     const cashoutPinInput = document.getElementById("cashout-pin");
//     const cashoutPin = cashoutPinInput.value;

//     if (cashoutPin == "1234") {

//     //5.1 true:: show the new ballance and alert cashout successful
//     alert("Cashout successful.");
//     console.log("New Balance: " , newBalance);
//     balanceElement.innerText = newBalance;
//     }
//     else {

//     //5.2 false:: show an error message and alert cashout failed > return
//         alert("Invalid PIN. Cashout failed.");
//         return;
//     }
// });
