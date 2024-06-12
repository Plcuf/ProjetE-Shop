const plus = document.querySelector('.plus');
const desc = document.querySelector('.desc>p:nth-child(1)');

let full_desc = desc.textContent;
let short_desc = full_desc.slice(0, 250) + '...';

desc.textContent = short_desc;

plus.addEventListener('click', function() {
    if (desc.textContent === short_desc) {
        desc.textContent = full_desc;
    } else {
        desc.textContent = short_desc;
    }
});

const left = document.querySelector('.left-arrow');
const right = document.querySelector('.right-arrow');

const image1 = document.querySelector('.previews>img:nth-child(1)');
const image2 = document.querySelector('.previews>img:nth-child(2)');
const image3 = document.querySelector('.previews>img:nth-child(3)');

const mainImage = document.querySelector('.carousel>img');

left.addEventListener('click', function() {
    if (mainImage.src === image1.src) {
        mainImage.src = image3.src;
    } else if (mainImage.src === image2.src) {
        mainImage.src = image1.src;
    } else {
        mainImage.src = image2.src;
    }
});

right.addEventListener('click', function() {
    if (mainImage.src === image1.src) {
        mainImage.src = image2.src;
    } else if (mainImage.src === image2.src) {
        mainImage.src = image3.src;
    } else {
        mainImage.src = image1.src;
    }
});

image1.addEventListener('click', function() {
    mainImage.src = image1.src;
});

image2.addEventListener('click', function() {
    mainImage.src = image2.src;
});

image3.addEventListener('click', function() {
    mainImage.src = image3.src;
});