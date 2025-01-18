const list = document.querySelectorAll('.list');
const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = ["Dev Rahul"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

const listMiddle = document.querySelectorAll('.list-middle');
const typedTextMiddle = document.querySelector(".typed-text-middle");

function active() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) => item.addEventListener('click', active));

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } 
    else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } 
    else {
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

function activeMiddle() {
    listMiddle.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

listMiddle.forEach((item) => item.addEventListener('click', activeMiddle));

const textArrayMiddle = ["Choose option"];
let charIndexMiddle = 0;

function eraseMiddle() {
    if (charIndexMiddle > 0) {
        typedTextMiddle.textContent = textArrayMiddle[0].substring(0, charIndexMiddle-1);
        charIndexMiddle--;
        setTimeout(eraseMiddle, erasingDelay);
    } 
    else {
        setTimeout(typeMiddle, typingDelay + 1100);
    }
}

function typeMiddle() {
    if (charIndexMiddle < textArrayMiddle[0].length) {
        typedTextMiddle.textContent += textArrayMiddle[0].charAt(charIndexMiddle);
        charIndexMiddle++;
        setTimeout(typeMiddle, typingDelay);
    }
    else {
        setTimeout(eraseMiddle, newTextDelay);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, newTextDelay + 250);
    setTimeout(typeMiddle, newTextDelay + 250);
}); 