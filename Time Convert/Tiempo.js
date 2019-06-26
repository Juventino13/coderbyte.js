function TimeConvert(num) { 
    var horas = Math.floor(num/60);
    var minutos = num % 60;
    var str = horas + ":" + minutos;
    return str;
      
  }
     
  console.log(TimeConvert(23));