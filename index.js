    // var choices = ["rock", "paper", "scissors"]

$(document).ready( function() {
  //Our code will go here
    $('.btn').on("click", function(){
      var id = this.id;
      switch(this.id) {
        case 'rock':
          rockChoice()
          
          break;
        case 'paper':
          paperChoice()
          break;
        case 'scissors':
          sciChoice()
          break;
      }

    })
    function rockChoice(){
          var choices = ["rock", "paper", "scissors"]
          var rand = choices[Math.floor(Math.random() * choices.length)];
          var r = "rock"
          $('#two').html("User: " + r + ' ' + "Computer: " + rand) 

          if (r == rand){
            $("#one").html("Its a tie")
          }
          if (rand == "scissors") {
            $("#one").html("You win")
          }
          if (rand == "paper"){
            $("#one").html("You Lose")
          }

    }


    function paperChoice(){
      var choices = ["rock", "paper", "scissors"]
      var rand = choices[Math.floor(Math.random() * choices.length)];
      var r = "paper"
      $('#two').html("User: " + r + ' ' + "Computer: " + rand) 

      if (r == rand){
        $("#one").html("Its a tie")
      }
      if (rand == "rock") {
        $("#one").html("You win")
      }
      if (rand == "scissors"){
        $("#one").html("You Lose")
      }

    }
    
    
    function sciChoice(){
      var choices = ["rock", "paper", "scissors"]
      var rand = choices[Math.floor(Math.random() * choices.length)];
      var r = "scissors"
      $('#two').html("User: " + r + ' ' + "Computer: " + rand) 

      if (r == rand){
        $("#one").html("Its a tie")
      }
      if (rand == "paper") {
        $("#one").html("You win")
      }
      if (rand == "rock"){
        $("#one").html("You Lose")
      }

    }



});
      
      