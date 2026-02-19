console.log("Login page loaded");

document.getElementById("login-btn").addEventListener("click", function () {
  //1.get the mobile number input value

  const numberInput = document.getElementById("input-number");
  const contractNumber = numberInput.value;
  console.log(contractNumber);
  // 2. Get the entered PIN value
  const inputPin = document.getElementById("input-pin");
  const pin = inputPin.value;
  console.log(pin);

  //match the mobile number and PIN with the stored values

  if (contractNumber == "01828347761" && pin == "1234") {
    //3-1 true:::>>>alart> home page
    alert("Login successful!");
    window.location.assign("home.html");
  }
  //3-2 false:::>>>alart> wrong mobile number or PIN retry
  else {
    alert("Invalid pin. Please try again.");
  }
});
