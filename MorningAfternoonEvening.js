document.write("<h4>Good Morning, Good Afternoon, and If I don't See You, Good Night. Yeah, that's right...<i>Truman Show</i> reference in yo face!</h4>");

var Greeting=function(MilitaryTime){

if ((MilitaryTime >= 0000) && (MilitaryTime < 1200)){
 return("Good Morning!");   
}
    else if ((MilitaryTime > 1200) && (MilitaryTime < 1700)){
        return("Good Afternoon!");
    }
else if ((MilitaryTime >=1700) && (MilitaryTime <=2359)){
        return("Good Evening!");   
}

else{
 return("It must be exactly noon, that greeting is not in my parameters. You've created a time paradox, Marty!")   
    }
}
document.write("test 3: " + Greeting(1200)); 





/*  '(time > = 0) && (time  < 1200)' from Matt*/