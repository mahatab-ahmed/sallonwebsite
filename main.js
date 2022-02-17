let daynight = document.querySelector('.daynight');
let menutoggle = document.querySelector('.menutoggle');
let body = document.querySelector('body');
let nav = document.querySelector('.nav');
daynight.onclick = function() {
    // daynight.classList.
    body.classList.toggle('dark');
    daynight.classList.toggle('active');
}

menutoggle.onclick = function() {
    menutoggle.classList.toggle('active');
    nav.classList.toggle('active');
}