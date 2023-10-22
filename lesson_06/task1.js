function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  function playGame() {
    let player1Total = 0;
    let player2Total = 0;
  
    for (let i = 0; i < 3; i++) {
      let player1Roll = rollDice();
      let player2Roll = rollDice();
  
      console.log("Player 1 rolled: " + player1Roll);
      console.log("Player 2 rolled : " + player2Roll);
  
      player1Total += player1Roll;
      player2Total += player2Roll;
    }
  
    console.log("The sum of the dice rolls of Player 1: " + player1Total);
    console.log("The sum of the dice rolls of Player 2: " + player2Total);
  
    if (player1Total > player2Total) {
      console.log("Player 1 won!");
    } else if (player2Total > player1Total) {
      console.log("Player 2 won!");
    } else {
      console.log("This game was played to a draw!");
    }
  }
  
  playGame();
  
  