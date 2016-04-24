// document.addEventListener("DOMContentLoaded", function () {
  var player1 = document.getElementById("player1_strip");
  console.log(player1);
  var player2 = document.getElementById("player2_strip");
  console.log(player2);

  var player1_items = player1.querySelectorAll("td")
  var player2_items = player2.querySelectorAll("td")
  console.log(player1_items)

// find the code for the pressed key
  document.onkeyup = function(e){
    console.log(e.which);
  };

// Start state of the game

function startGame(playerItems){
  for(var i = 0; i < playerItems.length; i++ ){
    // console.log(playerItems[i])
    playerItems[i].className = "";
    playerItems[0].className = "active";
  };
};
startGame(player1_items);
startGame(player2_items);

// });
