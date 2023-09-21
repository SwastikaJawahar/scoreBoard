let homeButtoncount = 0 
let guestButtoncount =0
let scoreHomeEL = document.getElementById("scoreHome-el")
let scoreGuestEL = document.getElementById("scoreGuest-el")

function homeButton1() {      
    homeButtoncount += 1
    scoreHomeEL.innerText = homeButtoncount
}
function guestButton1(){
    guestButtoncount += 1
    scoreGuestEL.innerText = guestButtoncount
}
function homeButton2() {
    homeButtoncount += 2
    scoreHomeEL.innerText = homeButtoncount
}
function guestButton2(){
 guestButtoncount += 2
    scoreGuestEL.innerText = guestButtoncount   
}
function homeButton3() {
    homeButtoncount += 3
    scoreHomeEL.innerText = homeButtoncount
}
function guestButton3(){
 guestButtoncount += 3
    scoreGuestEL.innerText = guestButtoncount   
}
function newbutton(){
    guestButtoncount = 0
    homeButtoncount = 0
    scoreHomeEL.textContent =0
    scoreGuestEL.textContent =0
}