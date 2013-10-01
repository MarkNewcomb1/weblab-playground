document.write('<h4>String Reversal</h4>');

var Reversal = function(string) {
    //start with an empty string object
  var object = '';
    /* for loop that makes the value of the
    index the length of the string minus 1 since computers count from 0...and as long as the index's value is greater than or equal to zero, not less than zero since zero here would be the letter "h", decrement the index*/
  for (var index = string.length - 1; index >= 0; index--){
      /* add to the object whatever the index of the string is, and since it's initialized NOT at zero and incremented BUT rather intialized at the length of the string and DECREMENTED, we're going backwards and returning the object*/
    object += string[index];
  }
    //return the object
  return object;
}
//essentially console.log
document.write('test 2: ' + Reversal('hello'));