$(document).ready(function(){
    //Default player turn
    var pTurn="X"
    var turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
    //Default AI turn
    var cTurn = "O";
    var gameOn = false;
    var count = 0;

    //Change players Default
    $('#turnX').click(function(){
        pTurn = "X";
        cTurn = "O";
        $('#turnX').removeClass("btn-primary");
        $('#turnX').addClass("btn-danger");
        $('#turnO').removeClass("btn-danger");
        $('#turnO').addClass("btn-primary");
        $('#selection').html("Player Selection: "+pTurn);
        reset();
    });
    $('#turnO').click(function(){
        pTurn = "O";
        cTurn = "X";
        $('#turnO').removeClass("btn-primary");
        $('#turnO').addClass("btn-danger");
        $('#turnX').removeClass("btn-danger");
        $('#turnX').addClass("btn-primary");
        $('#selection').html("Player Selection: "+pTurn);
        reset();
    });

    function computerTurn(){
      //used to break while loop
      var taken = false;
      while (!taken && count!==5) {
        //generate computers random turns
        var cMove = (Math.random()*10).toFixed();
        var move= $('#'+cMove).text();
        if(move === "#"){
          $('#'+cMove).text(cTurn);
          taken = true;
          turns[cMove] = cTurn;
        }
      }
    }

    function playerTurn(turn, id){
      var spotTaken = $("#"+id).text();
      if(spotTaken === "#"){
        count++;
        turns[id] = turn;
        $('#'+id).text(turn);
        winCondition(turns, pTurn);
        if(!gameOn){
          computerTurn();
          winCondition(turns, cTurn);
        }
      }
    }

    function winCondition(turArr, currentTurn){
      //TOP HORIZONTAL
      if(turArr[0]=== currentTurn && turArr[1]=== currentTurn && turArr[2]===currentTurn){
        gameOn = true;
        $('#winner').html(currentTurn);
        //MIDDLE HORIZONTAL
      }else if(turArr[3]=== currentTurn && turArr[4]=== currentTurn && turArr[5]===currentTurn){
        gameOn = true;
        $('#winner').html(currentTurn);
        //BOTTOM HORIZONTAL
      }else if(turArr[6]=== currentTurn && turArr[7]=== currentTurn && turArr[8]===currentTurn){
        gameOn = true;
        $('#winner').html(currentTurn);
        //FIRST COLUMN
      }else if(turArr[0]=== currentTurn && turArr[3]=== currentTurn && turArr[6]===currentTurn){
        gameOn = true;
        $('#winner').html(currentTurn);
        //SECOND COLUMN
      }else if(turArr[1]=== currentTurn && turArr[4]=== currentTurn && turArr[7]===currentTurn){
        gameOn = true;
        $('#winner').html(currentTurn);
        //THIRD COLUMN
      }else if(turArr[2]=== currentTurn && turArr[5]=== currentTurn && turArr[8]===currentTurn){
        gameOn = true;
        $('#winner').html(currentTurn);
        // THIS ---> \
      }else if(turArr[0]=== currentTurn && turArr[4]=== currentTurn && turArr[8]===currentTurn){
        gameOn = true;
        $('#winner').html(currentTurn);
        //THIS ---> /
      }else if(turArr[2]=== currentTurn && turArr[4]=== currentTurn && turArr[6]===currentTurn){
        gameOn = true;
        $('#winner').html(currentTurn);
      }else {
        gameOn= false;
      }
    }

    $('.tic').click(function(){
        var slot = $(this).attr('id');
        playerTurn(pTurn, slot);
    });
    function reset(){
      turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"]
      count=0;
      $('.tic').text('#');
      gameOn=true;
    }
});
