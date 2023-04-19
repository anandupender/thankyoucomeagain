console.log("hi");

window.addEventListener("DOMContentLoaded", (event) => {
    const contactButton = document.querySelector("#contact-button");
    if (contactButton) {
        contactButton.addEventListener("click", displayContact, false);
    }

    let phone = document.querySelector("#phone");

    function displayContact(){
        phone.style.opacity = "1";
    }
});