(function(){
  'use strict';


  $(document).ready(function(){
      console.log('im ready');

    //Game Board Constructor
    function GameBoard (x, y){
      this.x = x;
      this.y = y;

      _.defaults(this, {
        player1: false, player2: false,
        obstacle: false, hazard: false,
        reward: false, med: false, end: false
      });


    }


//
//     var pos1_1 = new GameBoardPosition ({
//       x: 1,
//       y: 1,
//       obstacle: true
//     });
//
//     var pos2_1 = new GameBoardPosition ({
//       x: 2,
//       y: 1,
//     });
//
//     var pos3_1 = new GameBoardPosition ({
//       x: 3,
//       y: 1,
//     });
//
//     var pos4_1 = new GameBoardPosition ({
//       x: 4,
//       y: 1,
//     });
//
//     var pos1_2 = new GameBoardPosition ({
//       x: 1,
//       y: 2,
//     });
//
//     var pos1_3 = new GameBoardPosition ({
//       x: 1,
//       y: 3,
//     });
//
//     var pos1_4 = new GameBoardPosition ({
//       x: 1,
//       y: 4,
//     });
//
// function obstacle(gbPosition) {
//   this.x;
//   this.y;
// }

// (posnum + "").replace(/\./, "_")
// ( posw_ ).replace(/_/, "\.")

$('.pos1-1').css("background-image",
   "url('images/bg-stone.png')" );

function obstImov(x, y){
  $('.pos1-1').css("background-image",
     "url('images/bg-stone.png')" );
}



var game1Start = {
  x: 9,
  y: 6,
  player1Start: 1.6,
  player2Start: 9.2,
  obstImov: [6.1, 7.1, 8.1, 9.1, 8.2, 7.4, 7.6, 7.8, 5.4,
    1.5, 2.5],
  obstMov: [2.2, 2.3, 3.2, 3.3, 3.5, 5.5, 5.6, 8.4, 8.5],
  hazards: [],
  med: [4.2, 7.5, 9.2],
  end: 5.3

};

// Take width(x) and height(y) of gameboard and create divs
//   with class="box posx-y" 
function gbDivs(x, y) {
  var className;
  var box = "box";
  var i;
  var ind;
  if(x >= y ) {
    for( i=0; i < x; ++i){
      for(ind=0; ind < y; ++ind){
        className = "pos" + (i+1) + "-" + (ind+1);
      // var newDiv = $('div').addClass( className )
      //   .addClass("box");
      // console.log(className);

      $(".container").append("<div class=\'box " + className + "\'" + "></div>" );
      }
    }

  } else if ( y > x){
    className = 0;
    for( i=0; i < y; i++){
      for( ind=0; ind < x; ind++) {
        className = "pos" + (i+1) + "-" + (ind+1);

        $(".container").append("<div class=\'box " + className + "\'" + "></div>" );
      }
    }
  }
}

gbDivs(9,6);

function gameload(game) {
  if(game.obstImov) {
    _.each(game.obstImov, function(position){
      var posyString = toString(position - parseInt(position)).shift();
      var posy = Number(posxString);
      var posx = parseInt(position);
      var gbPosKeyName = "posx" + "_" + "posy";
      GameBoardPosition[gbPosKeyName] = true;
      obstImov(posx, posy);

    });
  } else if( 1 === 0) {

  } else if( 1 === 0) {

  } else {

  }

}












  });
})();
