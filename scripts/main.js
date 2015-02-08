(function(){
  'use strict';


  $(document).ready(function(){
      console.log('im ready');

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
       console.log(divClass);
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
  this.status = option.status;
  this.startPosition = option.startPosition;
};

Character.prototype.loadPlayer = function(){
  if(this.startPosition !== undefined || this.startPosition !== []){
    var posPlayer = (this.startPosition).split("_");

    var x = posPlayer[0];
    var y = posPlayer[1];
    // console.log("x is: " + x + " y is: " + y);
     var divClass = "\.pos" + x + "-" + y;
     console.log("this is player 1 pos: " + divClass);
  // $('.container').find('div' + '.' + divClass).hasClass(divClass);
    $(divClass).css("background",
      this.playerColor );

  } else{
          return;
  }

};

var hulk = new Character({
  name: 'Hulk',
  playerColor: 'green',
  specialPower: "strength",
  status: "",
  startPosition: "1_6"
});

var gandalf = new Character({
  name: "Gandalf",
  playerColor: "gray",
  specialPower: "stun spell",
  status: "",
  startPosition: '1_6'
});

var toto= new Character({
  name: "Toto",
  playerColor: "#262626",
  specialPower: "fast",
  status: "",
  startPosition: '1_6'
});

var wolf = new Character({
  name: "Big Bad Wolf",
  playerColor: "#1d1f21",
  specialPower: "pack power\, regenerates",
  status: "",
  startPosition: '9_2'
});

var dvader = new Character({
  name: "Darth Vader",
  playerColor: "black",
  specialPower: "evil stare\, kills from a distance",
  status: "",
  startPosition: '9_2'
});

var witch = new Character({
  name: "Wicked Witch",
  playerColor: "#006f38",
  specialPower: "pack power\, regenerates",
  status: "",
  startPosition: '9_2'
});

witch.loadPlayer();
toto.loadPlayer();





// (posnum + "").replace(/\./, "_")
// ( posw_ ).replace(/_/, "\.")

//Now that divs exist assign obstacles, hazards, players, med
// and end to correct positions.
// Start appropriate listeners for those positions










  });
})();
