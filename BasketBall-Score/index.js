let homeScoreBtnOne = document.getElementById("plus-one");
let homeScoreBtnTwo = document.getElementById("plus-two");
let homeScoreBtnThree = document.getElementById("plus-three");
let homeStoreEl = document.getElementById("home-score");
let guestStoreEl = document.getElementById("guest-score");
let resetBtn = document.getElementById("reset");
let homeScore = 0;
let guestScore = 0;

function resetScore() {
    homeScore = 0;
    guestScore = 0;
    homeStoreEl.textContent = homeScore;
    guestStoreEl.textContent = guestScore;
}

resetBtn.addEventListener("click", resetScore);

function increaseHomeScoreOne() {
    homeScore += 1
    homeStoreEl.textContent = homeScore
}
function increaseHomeScoreTwo() {
    homeScore += 2
    homeStoreEl.textContent = homeScore
}
function increaseHomeScoreThree() {
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

function increaseGuestScoreOne() {
    guestScore += 1
    guestStoreEl.textContent = guestScore
}
function increaseGuestScoreTwo() {
    guestScore += 2
    guestStoreEl.textContent = guestScore
}
function increaseGuestScoreThree() {
    guestScore += 3
    guestStoreEl.textContent = guestScore
}
