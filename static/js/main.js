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

    const emailCopyButton = document.querySelector("#emailCopy");
    var numTimesClicked = 0;

    if (emailCopyButton) {
        emailCopyButton.addEventListener("click", copyEmail, false);
    }

    function copyEmail() {
        var input = document.createElement('input');
        input.setAttribute('value', "anandupender@gmail.com");
        document.body.appendChild(input);
        input.select();
        var result = document.execCommand('copy');
        navigator.clipboard.writeText(input.value);
        document.body.removeChild(input);

        if(numTimesClicked == 0){
            emailCopyButton.children[0].innerHTML = "Copied to clipboard  👍🏾";
        }else if(numTimesClicked == 1){
            emailCopyButton.children[0].innerHTML = "Yep, already clicked  👍🏾";
        }else if(numTimesClicked == 2){
            emailCopyButton.children[0].innerHTML = "You're all good here  👍🏾";
        }else if(numTimesClicked == 3){
            emailCopyButton.children[0].innerHTML = "fine, here you go: anandupender@gmail.com";
        }
        numTimesClicked++;

        return result;
     }



});