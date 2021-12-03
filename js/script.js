function playGame(playerInput){
    clearMessages();
    
    let getMoveName = playerMove && computerMove (playerInput && randomNumber);
    
    if (randomNumber && playerInput == '1'){
    getMoveName = 'kamien';
    }
        else if (randomNumber && playerInput == '2'){
        getMoveName = 'papier';
    }
        else if (randomNumber && playerInput == '3'){
        getMoveName = 'nozyce';
    }
        else {
            getMoveName = 'nieznany ruch';
        }
    

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    
    console.log('Wylosowana liczba to: ' + randomNumber);
    
    let computerMove = getMoveName(randomNumber);
/*
if(randomNumber == 1){
  computerMove = 'kamień';
  
}   
    else if (randomNumber ==2) {
      computerMove = 'papier';
}   
    else if (randomNumber ==3)  {
          computerMove = 'nozyce';
}
*/
/*
    let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);
/*;
/*
if(playerInput == '1'){
  playerMove = 'kamień';
}
    else if (playerInput=='2'){
        playerMove = 'papier';
    }

    else if (playerInput=='3'){
        playerMove = 'nozyce'
    }

    printMessage('Twój ruch to: ' + playerMove);   
    */ 

    displayResult (argComputerMove && argPlayerMove)
    console.log('moves:', argComputerMove, argPlayerMove);

        if( argComputerMove == 'kamien' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz!');
        }
        else if(argComputerMove == 'papier' && argPlayerMove == 'kamien'){
            printMessage('Przegrales!');
        }  
        else if(argComputerMove == 'nozyce' && argPlayerMove == 'kamien') {
            printMessage('you win!');
        }
        else if (argComputerMove == 'kamien' && argPlayerMove== 'nozyce'){
            printMessage('Przegrales!');
        }
        else if (argComputerMove == argPlayerMove){
            printMessage('Remis!');
        }
        else {
         printMessage('nieznany ruch');
        }

        document.getElementById('play-rock').addEventListener('click', function(){
            playGame(1);
          });
        ​document.getElementById('play-paper').addEventListener('click', function(){
            playGame(2);
          });
        document.getElementById('play-scissors').addEventListener('click', function(){
            playGame(3);
          });
          ​
    
}



  

