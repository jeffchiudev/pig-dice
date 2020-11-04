// Business Logic
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// User Interface Logic
function displayScore() {
  return $(".userResults").text(rollDice());
}


$(document).ready(function () {
  $('#formOne').submit(function () {
    event.preventDefault();
    displayScore();
  })
});