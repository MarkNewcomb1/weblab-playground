document.write("<h4>Good Morning, Good Afternoon, and If I don't See You, Good Night. Yeah, that's right...<i>Truman Show</i> reference in yo face!</h4>");

var Greeting=function(MilitaryTime){

if (MilitaryTime >= 0000 || < 1200){
 console.log("Good Morning!");   
}
    else if (MilitaryTime > 1200 || < 1700){
        console.log("Good Afternoon!");
    }
else if (MilitaryTime >=1700 || <=2359){
        console.log("Good Evening!");   
}

else{
 console.log("It must be exactly noon, that greeting is not in my parameters. You've created a time paradox, Marty!")   
 return Greeting;
}
}
document.write("test 3: " + MilitaryTime("1200"));