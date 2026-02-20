document.getElementById("Bonus-btn").addEventListener("click", function () {
    
    //2. get bank account number
  const coupon = getValueFromInput("coupon-number");
  if (coupon.length != 11) {
    alert("Enter your coupon number.");
    return;
  }

  //3. get amount
  const amount = getValueFromInput("add-money-amount");
  const currentBalance = getBalance();
  const newBalance = getBalance() + Number(amount);

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid coupon number.");
    return;
  }
})