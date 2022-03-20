const images = ["1.png","2.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");
const body = document.querySelector("body");

image.src = `img/${chosenImage}`;

document.body.appendChild(image);

image.classList.add('bgImage');