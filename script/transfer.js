document.getElementById("transfer-btn").addEventListener("click", function () {
  //1. get the agent number input & validate
  const transferNumber = getValueFromInput("transfer-number");

  if (transferNumber.length !== 11) {
    alert("Invalid agent number. Please enter a 11-digit number.");
    return;
  }

  //2. get the amount validate , convert to number
  const transferAmount = getValueFromInput("transfer-amount");

  const currentBalance = getBalance();

  //4.calculate the new ballance
  const newBalance = currentBalance - Number(transferAmount);
  console.log(newBalance);

  if (newBalance < 0) {
    alert("Invalid transfer amount.");
    return;
  }

  //5. get the pin and verify
  const transferPin = getValueFromInput("transfer-pin");
  if (transferPin == "1234") {
    //5.1 true:: show the new ballance and alert cashout successful
    alert(`transfer ${transferAmount} Tk successful.TO ${transferNumber} at ${new Date()} Your new balance is ${newBalance} Tk`);
    setBalance(newBalance);

    //1- history-content ke dhora niye asbo

    const history = document.getElementById("history-content");

    //2- new div  create korbo

    const newHistory = document.createElement("div");

    //3- new div innerhtml set korbo

    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">
    transfer ${transferAmount} Tk successful. To ${transferNumber} at ${new Date()} Your new balance is ${newBalance} Tk 
    </div>
    `;

    //4- history-content er vitore new div ke append korbo

    history.append(newHistory);
  } else {
    //5.2 false:: show an error message and alert cashout failed > return
    alert("Invalid PIN. transfer failed.");
    return;
  }
});
