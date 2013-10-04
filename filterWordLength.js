//document.write('<h4>Filter Text Array by Length</h4>');

/*
 * Takes an input array of text items and returns a list of the
 * elements that are longer than length
 */
var filterWordLength = function(list, length) {
  var result = [];
  for(var index = 0; index < list.length; index++) {
    var element = list[index];
    if((typeof element === 'string') && (element.length > length)) {
      result.push(element);
	}
  }
  return result;
}

$(document).ready(function(){
        
        $('.add-filter-string').click(function(){
            var text = $('#new-filter-string').val();
            if(text){
        $('.filter-string-list').append('<li>' + text + '</li>');
            }
            return false;
        });
        $('.filter-string-list').click('li', function(ev){
            $(ev.target).remove();
    });
});