function PrimerFactorial(num) { 
  
    if (num === 0 || num === 1) {
      return 1;
    }
    else {
       return num * PrimerFactorial(num - 1); 
    }      
  }
     
  console.log(PrimerFactorial(8));
