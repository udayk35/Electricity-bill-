function calculateTotal(){

    let bills =
        document.querySelectorAll(".bill");

    let total = 0;

    bills.forEach(bill => {

        if(bill.checked){
            total += Number(bill.value);
        }

    });

    document.getElementById("total").innerText =
        total;
}

function proceedToPay(){

    let total =
        document.getElementById("total").innerText;

    if(total == 0){
        alert("Select at least one bill");
        return;
    }

    localStorage.setItem(
        "totalAmount",
        total
    );

    window.location.href =
        "payment.html";
}

function logout(){

    window.location.href =
        "login.html";
}
