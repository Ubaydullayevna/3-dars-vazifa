const randomWorldEl = document.getElementById("random-word");
const inpuEl = document.getElementById("user-word");
const letScore = document.getElementById("score");
const timeEl = document.getElementById("time");
inpuEl.focus();

let randomWorld;
let userScore = 0;
let userTime = 10;
const changeWord = () => {
  const randomNumber = Math.trunc(Math.random() * words.length);
  randomWorld = words[randomNumber];
  randomWorldEl.textContent = randomWorld;
};
changeWord();

inpuEl.addEventListener("input", (e) => {
  const userWord = e.target.value;
  if (userWord == randomWorld) {
    changeWord();
    userScore++;
    userTime;
    letScore.textContent = userScore;
    inpuEl.value = "";
  }
});
const timeInterval = setInterval(() => {
  if (userTime > 0) {
    userTime--;
    timeEl.textContent = `${userTime}s`;
  } else {
    clearInterval(timeInterval);
  }
}, 1000);
