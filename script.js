
let amount = 0;
let cost = 125;
let finalCosts = 0;
let amountSpan;

var ul;
var liItems;
var imageWidth;
var imageNumber;
var i = 0;
var computedStyle;

let desktopSize = 400;

document.addEventListener('DOMContentLoaded', function () {


    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");


    initUl();
    decreaseAmount();
    increaseAmount();


    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }


    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

});

function calcCost() {
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

function addToCart() {
    calcCost();
}

function checkout() {
    console.log("Checkout");
}

function onDeleteButton() {
    console.log("Delete");
}

function changeImage(image) {
    console.log(image);
    document.getElementById("imgClickAndChange").src = image;
}

function slider(ul) {
    animate({
        delay: 17,
        duration: 3000,
        delta: function (p) { return Math.max(0, -1 + 2 * p) },
        step: function (delta) {
            ul.style.left = '-' + parseInt(currentImage * imageWidth + delta * imageWidth) + 'px';
        },
        callback: function () {
            currentImage++;
            // if it doesn’t slied to the last image, keep sliding
            if (currentImage < imageNumber - 1) {
                slider(ul);
            }
            // if current image it’s the last one, it slides back to the first one
            else {
                var leftPosition = (imageNumber - 1) * imageWidth;
                // after 2 seconds, call the goBack function to slide to the first image 
                setTimeout(function () { goBack(leftPosition) }, 2000);
                setTimeout(function () { slider(ul) }, 4000);
            }
        }
    });
}


function initUl() {
    ul = document.getElementById('image_slider');
    liItems = ul.children;
    imageNumber = liItems.length;
    imageWidth = liItems[0].children[0].offsetWidth;

    computedStyle = document.defaultView.getComputedStyle(liItems[i].childNodes[0], null);
    imageWidth = computedStyle.width;
    // set ul’s width as the total width of all images in image slider.
    ul.style.width = parseInt(imageWidth * imageNumber) + 'px';
    slider(ul);
}

function goBack(leftPosition) {
    currentImage = 0;
    var id = setInterval(function () {
        if (leftPosition >= 0) {
            ul.style.left = '-' + parseInt(leftPosition) + 'px';
            leftPosition -= imageWidth / 10;
        }
        else {
            clearInterval(id);
        }
    }, 17);
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function plusSlidesMobile(n) {
    showSlidesMobile(slideIndex += n);
}

function currentSlideMobile(n) {
    showSlidesMobile(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    console.log("current Slide: " + n);
    if (n > slides.length) { slideIndex = 1 }
    console.log("current slideIndex: " + slideIndex);
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function showSlidesMobile(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesMobile");
    console.log("current Slide: " + n);
    if (n > slides.length) { slideIndex = 1 }
    console.log("current slideIndex: " + slideIndex);
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function openModal(n) {
    var modal = document.getElementById("myModal");
    showSlides(n);
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function myFunction() {
    var topnav = document.getElementById("topnav");
    if (topnav.style.display === "flex") {
        topnav.style.display = "none";
    } else {
        topnav.style.display = "flex";
    }
}
