document.write("<h4>Making Change</h4>");

var MakingChange= function(number) {

var userCents = prompt("Please enter the number of cents as number: ");
var userDollars = prompt("Please enter the number of dollars as a number: ");
var dollars = parseInt(userDollars);
var cents = parseInt(userCents);
var quarters = cents / 25;
var dimes = (cents % 25) / 10;
var nickels = ((cents % 25) % 10) / 5;
var pennies = cents % 5;
var hundreds = dollars / 100;
var fifties = (dollars % 100) / 50;
var twenties = ((dollars % 100) / 50) / 20;
var tens = (((dollars % 100) / 50) / 20) / 10;
var fives = ((((dollars % 100) / 50) / 20) / 10) / 5;
var ones = dollars % 5;
document.write("cents + dollars + " your change is: " + quarters + " quarter(s)" + dimes + " dime(s)" + nickels + " nickel(s)" + pennies + " pennies/penny and" + hundreds + " hundred(s)" + fifties + " fifties/fifty" + twenties + " twenties/twenty" + tens + " ten(s)" + fives + " five(s)" + ones + " ones" ;

}
               
document.write ("test 4: " +MakingChange(7, 23);