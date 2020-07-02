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

// Javascript object for clothes list:
let name = document.getElementsByClassName("name");
let brand = document.getElementsByClassName("brand");
let price = document.getElementsByClassName("price");
let image = document.getElementsByClassName("image");
let clothes = [
    { name: "Basic White Tees", brand: "Essentials by Bench", price: "50$", image: "shirt_1.jpg" },
    { name: "Basic Black Tees", brand: "Essentials by Bench", price: "50$", image: "shirt_2.jpg" },
    { name: "White Long Sleeve", brand: "Zalora", price: "100$", image: "shirt_3.jpg" },
    { name: "Checkered Long Sleeve", brand: "Zalora", price: "150$", image: "shirt_4.jpg" },
    { name: "Printed Shirt", brand: "Penshoppe", price: "60$", image: "shirt_5.jpg" },
    { name: "Designer Shirt", brand: "Penshoppe", price: "60$", image: "shirt_6.jpg" }
];



function loadProductInfo() {
    for (let index = 0; index < clothes.length; index++) {
        name[index].innerHTML = "Name: " + clothes[index].name;
        brand[index].innerHTML = "Brand: " + clothes[index].brand;
        price[index].innerHTML = "Price: " + clothes[index].price;
    }
}

function addImage() {
    for (let index = 0; index < clothes.length; index++) {


    }
}
loadProductInfo();