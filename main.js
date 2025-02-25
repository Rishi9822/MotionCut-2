document.addEventListener("DOMContentLoaded", () => {
    let index = 0;
    const imagesContainer = document.querySelector(".images-container");
    const images = document.querySelectorAll(".image");
    const totalImages = images.length;

    function moveSlider() {
        imagesContainer.style.transform = `translateX(-${index * 33}%)`;
    }

    document.querySelector(".btns:last-child").addEventListener("click", () => {
        if (index < totalImages - 1) {
            index++;
        } else {
            index = 0; // Loop back to first image
        }
        moveSlider();
    });

    document.querySelector(".btns:first-child").addEventListener("click", () => {
        if (index > 0) {
            index--;
        } else {
            index = totalImages - 1; // Loop to last image
        }
        moveSlider();
    });
});
