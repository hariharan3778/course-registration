document.getElementById("reserveButton").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const ticketType = document.getElementById("ticketType").value;
    const quantity = document.getElementById("quantity").value;


    if (name && email && ticketType && quantity) {
        document.getElementById("outputMessage").textContent =
            `Reservation successful!`;
    } else {
        document.getElementById("outputMessage").textContent =
            "Please fill out all the fields.";
    }
});
