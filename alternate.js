//Small Icon Rotator for personal use
var iconList = ["fab fa-js fa-7x", "fab fa-php fa-7x", "fab fa-html5 fa-7x", "fas fa-code-branch fa-7x", "fas fa-user-astronaut fa-7x"];
var devIcon = document.getElementById('devIcons');
devIcon.className = iconList[0];
var listL = iconList.length;
/*
 0 = JS 
 1=php
 2=html
 3=git
 4 = astronaught
*/
var count = 0
var iconRotator = setInterval(function () {
    console.log(iconList[(++count) % listL]);
    devIcon.className = iconList[(++count) % listL];
}, 3000);

