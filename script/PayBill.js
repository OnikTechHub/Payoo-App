document
  .getElementById("Pay-bill-btn")
  .addEventListener("click", function (event) {

    event.preventDefault();

    // 1. Select bill type
    const billType =
      document.getElementById("Pay-bill").value;

    if (billType === "Select back") {
      alert("Please select bill type");
      return;
    }

    // 2. Account Number
    const accountNumber =
      document.getElementById("pay-bill-number").value;

    if (accountNumber.length !== 11) {
      alert("Enter valid 11 digit account number");
      return;
    }

    // 3. Amount
    const amount = parseFloat(
      document.getElementById("Pay-bill-amount").value
    );

    if (isNaN(amount) || amount <= 0) {
      alert("Enter valid amount");
      return;
    }

    // 4. Pin
    const pin =
      document.getElementById("Pay-bill-pin").value;

    if (pin.length !== 4) {
      alert("Enter valid 4 digit pin");
      return;
    }
    

    // 5. Current Balance (example)
    const balanceElement =
      document.getElementById("balance");

    let currentBalance =
      parseFloat(balanceElement.innerText);

    // Balance check
    if (amount > currentBalance) {
      alert("Not enough balance");
      return;
    }

    // 6. New Balance
    const newBalance = currentBalance - amount;

    balanceElement.innerText = newBalance;

    alert(
      billType +
        " payment successful. Amount : " +
        amount
    );

    // 7. Clear input fields
    document.getElementById("pay-bill-number").value = "";
    document.getElementById("Pay-bill-amount").value = "";
    document.getElementById("Pay-bill-pin").value = "";
  });