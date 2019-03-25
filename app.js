let userScore = 0;
let computerScore = 0;

//These are DOM variables below with their HTML tag type:
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");

//Now  getting the rock, paper, scissor buttons:
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//Now we have cached the DOM:
//Caching: storing something for future use. Basically means storing all of these things
// in variables so that we can sue them later.

//Adding event listerners to each of the buttons:rock, paper , scissors:


function getComputerChoice (){
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber]
}



function convertToWord(letter){
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}


function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord}  beats ${convertToWord(computerChoice)} ${smallCompWord}. You win! `;

}

function lose(userChoice, computerChoice){
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} loses to ${convertToWord(computerChoice)} ${smallCompWord}. You lost! `;
}

function draw(userChoice, computerChoice){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord}  equals to ${convertToWord(computerChoice)} ${smallCompWord}. It's a draw! `;
}


function game(userChoice){
 const computerChoice = getComputerChoice();
 // console.log("user choice => " + userChoice);
 // console.log("computer choice => " + computerChoice);

 //Will use switch statements instead of if-else:

  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
     win(userChoice, computerChoice);
     break;
    case "rp":
    case "ps":
    case "sr":
     lose(userChoice, computerChoice);
     break;
    case "rr":
    case "pp":
    case "ss":
     draw(userChoice, computerChoice);
     break;
  }

}


function main(){
  rock_div.addEventListener("click", function(){
    game("r");
  });

  paper_div.addEventListener("click", function(){
    game("p");
  });

  scissors_div.addEventListener("click", function(){
    game("s");
  });
}

main();
