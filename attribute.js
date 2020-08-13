var el = document.getElementById('one');       // called the elemenet and store it in a variable
 
el.className = 'change';                       // changed the value of the class attribute

var itemTwo = document.getElementById('two');  // selected second list item
var itemFour = document.getElementById('four');
var elText  = itemFour.firstChild.nodeValue;   
 console.log(elText);
elText = elText.replace('hotdogs', 'hamburgers'); 
 
itemFour.firstChild.nodeValue = elText;         // updated the last item on the list

// created element to store in variable
var newListItem = document.createElement('li');
 
// Made new seperate text
var newText = document.createTextNode('cheese');
 
// // set new text /append node to new element
newListItem.appendChild(newText);
 
// // Find element
var list = document.getElementsByTagName('ul')[0];
 
// // Inserted/set the newly created element
list.appendChild(newListItem);
