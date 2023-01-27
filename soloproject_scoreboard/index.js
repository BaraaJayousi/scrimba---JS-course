let homeScoreEL = document.getElementById("home-score-el")
let guestScoreEL = document.getElementById("guest-score-el")

let homeScore = 0
let guestScore = 0

function add1home(){
    homeScore ++
    homeScoreEL.textContent = homeScore
}
function add2home(){
    homeScore +=2
    homeScoreEL.textContent = homeScore
}
function add3home(){
    homeScore +=3
    homeScoreEL.textContent = homeScore
}

function add1guest(){
    guestScore ++
    guestScoreEL.textContent = guestScore
}
function add2guest(){
    guestScore +=2
    guestScoreEL.textContent = guestScore
}
function add3guest(){
    guestScore +=3
    guestScoreEL.textContent = guestScore
}

function NewGame(){
    homeScore = 0
    guestScore = 0
    homeScoreEL.textContent = homeScore;
    guestScoreEL.textContent = guestScore;
}