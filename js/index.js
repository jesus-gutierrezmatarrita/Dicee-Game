const randomNumber1 = (Math.floor(Math.random() * 6)) + 1;
const randomNumber2 = (Math.floor(Math.random() * 6)) + 1;

//changing the img1 based on random number
const img1 = document.querySelector(".img1");
img1.src='images/dice' + randomNumber1 + '.png';

//changing the img2 based on random number
const img2 = document.querySelector(".img2");
img2.src='images/dice' + randomNumber2 + '.png';

//determine which player won
const title = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
    title.innerHTML = "Player 1 wins!";
    scorePlayer1 += 1;
    score1.innerHTML = scorePlayer1;
    
} else if (randomNumber1 < randomNumber2) {
    title.innerHTML = "Player 2 wins!";
} else {
    title.innerHTML = "Draw! Keep going, please!";
}