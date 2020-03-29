//interactive elements
const imgSlot1 = document.getElementById("slot1");
const imgSlot2 = document.getElementById("slot2");
const imgSlot3 = document.getElementById("slot3");

const txtMessage = document.getElementById("message");
const txtWinnings = document.getElementById("winnings");
const txtCreditBox = document.getElementById("creditBox");

const btnCredit = document.getElementById("credit");
const btnSpin = document.getElementById("spin");
const btnCollect = document.getElementById("collect");


document.getElementById("creditBox").placeholder = "0";
document.getElementById("winnings").placeholder = "0";
//event listeners
btnSpin.addEventListener("click", spin);
btnCollect.addEventListener("click", collect);
btnCredit.addEventListener("click", addCredit);

//when page loaded
initialise();


//when credit butto clicked
function addCredit() {
    txtMessage.innerText = "";
    document.getElementById("creditBox").stepUp(1);
}

function collect() {
    document.getElementById("creditBox").disabled = false;
    const x = parseInt(txtWinnings.value);
    document.getElementById("creditBox").stepUp(x);
    
    document.getElementById("winnings").value = "0";

}
//when spin button clicked
function spin() {

    document.getElementById("creditBox").disabled = false;
    txtMessage.innerText = "";  
    if (parseInt(txtCreditBox.value) >= 1) {
    
    

    let slot1 = Math.floor(Math.random() * 8) + 1;
    imgSlot1.setAttribute("src", "images/" + slot1 + ".png");
    count++;
    
    let slot2 = Math.floor(Math.random() * 8) + 1;
    imgSlot2.setAttribute("src", "images/" + slot2 + ".png");
    count++;  

    let slot3 = Math.floor(Math.random() * 8) + 1;
    imgSlot3.setAttribute("src", "images/" + slot3 + ".png");
    count++;
    

    if ((slot1 == slot2) && (slot1 == slot3)) {
        document.getElementById("winnings").stepUp(10);
        txtMessage.innerText = `!!! YOU WIN 10 CREDITS !!!`;
    }

    else if (slot2 == slot3) {
        document.getElementById("winnings").stepUp(5);
        txtMessage.innerText = `!!! YOU WIN 5 CREDITS !!!`;
    }
    }

    document.getElementById("creditBox").stepDown(1); 
    document.getElementById("creditBox").disabled = true;
}

function initialise() {
    document.getElementById("creditBox").disabled = true;
    document.getElementById("winnings").disabled = true;
    count = 0;
    imgSlot1.setAttribute("src", "images/1.png");
    imgSlot2.setAttribute("src", "images/1.png");
    imgSlot3.setAttribute("src", "images/1.png");
    txtMessage.innerText = "!!! ADD SOME CREDITS TO START !!!";  
}
