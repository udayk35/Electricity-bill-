function showCardForm(){

    document
        .getElementById("cardSection")
        .classList.remove("hidden");
}

function makePayment(){

    let cardNo =
        document.getElementById("cardNo").value;

    let holder =
        document.getElementById("holder").value;

    let cvv =
        document.getElementById("cvv").value;

    if(cardNo.length < 16){
        alert("Card number must be 16 digits");
        return;
    }

    if(holder.length < 10){
        alert("Card holder name minimum 10 characters");
        return;
    }

    if(cvv.length < 3){
        alert("CVV must be 3 digits");
        return;
    }

    let txn =
        "TXN" +
        Math.floor(
            100000 +
            Math.random()*900000
        );

    document.getElementById("txnId")
        .innerText = txn;

    document.getElementById("paidAmount")
        .innerText = "3535";

    document.getElementById("txnDate")
        .innerText =
        new Date().toLocaleString();

    document.getElementById("successSection")
        .classList.remove("hidden");
}

function downloadReceipt(){

    let receipt =
`
Electricity Bill Receipt

Transaction ID :
${document.getElementById("txnId").innerText}

Amount Paid :
₹${document.getElementById("paidAmount").innerText}

Date :
${document.getElementById("txnDate").innerText}
`;

    let blob =
        new Blob(
            [receipt],
            {type:"text/plain"}
        );

    let link =
        document.createElement("a");

    link.href =
        URL.createObjectURL(blob);

    link.download =
        "Receipt.txt";

    link.click();
}

function goHome(){
    window.location.href =
        "home.html";
}

function logout(){
    window.location.href =
        "index.html";
}
