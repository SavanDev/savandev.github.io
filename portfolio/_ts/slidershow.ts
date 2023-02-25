let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n:number) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n:number) {
    showSlides(slideIndex = n);
}

function showSlides(n:number) {
    let i;
    let slides = <HTMLCollectionOf<HTMLElement>> document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}