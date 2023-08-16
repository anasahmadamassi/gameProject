function changeColor() {
    const colorChangeDiv = document.getElementById("colorChangeDiv");
    const currentColor = colorChangeDiv.style.backgroundColor;
    // If the current background color is gray, change it to green. Otherwise, change it back to gray.
    if (currentColor === "gray" || currentColor === "") {
        colorChangeDiv.style.backgroundColor = "green";
        colorChangeDiv.style.color = "white";
    } else {
        colorChangeDiv.style.backgroundColor = "gray";
        colorChangeDiv.style.color = "gray";
    }
}


const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
const buttons = document.querySelectorAll(".buttons button");

let currentIndex = 0;

function showImage(index) {
    currentIndex = index;
    setSliderPosition();
    style()
}

function setSliderPosition() {
    const offset = -currentIndex * images[0].clientWidth;
    slider.style.transform = `translateX(${offset}px)`;
}
const button = document.querySelectorAll(".buttons button");

function changeColor(index) {
    buttons.forEach((button, i) => {
        if (i === index) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");  
        }
    });
}