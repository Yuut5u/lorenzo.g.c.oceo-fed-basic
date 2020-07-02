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
let content = document.getElementsByClassName("content");
let name = document.getElementsByClassName("name");
let brand = document.getElementsByClassName("brand");
let price = document.getElementsByClassName("price");
let image = document.getElementsByClassName("image");
let clothes = [
    { name: "Basic White Tees", brand: "Essentials by Bench", price: 50, image: "shirt_1.jpg", inCart: 0 },
    { name: "Basic Black Tees", brand: "Essentials by Bench", price: 50, image: "shirt_2.jpg", inCart: 0 },
    { name: "White Long Sleeve", brand: "Zalora", price: 100, image: "shirt_3.jpg", inCart: 0 },
    { name: "Checkered Long Sleeve", brand: "Zalora", price: 150, image: "shirt_4.jpg", inCart: 0 },
    { name: "Printed Shirt", brand: "Penshoppe", price: 60, image: "shirt_5.jpg", inCart: 0 },
    { name: "Designer Shirt", brand: "Penshoppe", price: 60, image: "shirt_6.jpg", inCart: 0 }
];

// logic for loading product details
function loadProductInfo() {
    for (let index = 0; index < clothes.length; index++) {
        name[index].innerHTML = "Name: " + clothes[index].name;
        brand[index].innerHTML = "Brand: " + clothes[index].brand;
        price[index].innerHTML = "Price: " + clothes[index].price + "$";
        image[index].setAttribute("src", clothes[index].image);
    }
}

// logic for add to cart functionality
let carts = document.querySelectorAll(".add-cart");

for (let index = 0; index < carts.length; index++) {
    carts[index].addEventListener("click", () => {
        cartNumbers(clothes[index]);
        totalCost(clothes[index]);
    })

}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");
    if (productNumbers) {
        document.querySelector(".cart span").textContent = productNumbers;
    }
}

function cartNumbers(clothes) {
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector(".cart span").textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector(".cart span").textContent = 1;
    }
    setItems(clothes);
}

function setItems(clothes) {
    let cartItems = localStorage.getItem("clothesInCart");
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[clothes.name] == undefined) {
            cartItems = {
                ...cartItems,
                [clothes.name]: clothes
            }
        }
        cartItems[clothes.name].inCart += 1;
    } else {
        clothes.inCart = 1;
        cartItems = {
            [clothes.name]: clothes
        }
    }
    localStorage.setItem("clothesInCart", JSON.stringify(cartItems));
}

function totalCost(clothes) {
    // console.log("The product price is", clothes.price);
    let cartCost = localStorage.getItem("totalCost");
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + clothes.price);
    } else {
        localStorage.setItem("totalCost", clothes.price);
    }

}

function displayCart() {
    let cartItems = localStorage.getItem("clothesInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".cart-container");
    if (cartItems && cartContainer) {
        console.log("running");
    }
}

// modal script 
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


loadProductInfo();
onLoadCartNumbers();
displayCart()
