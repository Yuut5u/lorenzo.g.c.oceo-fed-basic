// Javascript object for clothes list:
let clothes = [
    { name: "Basic White Tees", brand: "Essentials by Bench", price: "50$" },
    { name: "Basic Black Tees", brand: "Essentials by Bench", price: "50$" },
    { name: "White Long Sleeve", brand: "Zalora", price: "100$" },
    { name: "Checkered Long Sleeve", brand: "Zalora", price: "150$" },
    { name: "Printed Shirt", brand: "Penshoppe", price: "60$" },
    { name: "Designer Shirt", brand: "Penshoppe", price: "60$" }
];


// Carousel script 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}