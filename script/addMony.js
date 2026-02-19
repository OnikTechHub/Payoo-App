document.getElementById("add-money-btn").addEventListener("click", function () {
  //1. bank account get
  const bankAccount = getValueFromInput("add-money-bank");

  if (bankAccount === "Select bank") {
    alert("Please select a bank");
    return;
  }

  //2. get bank account number
  const accno = getValueFromInput("add-money-number");
  if (accno.length != 11) {
    alert("Please enter a valid account number.");
    return;
  }

  //3. get amount
  const amount = getValueFromInput("add-money-amount");
  const currentBalance = getBalance();
  const newBalance = getBalance() + Number(amount);

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter amount.");
    return;
  }

  const pin = getValueFromInput("add-money-pin");
  if (pin == "1234") {
    alert(
      `Add Money ${amount} Tk successful. from ${bankAccount} at ${new Date()} , Account Number ${accno} , Your new balance is ${newBalance} Tk`,
    );
    setBalance(newBalance);

    //1- history-content ke dhora niye asbo

    const history = document.getElementById("history-content");

    //2- new div  create korbo

    const newHistory = document.createElement("div");

    //3- new div innerhtml set korbo

    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">
    Add Money ${amount} Tk successful from ${bankAccount} at ${new Date()} , Account Number ${accno} , Your new balance is ${newBalance} Tk
    </div>
    `;

    //4- history-content er vitore new div ke append korbo

    history.append(newHistory);
  } else {
    alert("Invalid PIN. Please try again.");
    return;
  }
});
