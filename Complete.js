const categories = {

    "Billing Related":[
        "Wrong Bill",
        "Meter Reading Issue"
    ],

    "Voltage Related":[
        "Low Voltage",
        "High Voltage"
    ],

    "Frequent Disruption":[
        "Power Cut",
        "Frequent Shutdown"
    ],

    "Street Light Related":[
        "Light Not Working",
        "Light Flickering"
    ],

    "Pole Related":[
        "Damaged Pole",
        "Leaning Pole"
    ]
};

function loadCategory(){

    let type =
        document.getElementById(
            "complaintType"
        ).value;

    let category =
        document.getElementById(
            "category"
        );

    category.innerHTML = "";

    categories[type].forEach(item=>{

        let option =
            document.createElement(
                "option"
            );

        option.text = item;

        category.add(option);

    });
}

document
.getElementById("complaintForm")
.addEventListener("submit",

function(e){

    e.preventDefault();

    let consumer =
        document.getElementById(
            "consumerNo"
        ).value;

    let mobile =
        document.getElementById(
            "mobile"
        ).value;

    if(!/^\d{13}$/.test(consumer)){
        alert(
        "Consumer number must be 13 digits"
        );
        return;
    }

    if(!/^\d{10}$/.test(mobile)){
        alert(
        "Mobile number must be 10 digits"
        );
        return;
    }

    let complaintId =
        "CMP" +
        Math.floor(
        100000 +
        Math.random()*900000
        );

    document
    .getElementById(
        "complaintId"
    ).innerText =
    complaintId;

    document
    .getElementById(
        "successBox"
    ).classList.remove(
        "hidden"
    );

    document
    .getElementById(
        "complaintForm"
    ).style.display =
    "none";
});

function logout(){

    window.location.href =
    "index.html";
}
