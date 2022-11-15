const choices = ['rock', 'paper', 'scissors'];
const winners = [];

const game = () => {
    for (let i=1; i <= 5; i++) {
        playRound(i);
    }
    document.querySelector('.start-game').textContent = 'Play new Game'
    setWins();
}

const playRound = (round) => {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

const playerChoice = () => {
    let input = prompt(`Type Rock, Paper, or Scissors`)
    while (input === null) {
        input = prompt(`Type Rock, Paper, or Scissors`)
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
       input = prompt(`Only type Rock, Paper, or Scissors`);
       while (input === null) {
           input = prompt(`Type Rock, Paper, or Scissors`)
        }
        input = input.toLowerCase();
        check = validateInput(input);
    };
        return input;
}

const computerChoice = () => {
    return choices[Math.floor(Math.random()*choices.length)]
}

const validateInput = (choice) => {
    return choices.includes(choice);
};

const checkWinner = (choiceP, choiceC) => {
    if( choiceP === choiceC ) {
        return 'Tie';
    } else if (
        (choiceP === 'rock' && choiceC === 'scissors') ||
        (choiceP === 'paper' && choiceC === 'rock') ||
        (choiceP === 'scissors' && choiceC === 'paper')
        ) { 
            return 'Player';
        } else {
            return 'Computer';
        }
}

const setWins = () => {
    let playerWins = winners.filter(item => item === "Player").length;
    let computerWins = winners.filter(item => item === "Computer").length;
    let ties = winners.filter(item => item === "Tie").length;
    console.log('Results');
    console.log('Player Wins:', playerWins);
    console.log('Computer Wins:', computerWins);
    console.log('Ties:', ties);
}


const logRound = (playerChoice, computerChoice, winner, round) => {
    console.log('Round:', round);
    console.log('Player Chose:', playerChoice);
    console.log('Commputer Chose:', computerChoice);
    console.log(winner, 'won the round');
    console.log('--------------------');
}
