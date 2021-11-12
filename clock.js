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

var date = day.getDate()
var month = day.getMonth() + 1
var year = day.getFullYear()
date = reset(date)
month = reset(month)
    
currentDay.innerHTML = date + "/" + month + "/" + year

function reset(k) {

    if (k < 10) {
        return "0" + k 
    } else {
        return k
    }
    }


})

/*
$('#hr').css("transform", "rotateZ(hh + calc(mm/12)deg)")

document.querySelector("#switch").addEventListener("click", function() {
    document.body.classList.toggle('light')
});
*/

$('.toggle, #switch').click(function(){
    $('body').toggleClass('light');
    if($('body').hasClass('light')) {
        $('label').css("left", "55px")
        $('.toggle').css("background-color", "#333")
    } else {
        $('label').css("left", "3px")
        $('.toggle').css("background-color", "white")
    }
    
})

$('.clockChange').mousedown(function() {
    $(this).css('box-shadow', '10px 10px 15px 0px rgba(0,0,0,0.75)');
})
$('.clockChange').mouseup(function() {
    $(this).css('box-shadow', '');
})

$('.clockChange').click(function(){
    //$('.all').css("display", "none")
    //$('#clock').css("display", "flex")
    $('body').toggleClass('digital')
    
    if($('body').hasClass('digital')) {
        $('.all').hide()
        $('#clock').fadeIn()
        //$('body').removeClass('digital')
        //$('body').addClass('analogic')
    } else /*if($('body').hasClass('analogic'))*/  {
        $('.all').fadeIn()
        $('#clock').hide()
       //$('body').removeClass('analogic')
        //$('body').addClass('digital')
    }

    var clock = document.getElementById("clock");
    var currentDay = document.getElementById("currentDay");
    function setHour() {

        var date = new Date()
        var hour = date.getHours()
        var min = date.getMinutes()
        var sec = date.getSeconds()
        hour = reset(hour)
        min = reset(min)
        sec = reset(sec)
    
        clock.innerHTML = hour + ":" + min + ":" + sec
    }

    setInterval(() => {
        setHour()
    }, 1000);

    function reset(k) {

        if (k < 10) {
            return "0" + k 
        } else {
            return k
        }
        }
})