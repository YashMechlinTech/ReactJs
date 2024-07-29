let userScore = 0;
let compScore = 0;
let message = document.querySelector("#message");
let messageContainer = document.querySelector(".msg-container");
const choices = document.querySelectorAll(".choice");

let usermarks = document.querySelector("#user-score");
let compmarks = document.querySelector("#computer-score");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const Userchoice = choice.getAttribute("id"); //getting the choice id
    playGame(Userchoice);
  });
}); //getting all the buttons and on click we are doing something
const GenreateComputerChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);
  return options[index];
};

//upating the User scores

UpdateScores = (userWin) => {
  if (userWin) {
    message.innerText = "you won ";
    message.style.backgroundColor = "green";
    userScore = userScore + 1;
    usermarks.innerText = `${userScore}`;
  } else {
    message.innerText = "You lose";
    message.style.backgroundColor = "red";
    compScore = compScore + 1;
    compmarks.innerText = `${compScore}`;
  }
};

const playGame = (Userchoice) => {
  console.log("User choice:", Userchoice);
  let userWin = true;
  const computerChoice = GenreateComputerChoice();
  console.log("computer choice:", computerChoice);
  if (Userchoice == computerChoice) {
    message.innerText = "Game was draw";
    message.style.backgroundColor = "yellow";
    message.style.color = "black";
    return;
  } else if (Userchoice == "rock") {
    userWin = computerChoice === "scissors" ? true : false;
  } else if (Userchoice == "paper") {
    userWin = computerChoice === "scissors" ? false : true;
  } else {
    userWin = computerChoice === "paper" ? true : false;
  }

  UpdateScores(userWin);
};
