document.write('<h4>Text Fragment</h4>');

var filterWordLength = function(list, length)
{
    var result = [];
    for(var index = 0; index < list.length; index++)     {
     var element = list[index];  
     if((typeof element === 'string') && (element.length > length))
     {
      result.push(element);   
     }
    }
    return result;
}

var testWords = [
 'short',
 'longer',
 'maybe even longer',
 'a really long sentence or something'
];
document.write('test 5: ' + filterWordLength(testWords, 7))