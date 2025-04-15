// Selecting the HTML element where the computer's choice will be displayed
const computerChoiceDisplay = document.getElementById("computer-choice");

// Selecting the HTML element where the user's choice will be displayed
const userChoiceDisplay = document.getElementById("user-choice");

// Selecting the HTML element where the result of the game will be displayed
const resultDisplay = document.getElementById("result");

// Selecting all button elements (Rock, Paper, Scissors choices)
const possibleChoices = document.querySelectorAll("button");

// Variables to store user and computer choices
let userChoice;
let computerChoice;
let result;

// Adding a click event listener to each button
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
        userChoice = e.currentTarget.id; // Get the ID of the clicked button (user's choice), after changinf from e.target.id to e.currentTarget.id / Ensures correct ID is picked
        userChoiceDisplay.innerHTML = userChoice; // Display the user's choice on the page

        generateComputerChoice(); // Call function to generate the computer's choice
        getResult();
    })
);

// Function to generate the computer's choice randomly
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1; // Generate a random number between 1 and 3
    console.log(randomNumber); // Log the random number for debugging

    // Assign a choice based on the random number
    if (randomNumber === 1) {   
        computerChoice = 'rock'; // If the number is 1, choose Rock
    }
    if (randomNumber === 2) {
        computerChoice = "paper"; // If the number is 2, choose Paper
    }
    if (randomNumber === 3) {
        computerChoice = "scissors"; // If the number is 3, choose Scissors
    }

    // Display the computer's choice on the page
    computerChoiceDisplay.textContent = computerChoice;
}
    function getResult(){
        if (computerChoice === userChoice){
            result = "It's a draw!";
        } else if (
        (computerChoice === "rock" && userChoice === "paper") ||
        (computerChoice === "paper" && userChoice === "scissors") ||
        (computerChoice === "scissors" && userChoice === "rock")
        ){
        result = "You win!";
        } else {
        result = "Your soul is mine";
        }       
        resultDisplay.textContent = result; // Update result display
    }

