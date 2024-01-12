let button_1 = document.getElementById("button_1")

function changeColor() {
    button_1.style.background = "white"
    button_1.style.color = "black"
}

function changeColorBack() {
    button_1.style.background = "none"
    button_1.style.color = "white"
}

button_1.addEventListener('mouseover', changeColor);
button_1.addEventListener('mouseout', changeColorBack);

let button_2 = document.getElementById("button_2")

function changeColor2() {
    button_2.style.background = "white"
    button_2.style.color = "black"
}

function changeColorBack2() {
    button_2.style.background = "none"
    button_2.style.color = "white"
}

button_2.addEventListener('mouseover', changeColor2);
button_2.addEventListener('mouseout', changeColorBack2);

let button_3 = document.getElementById("button_3")

function changeColor3() {
    button_3.style.background = "white"
    button_3.style.color = "black"
}

function changeColorBack3() {
    button_3.style.background = "none"
    button_3.style.color = "white"
}

button_3.addEventListener('mouseover', changeColor3);
button_3.addEventListener('mouseout', changeColorBack3);

let top_nav_1 = document.getElementById('nav_1')

function addDash() {
    top_nav_1.style.textDecoration = 'underline';
}

function removeDash() {
    top_nav_1.style.textDecoration = 'none';
}

top_nav_1.addEventListener('mouseover', addDash);
top_nav_1.addEventListener('mouseout', removeDash);


let top_nav_2 = document.getElementById('nav_2')

function addDash2() {
    top_nav_2.style.textDecoration = 'underline';
}

function removeDash2() {
    top_nav_2.style.textDecoration = 'none';
}

top_nav_2.addEventListener('mouseover', addDash2);
top_nav_2.addEventListener('mouseout', removeDash2);

let top_nav_3 = document.getElementById('nav_3')

function addDash3() {
    top_nav_3.style.textDecoration = 'underline';
}

function removeDash3() {
    top_nav_3.style.textDecoration = 'none';
}

top_nav_3.addEventListener('mouseover', addDash3);
top_nav_3.addEventListener('mouseout', removeDash3);

let top_nav_4 = document.getElementById('nav_4')

function addDash4() {
    top_nav_4.style.textDecoration = 'underline';
}

function removeDash4() {
    top_nav_4.style.textDecoration = 'none';
}

top_nav_4.addEventListener('mouseover', addDash4);
top_nav_4.addEventListener('mouseout', removeDash4);

let top_nav_5 = document.getElementById('nav_5')

function addDash5() {
    top_nav_5.style.textDecoration = 'underline';
}

function removeDash5() {
    top_nav_5.style.textDecoration = 'none';
}

top_nav_5.addEventListener('mouseover', addDash5);
top_nav_5.addEventListener('mouseout', removeDash5);



let sun_moon = document.getElementById('dark_light')
let button = document.querySelector('button')
let forestSection_1 = document.querySelector('.forest_1');
let forestSection_2 = document.querySelector('.forest_2');
let forestSection_3 = document.querySelector('.forest_3');
let navLinks = document.querySelectorAll('nav a, .button');

function toggleDarkLightMode() {
    if (document.body.classList.contains('dark_mode')) {
        sun_moon.src = './media/moon.png';
        forestSection_1.style.backgroundImage = "url('./photos/dark_mode_forest_1.avif')";
        forestSection_2.style.backgroundImage = "url('./photos/dark_mode_forest_2.avif')";
        forestSection_3.style.backgroundImage = "url('./photos/dark_mode_forest_3.avif')";
        document.body.classList.remove('dark_mode');
        document.body.classList.add('light_mode');
        navLinks.forEach(link => {
            link.style.color = 'black';
            if (link.classList.contains('button')) {
                link.style.borderColor = 'black';
            }
        });
    } else {
        sun_moon.src = './media/sun.png';
        forestSection_1.style.backgroundImage = "url('./photos/forest_1.avif')";
        forestSection_2.style.backgroundImage = "url('./photos/forest_2.avif')";
        forestSection_3.style.backgroundImage = "url('./photos/forest_3.avif')";
        document.body.classList.remove('light_mode');
        document.body.classList.add('dark_mode');
        navLinks.forEach(link => {
            link.style.color = 'white';
            if (link.classList.contains('button')) {
                link.style.borderColor = 'white';
            }
        });
        }
}

button.addEventListener('click', toggleDarkLightMode);