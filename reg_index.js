document.getElementById("registerForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let consumerId = document.getElementById("consumerId").value;
    let billNumber = document.getElementById("billNumber").value;
    let mobile = document.getElementById("mobile").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if(!/^\d{13}$/.test(consumerId)){
        alert("Consumer ID must be 13 digits");
        return;
    }

    if(!/^\d{5}$/.test(billNumber)){
        alert("Bill Number must be 5 digits");
        return;
    }

    if(!/^\d{10}$/.test(mobile)){
        alert("Mobile Number must be 10 digits");
        return;
    }

    if(password !== confirmPassword){
        alert("Passwords do not match");
        return;
    }

    let customerId =
        "CUS" + Math.floor(100000 + Math.random() * 900000);

    document.getElementById("generatedId").textContent = customerId;
    document.getElementById("displayName").textContent =
        document.getElementById("customerName").value;

    document.getElementById("displayEmail").textContent =
        document.getElementById("email").value;

    document.getElementById("registerForm").style.display = "none";
    document.getElementById("successPage").classList.remove("hidden");
});
