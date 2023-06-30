
let amount = 0;
let cost = 125;
let finalCosts = 0;
let amountSpan;


document.addEventListener('DOMContentLoaded', function () {

    decreaseAmount();
    increaseAmount();

});

function calcCost(){
    finalCosts = cost * amount;

    console.log(finalCosts);
}

function decreaseAmount() {
    amount--;
    amountSpan = document.getElementById("amountSpan").innerHTML = amount;
}

function increaseAmount() {
    amount++;
    amountSpan = document.getElementById("amountSpan").innerHTML = amount;
}

function addToCart(){
    calcCost();
}

function openCart(){
    window.location.href = "cart.html";
}

function changeImage(image) {
    console.log(image);
    document.getElementById("imgClickAndChange").src = image;
}