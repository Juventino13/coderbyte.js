function SimpleSymbols(str) {
    var re = /^[a-zA-Z]/;
    var re2 = /[^+][a-zA-Z]/;
    var re3 = /[a-zA-Z][^+]/;
    var output;
    if (re.test(str)) {
      output = "false";
    } else if (re2.test(str)) {
      output = "false";
    } else if (re3.test(str)) {
      output = "false";
    } else {
      output = "true";
    }
    return output;
  
    // code goes here  
    return str; 
           
  }
     
  // keep this function call here 
  // to see how to enter arguments in JavaScript scroll down
  console.log(SimpleSymbols("+d+=3=+s+"));