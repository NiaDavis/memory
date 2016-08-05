$(document).ready(function() {
 //var memoryCardArray = ["A", "A", "B", "B","C","C","D", "D"];
   
   var num_tiles = 8;
   var tiles = [];
   for (var i= 0; i < num_tiles / 2; i++) {
     var $tile = $("<li></li>");
     $tile.html(i); // <li>0</li>...<li>1</li>...<li>i</li>
     $tile.addClass("tile");
     tiles.push($tile);
  }
  var shuffle = function(arr) {
      for (var i = 0; i < arr.length; i++) {
        var j = Math.floor(Math.random() * i);
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      return arr;
  };
  var shuffled_tiles = shuffle(tiles);
  for (var i= 0; i < num_tiles / 2; i++) {
   var $tile = $("<li></li>");
   $tile.html(i);
   $tile.addClass("tile");
   tiles.push($tile);
  }
   for(var i=0; i < tiles.length; i++) {
    $("#game-board").append(tiles[i])
   }
   var $first_clicked_tile, $second_clicked_tile;
   var pairs = 0;
   $(".tile").click(function() {
    if(!$first_clicked_tile) {
     $first_clicked_tile = $(this);
     $(this).addClass("selected");
    } else {
     $second_clicked_tile = $(this);
     if($first_clicked_tile.html() === $second_clicked_tile.html()) {
      $second_clicked_tile.addClass('selected');
      pairs++;
      } else  {
       $first_clicked_tile = null;
       $second_clicked_tile = null;
      }
      if(pairs === num_tiles / 2) {
       alert('You won!');
      }
    }
   });
    

});