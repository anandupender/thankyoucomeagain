window.addEventListener("DOMContentLoaded", (event) => {
    const contactButton = document.querySelector("#contact-button");
    if (contactButton) {
        contactButton.addEventListener("click", displayContact, false);
    }

    let phone = document.querySelector("#phone");

    function displayContact(){
        phone.style.opacity = "1";
    }

    const galleryContainer = document.querySelector("#gallerySwap");
    let images = galleryContainer.children;
    window.setInterval(swapImage, 300);
    var i = 0;

    function swapImage(){
        if(i > 0){
            images[i-1].style.display = "none";
        }else{
            images[images.length - 1].style.display = "none";
        }
        images[i].style.display = "block";
        i++;
        if(i >= images.length){
            i = 0;
        }
    }


});