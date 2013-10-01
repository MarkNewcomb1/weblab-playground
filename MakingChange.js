document.write("<h4>Making Change</h4>");

var MakingChange = function (number) {

var userCents = prompt("Please enter the number of cents as number: ");
var userDollars = prompt("Please enter the number of dollars as a number: ");
var dollars = parseInt(userDollars);
var cents = parseInt(userCents);
var quarters = cents / 25;
var dimes = (cents % 25) / 10;
var nickels = ((cents % 25) % 10) / 5;
var pennies = cents % 5;
var hundreds = dollars / 10000;
var fifties = (dollars % 10000) / 5000;
var twenties = ((dollars % 10000) / 5000) / 2000;
var tens = (((dollars % 10000) / 5000) / 2000) / 1000;
var fives = ((((dollars % 10000) / 5000) / 2000) / 1000) / 500;
var ones = dollars % 5;
document.write("cents + dollars + " your change is: " + quarters + " quarter(s)" + dimes + " dime(s)" + nickels + " nickel(s)" + pennies + " pennies/penny and" + hundreds + " hundred(s)" + fifties + " fifties/fifty" + twenties + " twenties/twenty" + tens + " ten(s)" + fives + " five(s)" + ones + " ones" ;

}
               
document.write ("test 4: " +MakingChange(7, 23);