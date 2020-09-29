const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {

const day = new Date();
const hh = day.getHours() * 30;
const mm = day.getMinutes() * deg;
const ss = day.getSeconds() * deg;

hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;

})

document.querySelector(".botão-mudar").addEventListener("click", function() {
    document.body.classList.toggle('light')
});