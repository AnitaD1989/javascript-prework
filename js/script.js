
{
function playGame (playerInput) { 
    const getMoveName= function (choiceNumber) {
        if(choiceNumber == 1) return 'kamien';
        if(choiceNumber == 2) return 'papier';
        if(choiceNumber == 3) return 'nozyce';
    }

    const displayResult= function(argComputerMove, argPlayerMove) {
        if ((argComputerMove == 'kamien' && argPlayerMove == 'papier') || 
            (argComputerMove == 'papier' && argPlayerMove == 'nozyce') || 
            (argComputerMove == 'nozyce' && argPlayerMove == 'kamien')) {
            printMessage('Ty wygrywasz!');
        }
        else if (argComputerMove == argPlayerMove) {
            printMessage('Remis!');
        }
        else {
            printMessage('Ty przegrałeś!');
        }
    }
   
    // czyścimy stare komunikaty z HTML-a
    clearMessages();

    // losujemy wybór gracza (w formie liczbowej) np. 1, 2, 3
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    // konwertujemy wybory gracza i komputera z liczb na zapis tekstowy, czyli np. 1 -> kamien
    const playerMove = getMoveName(playerInput); 
    const computerMove = getMoveName(randomNumber);

    // sprawdż kto wygrał i zapisz tę informację w HTML-u
    displayResult(playerMove, computerMove);
}

document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(3);
});

let playerScore, computerScore = 0;

function playGame (playerInput) { 

    const getMoveName= function (choiceNumber) {
        if(choiceNumber == 1) return 'kamien';
        if(choiceNumber == 2) return 'papier';
        if(choiceNumber == 3) return 'nozyce';
    }

    function displayResult(argComputerMove, argPlayerMove) {
        if ((argComputerMove == 'kamien' && argPlayerMove == 'papier') || 
            (argComputerMove == 'papier' && argPlayerMove == 'nozyce') || 
            (argComputerMove == 'nozyce' && argPlayerMove == 'kamien')) {
            printMessage('Ty wygrywasz!');
            playerScore++;
        }
        else if (argComputerMove == argPlayerMove) {
            printMessage('Remis!');
        }
        else {
            printMessage('Ty przegrałeś!');
            computerScore++;
        }
        printMessage('Player ' + playerScore + ' : ' + computerScore + ' Computer');
    }
   
    // czyścimy stare komunikaty z HTML-a
    clearMessages();

    // losujemy wybór gracza (w formie liczbowej) np. 1, 2, 3
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    // konwertujemy wybory gracza i komputera z liczb na zapis tekstowy, czyli np. 1 -> kamien
    const playerMove = getMoveName(playerInput); 
    const computerMove = getMoveName(randomNumber);

    // sprawdż kto wygrał i zapisz tę informację w HTML-u
    displayResult(playerMove, computerMove);
}

document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(3);
});


}
