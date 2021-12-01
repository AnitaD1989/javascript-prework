let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

if(randomNumber == 1){
  computerMove = 'kamień';
  
}   
    else if (randomNumber ==2) {
      computerMove = 'papier';
}   
    else if (randomNumber ==3)  {
          computerove = 'nozyce';
}

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

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

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
    else if(computerMove == 'papier' && playerMove == 'kamien'){
        printMessage('Przegrales!');
    }  
    else if(computerMove == 'nozyce' && playerMove == 'kamien') {
        printMessage('you win!');
    }
    else if (computerMove == 'kamien' && playerMove == 'nozyce'){
        printMessage('Przegrales!');
    }
    else if (computerMove == playerMove){
            printMessage('Remis!');
        }
    else {
        printMessage('nieznany ruch');
    }
    


  

