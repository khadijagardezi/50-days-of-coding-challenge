for (let i = 1; i <= 10; i++) {
    return(i);
  }
  
  function printTable(n) {
    for (let i = 1; i <= 10; i++) {
      let tab = n + " * " + i + " = " + n * i;
      return tab;
    }
    console.log(printTable(5));
   }
  