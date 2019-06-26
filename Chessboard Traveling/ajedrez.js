function ChessboardTraveling(str) {
    var x = str[1], y = str[3],
        a = str[6], b = str[8];
    var xDiff = a - x, yDiff = b - y;
    
    return recur(xDiff, yDiff);
    
    function recur(xDiff, yDiff) {
      if (yDiff === 0) { return 1; }
      if (xDiff === 0) { return 1; }
      
      return recur(xDiff - 1, yDiff) + recur(xDiff, yDiff - 1)
    }
  }
     
  console.log(ChessboardTraveling(23));