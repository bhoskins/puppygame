(function(){
  'use strict';


  $(document).ready(function(){
      // console.log('im ready');

      var width;
      var height;

    //Game Board Constructor
    var GameBoard = function(option){
      this.x = option.x;
      this.y = option.y;
      this.player1Start = option.player1Start;
      this.player2Start = option.player2Start;
      this.obstImov = option.obstImov;
      this.obstImovImg = option.obstImovImg;
      this.obstMov = option.obstMov;
      this.hazards = option.hazards;
      this.meds = option.meds;
      this.goals = option.goals;

      // _.defaults(this, {
      //   player1: false, player2: false,
      //   obstacle: false, hazard: false,
      //   reward: false, med: false, end: false
      // };


    };

GameBoard.prototype.loadMeds = function(){
  _.each(this.meds, function(ele, i, list){
    if(ele !== undefined || ele !== []){
      var posArr = ele.split("_");

      var x = posArr[0];
      var y = posArr[1];
      // console.log("x is: " + x + " y is: " + y);
       var divClass = "\.pos" + x + "\-" + y;
      //  console.log(divClass);
      //  var $divTarget = $('div').attr('class', divClass);
      //  console.log($divTarget);
      //  $divTarget.css("background-color",
      //   " red ");
      $(divClass).css("background", "red");


    } else{
            return;
    }
  });
};




// (posnum + "").replace(/\./, "_")
// ( posw_ ).replace(/_/, "\.")




var game1 = new GameBoard({
  x: 9,
  y: 6,
  player1Start: "1_6",
  player2Start: "9_2",
  obstImov: ["6_1", "7_1", "8_1", "9_1", "8_2", "4_3", "6_3",
              "8_3", "5_4", "1_5", "2_5"],
  obstImovImg: 'images\/bg-stone.png',
  obstImovColor: "\#333",
  obstMov: ["2_2", "2_3", "3_2", "3_3", "3_5", "5_5", "5_6", "8_4", "8_5"],
  hazards: [],
  meds: ["4_2", "7_5"],
  goals: ["5_3"],

});




// Take width(x) and height(y) of gameboard and create divs
//   with class="box posx-y"
function gbDivs(x, y) {
  var className;
  var box = "box";
  var i;
  var ind;
  if(x >= y ) {
    for(ind=0; ind < y; ind++){
      for( i=0; i < x; i++){

        className = "pos" + (i+1) + "-" + (ind+1);
      // var newDiv = $('div').addClass( className )
      //   .addClass("box");
      // console.log(className);

      $(".container").append("<div class=\'box " + className + "\'" + "></div>" );


      }

    }

  } else if ( y > x){
    className = 0;
    for( ind=0; ind < x; ind++) {
      for( i=0; i < y; i++){

        className = "pos" + (i+1) + "-" + (ind+1);

        $(".container").append("<div class=\'box " + className + "\'" + "></div>" );
      }
    }
  }
}

width = game1.x;
height = game1.y;
gbDivs(game1.x, game1.y);

game1.loadMeds();




function loadObstacleImov(arr) {
  _.each(arr, function(ele, i, list){
    if(ele !== undefined || ele !== []){
      var posArr = ele.split("_");

      var x = posArr[0];
      var y = posArr[1];
      // console.log("x is: " + x + " y is: " + y);
       var divClass = "pos" + x + "-" + y;
      //  console.log(divClass);
       $('.container').find('div' + '.' + divClass).hasClass(divClass);
      $('div' + '\.' + divClass).css("background",
        "url('images/bg-stone.png') #333 repeat top left");

    } else{
            return;
    }
  });
}

loadObstacleImov(game1.obstImov);
// console.log(game1.obstImov);

function loadObstacleMov(arr) {
  _.each(arr, function(ele, i, list){
    if(ele !== undefined || ele !== []){
      var posArr = ele.split("_");

      var x = posArr[0];
      var y = posArr[1];
      // console.log("x is: " + x + " y is: " + y);
       var divClass = "pos" + x + "\-" + y;
      //  console.log(divClass);
      //  $('.container').find('div' + '\.' + divClass).hasClass(divClass);
      $('div' + '\.' + divClass).css("background",
        "url('images/bg-foliage.png') #a8ff60 repeat top left");

    } else{
            return;
    }
  });
}

loadObstacleMov(game1.obstMov);

function loadHazards(arr) {
  _.each(arr, function(ele, i, list){
    if(ele !== undefined || ele !== []){
      var posArr = ele.split("_");

      var x = posArr[0];
      var y = posArr[1];
      // console.log("x is: " + x + " y is: " + y);
       var divClass = "pos" + x + "\-" + y;
      //  console.log(divClass);
    $('.container').find('div' + '\.' + divClass).hasClass(divClass);
      $('div' + '\.' + divClass).css("background",
        " #f7dfe3 ");

    } else{
            return;
    }
  });
}

loadHazards(game1.hazards);

// function loadMeds(arr) {
//   _.each(arr, function(ele, i, list){
//     if(ele !== undefined || ele !== []){
//       var posArr = ele.split("_");
//
//       var x = posArr[0];
//       var y = posArr[1];
//       // console.log("x is: " + x + " y is: " + y);
//        var divClass = "pos" + x + "\-" + y;
//       //  console.log(divClass);
//     $('.container').find('div' + '\.' + divClass).hasClass(divClass);
//       $('div' + '\.' + divClass).css("background",
//         " #ff0000 ");
//
//     } else{
//             return;
//     }
//   });
// }

// loadMeds(game1.meds);


var Character = function(option){

  this.name = option.name;
  this.playerColor = option.playerColor;
  this.specialPower = option.specialPower;
  this.isPlayer = option.isPlayer;
  this.isActive = option.isActive;
  this.startPosition = option.startPosition;
  this.currentPosition = option.currentPosition;
};

Character.prototype.loadPlayer = function(){
  if(this.startPosition !== undefined || this.startPosition !== []){
    var posPlayer = (this.startPosition).split("_");

    var x = posPlayer[0];
    var y = posPlayer[1];
    // console.log("x is: " + x + " y is: " + y);
     var divClass = "\.pos" + x + "-" + y;
    //  console.log("this is player 1 pos: " + divClass);
  // $('.container').find('div' + '.' + divClass).hasClass(divClass);
    $(divClass).css("background",
      this.playerColor );



  } else{
          return;
  }

};

// player selects a hero and a villain.
//villian is set to activePlayer;
// at end of turn activePlayer changed to hero and
//   playerTurn() called for activePlayer.

function posToDivClass(pos){

  var divClassNum = pos.replace(/\_/, "\-");
  var divClass = ".pos" + divClassNum;
  return divClass;
}

function getPosXY(pos){
  var posSplit = pos.split("_");
  var x = posSplit[0];
  var y = posSplit[1];
  var coord = [x, y];
  return coord;
}

function divClassToPos(item){
  var posPre = item.replace(/-/, "\_");
  var pos = posPre.substr(4, 3);
  return pos;
}

Character.prototype.changeTurn = function(){
  var prevPlayer = activePlayer;
  activePlayer = inactivePlayer;
  prevPlayer = inactivePlayer;
  activePlayer.playerTurn();
  console.log("active player after changeTurn is: " + activePlayer);
};

Character.prototype.playerTurn = function(){
  var posPlayer = (activePlayer.currentPosition).split("_");

  var x = posPlayer[0];
  var y = posPlayer[1];

  var divClassNum = (activePlayer.startPosition).replace(/_/, "-");
  var divClass = ".pos" + divClassNum;

  // 5 possible moves:
  // stay at current positon  stay
  $(divClass).css("border", "2px solid blue");

//(x+1), y  if x+1 <= width step right
  var stepRightx = parseInt(x) + 1;
//step right pos and divClass
    var divClassStepRight = ".pos" + stepRightx + "-" + y;
    var posStepRight = divClassToPos(divClassStepRight);
    console.log('posStepRight ' + posStepRight);
//step left pos and divClass
    var stepLeftx = parseInt(x) - 1;
      var divClassStepLeft = ".pos" + stepLeftx + "-" + y;
      var posStepLeft = divClassToPos(divClassStepLeft);
//step up pos and divClass
      var stepUpy = parseInt(y) - 1;

      var divClassStepUp = ".pos" + x + "-" + stepUpy;
      var posStepUp = divClassToPos(divClassStepUp);
// step down pos and divClass
      var stepDowny = parseInt(y) + 1;
      var divClassStepDown = ".pos" + x + "-" + stepDowny;
      var posStepDown = divClassToPos(divClassStepDown);

    var testobstImov = _.contains(game1.obstImov, posStepRight);

    if (stepRightx <= width && testobstImov !== true){
      $(divClassStepRight).css("border", "2px solid blue");

      $(divClassStepRight).on("click", function(){
        activePlayer.currentPosition = posStepRight;
        $(divClassStepRight).css("background", activePlayer.playerColor);
        $(divClass).css({
          "background": "initial",
          "border": "none"
        });
        console.log('divclassstepright ' + divClassStepRight);
        console.log('divClass ' + divClass);
        $(divClassStepRight).css("border", "none");
        $(divClassStepLeft).css("border", "none");
        $(divClassStepUp).css("border", "none");
        $(divClassStepDown).css("border", "none");
        $(divClassStepRight).off();

        activePlayer.changeTurn();

      });
  }

// step left
    testobstImov = _.contains(game1.obstImov, posStepLeft);

  if(stepLeftx > 0 && testobstImov !==true){
    $(divClassStepLeft).css("border", "2px solid blue");

    $(divClassStepLeft).on("click", function(){
      activePlayer.currentPosition = posStepLeft;
      $(divClassStepLeft).css("background", activePlayer.playerColor);
      $(divClass).css("background", "initial");
      $(divClass).off();
      $(divClass).css("border", "none");
      $(divClassStepRight).css("border", "none");
      $(divClassStepLeft).css("border", "none");
      $(divClassStepUp).css("border", "none");
      $(divClassStepDown).css("border", "none");

      activePlayer.changeTurn();

    });
  }

// step up

    testobstImov = _.contains(game1.obstImov, posStepUp);

    if(stepUpy > 0 && testobstImov !== true ){
      $(divClassStepUp).css("border", "2px solid blue");

      $(divClassStepUp).on("click", function(){
        activePlayer.currentPosition = posStepUp;
        $(divClassStepUp).css("background", activePlayer.playerColor);
        $(divClass).css("background", "initial");
        $(divClass).off();
        $(divClass).css("border", "none");
        $(divClassStepRight).css("border", "none");
        $(divClassStepLeft).css("border", "none");
        $(divClassStepUp).css("border", "none");
        $(divClassStepDown).css("border", "none");

        activePlayer.changeTurn();

      });
    }



// step down

    testobstImov = _.contains(game1.obstImov, posStepDown);
    if(stepDowny <= height && testobstImov !== true ){
      $(divClassStepDown).css("border", "2px solid blue");

      $(divClassStepDown).on("click", function(){
        activePlayer.currentPosition = posStepDown;
        $(divClassStepDown).css("background", activePlayer.playerColor);
        $(divClass).css("background", "initial");
        $(divClassStepDown).off();
        $(divClass).css("border", "none");
        $(divClassStepRight).css("border", "none");
        $(divClassStepLeft).css("border", "none");
        $(divClassStepUp).css("border", "none");
        $(divClassStepDown).css("border", "none");


        activePlayer.changeTurn();

      });
  }
};



// obstImov, obstMov, hazards, meds, goals








var hulk = new Character({
  name: 'Hulk',
  playerColor: 'green',
  specialPower: "strength",
  isPlayer: false,
  isActive: false,
  startPosition: "1_6",
  currentPosition: '1_6',
});

var gandalf = new Character({
  name: "Gandalf",
  playerColor: "gray",
  specialPower: "stun spell",
  isPlayer: false,
  isActive: false,
  startPosition: '1_6',
  currentPosition: '1_6',
});

var toto= new Character({
  name: "Toto",
  playerColor: "#262626",
  specialPower: "fast",
  isPlayer: false,
  isActive: false,
  startPosition: '1_6',
  currentPosition: '1_6',
});

var player2 = new Character({
  name: "Player 2",
  playerColor: "purple",
  specialPower: "",
  isPlayer: false,
  isActive: false,
  startPosition: '9_2',
  currentPosition: '9_2',
});

var wolf = new Character({
  name: "Big Bad Wolf",
  playerColor: "#1d1f21",
  specialPower: "pack power\, regenerates",
  isPlayer: true,
  isActive: true,
  startPosition: '9_2',
  currentPosition: '9_2',
});

var vader = new Character({
  name: "Darth Vader",
  playerColor: "black",
  specialPower: "evil stare\, kills from a distance",
  IsPlayer: false,
  isActive: true,
  startPosition: '9_2',
  currentPosition: '9_2',
});

var witch = new Character({
  name: "Wicked Witch",
  playerColor: "#006f38",
  specialPower: "pack power\, regenerates",
  isPlayer: false,
  isActive: true,
  startPosition: '9_2',
  currentPosition: '9_2',
});

// witch.loadPlayer();
// toto.loadPlayer();

var activePlayer;
var inactivePlayer;


$('#Gandalf').on("click", function (){
  inactivePlayer = gandalf;
  gandalf.isActive = false;
  gandalf.isPlayer = true;
  hulk.isPlayer = false;
  hulk.isActive = false;
  toto.isPlayer = false;
  toto.isActive = false;
  // console.log(gandalf.isPlayer);
  // console.log(gandalf.isActive);
});

$('#Hulk').on("click", function (){
  inactivePlayer = hulk;
  hulk.isActive = false;
  hulk.isPlayer = true;
  gandalf.isPlayer = false;
  gandalf.isActive = false;
  toto.isPlayer = false;
  toto.isActive = false;
});

$('#Toto').on("click", function (){
  inactivePlayer = toto;
  toto.isActive = false;
  toto.isPlayer = true;
  gandalf.isPlayer= false;
  gandalf.isActive = false;
  hulk.isPlayer = false;
  hulk.isActive = false;
});

$('#wolf').on("click", function (){
  activePlayer = wolf;
  wolf.isActive = true;
  wolf.isPlayer= true;
  vader.isPlayer = false;
  vader.isActive = false;
  witch.isPlayer = false;
  witch.isActive = false;
});

$('#vader').on("click", function (){
  activePlayer = vader;
  vader.isActive = true;
  vader.isPlayer = true;
  wolf.isPlayer= false;
  wolf.isActive = false;
  witch.isPlayer = false;
  witch.isActive = false;
});

$('#witch').on("click", function (){
  activePlayer = witch;
  witch.isActive = true;
  witch.isPlayer = true;
  wolf.isPlayer= false;
  wolf.isActive = false;
  vader.isPlayer = false;
  vader.isActive = false;
});

$('#computer-game').on("click", function(){

});

$('#player-game').on("click", function(){
  activePlayer = player2;
  player2.isActive = true;
  player2.isPlayer = true;
  wolf.isActive = false;
  wolf.isPlayer= false;
  vader.isPlayer = false;
  vader.isActive = false;
  witch.isPlayer = false;
  witch.isActive = false;
});

$('.start-game').on("click", function(event){
  event.preventDefault();


  $('.game-selection-wrap').css({
    "display": "none",
    "visibility": "hidden",
    "z-index": "-10"
  });

  $('.gameboard-wrap').css("visibility", "visible");

  activePlayer.loadPlayer();
  inactivePlayer.loadPlayer();

  activePlayer.playerTurn();
  // console.log(activePlayer);
  // console.log(inactivePlayer);

});








// (posnum + "").replace(/\./, "_")
// ( posw_ ).replace(/_/, "\.")

//Now that divs exist assign obstacles, hazards, players, med
// and end to correct positions.
// Start appropriate listeners for those positions










  });
})();
