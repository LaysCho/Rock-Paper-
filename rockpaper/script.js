var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function converWord(letter){
  if(letter === "r") return "Камък";
  if(letter === "p") return "Хартия";
  return "Ножица";

}

function win(user, computer){
userScore++;
userScore_span.innerHTML = userScore;
compScore_span.innerHTML  =  compScore;
result_div.innerHTML  = converWord(user) + " побеждава " + converWord(computer) + ". Печелиш!";
document.getElementById(user).classList.add('green-glow');
setTimeout(function () {document.getElementById(user).classList.remove('green-glow')}, 250);
}


function lose(user, computer){
compScore++;
userScore_span.innerHTML = userScore;
compScore_span.innerHTML = compScore;
result_div.innerHTML =converWord(computer) + " побеждава " + converWord(user) + ". Губиш....";
document.getElementById(user).classList.add('red-glow');
setTimeout(function () {document.getElementById(user).classList.remove('red-glow')}, 250);
}

function draw(user){
  result_div.innerHTML = "Равенство...пробвай пак!";
  document.getElementById(user).classList.add('gray-glow');
  setTimeout(function () {document.getElementById(user).classList.remove('gray-glow')}, 250);

}
function  getComputerChoice(){
const choices = ['r', 'p', 's'];
const randomNumber = Math.floor(Math.random() * 3);
return choices[randomNumber];
};

function game(userChoice){
  const compChoice = getComputerChoice();
  switch (userChoice + compChoice) {
  case "rs":
  case "pr":
  case "sp":
      win(userChoice,compChoice);
    break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, compChoice);
    break;
    case "ss":
    case "rr":
    case "pp":
     draw(userChoice);
      break;
  }

};


rock_div.addEventListener('click', function () {
  game('r');
})
paper_div.addEventListener('click', function () {
game('p');
})
scissors_div.addEventListener('click', function () {
game('s');
})
