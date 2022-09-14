 
  function x() {
   var a = 10
    function y() {
      console.log(a);
    }
  y()
   a=100
  }

 var z =  x();
 console.log(z)
z()