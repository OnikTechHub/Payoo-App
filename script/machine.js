console.log("Machine script loaded.");

//machine id -> input value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}

// machine -> balance
function getBalance(){
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log("Current Balance:", Number(balance));
    return Number(balance);

}
    //machine -> set balance
    function setBalance(value) {
        const balanceElement = document.getElementById("balance");
        balanceElement.innerText = value;
    }

// machine id > hide all > show id

function showonly(id){
    const addmony = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");
    const transfer = document.getElementById("transfer")
    const history = document.getElementById("history")
    

    // console.log(`add-money- ${addmony} , Cashout- ${cashout}`);
    //shobai k hide kore dibo
    addmony.classList.add("hidden");
    cashout.classList.add("hidden");
    transfer.classList.add("hidden");
    history.classList.add("hidden");

    // id wala element ke show korbo
    
    const selectedElement = document.getElementById(id);
    selectedElement.classList.remove("hidden");
    }
