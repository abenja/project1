// buttons and input field are hidden until an action is chosen from the dropdown menu
document.getElementById('inputField').style.display ='none';
document.getElementById('submitButton').style.display ='none';
document.getElementById('resetButton').style.display ='none';


// The dropdown menu options call for either functions newList() or getStored(). 
function start() {
    var option = document.getElementById('startOptions');
// If the value of the chosen option is 1 (create new list), 
    if (option.value == 1) {
        // Shows the input fields and buttons by setting their display as the default style;
        document.getElementById('inputField').style.display = 'initial';
        document.getElementById('submitButton').style.display ='initial';
        document.getElementById('resetButton').style.display ='initial';
        // Calls for the newList() function, which creates a new list
        newList();
    } else {
        // Shows the input fields and buttons by setting their display as the default style;
        document.getElementById('inputField').style.display = 'initial';
        document.getElementById('submitButton').style.display ='initial';
        document.getElementById('resetButton').style.display ='initial';
        // Calls for the getStored() function, which retrieves already stored items from the localStorage
        getStored();

    }
    // Resets the selection box to its 'placeholder' (disabled) value
    option.selectedIndex = 0;

}

// Adds new item to the list with attributes
function addItem() {
    // Simply removes the hidden-attribute of the items-header
    document.getElementById('itemsHeader').removeAttribute('hidden');
   
    // Makes the input value a textNode, which will be appended into the list
    var inputValue = document.getElementById('inputField').value;
    var t = document.createTextNode(inputValue);

    //Checks for the length of the input. If 0, the user is prompted to write something.
    if (inputValue.length <= 0) {
        document.getElementById('inputField').style.backgroundColor = "#f06e66";
        alert("You need to write something!");
    // If input length is more than 0, the function adds the newly added item onto the list
    } else {
        // Creates a new li-element and sets an id-attribute to it
        var li = document.createElement('li');
        li.setAttribute('id', 'listItem');
        
        // Appends the li-elements to the ul-element, and the text node (user input) as the li-element
        document.getElementById('listUl').appendChild(li);
        li.append(t);
        
        // Sets the value of the input field to blank, which returns the placeholder "Add item:" text
        document.getElementById('inputField').value = "";
        document.getElementById('inputField').style.backgroundColor = 'white';

        // Calls for a function that will save the item into the browser localStorage
        saveItem(inputValue);

        // adds remove-mark next to item
        var trash = document.createElement('button');
        trash.setAttribute('id', 'removeButton');

        //adds styling and an onclick-event that removes the element
        trash.innerHTML = 'x';
        trash.setAttribute('onclick', 'this.parentElement.style.display = "none"');
        li.appendChild(trash);
        

        // "Adds" a Clear Completed -button by removing the hidden attribute initially given to it in the index.html-file.
        document.getElementById('clearButton').removeAttribute('hidden');
        document.getElementById('clearButton').style.display = 'flex';

        // calls for function count(), that counts all li-elements
    }
}



// adds "checked" class to element when clicked IF it doesn't have it. If class exists, it is deleted when clicked.
    
var list = document.getElementById('listUl');
    list.addEventListener('click',function(e){
        var li = e.target;
    
        if(li.classList.contains('checked')){
            li.classList.remove('checked');
            
        } else {
          li.classList.add('checked');
          // Removes the checked-class from the removeButton element.
          // Without this, clicking on the removeButton would add a line-through to the next removeButton
          document.getElementById('removeButton').removeAttribute('class');
        }
        // Workaround for preventing the ul-element to be clickable. This seemed to be the only way.
        // Without this line of code, clicking the ul-area (area next to the li-element) created a class for the ul and changed the styling of all li-items
        list.removeAttribute('class');
      },false)
    


// function to store information on browser, with the parameter being the ul-element
function saveItem(listUl) {
    let itemsOnList = document.getElementById('listItem').value;
    // If the key doesn't exist, an array 'itemsOnList' is created
    if (localStorage.getItem('itemsOnList') === null) {
        itemsOnList = [];
    // If the key exists, the value of the listItem-element is parsed and pushed into it
    } else {
        itemsOnList = JSON.parse(localStorage.getItem('itemsOnList'));
    }
    itemsOnList.push(listUl);
    // Lastly, the value is set and stored into the localStorage
    localStorage.setItem('itemsOnList', JSON.stringify(itemsOnList));
}




// adds a clear all button, which resets the whole to-do list AND cleares the localStorage as well
function resetAll() {
    if (localStorage.length > 0) {
        if (confirm('You\'re about to reset. This cannot be undone. Proceed?')) {
            document.getElementById('listUl').innerHTML = '';
            localStorage.clear();
            }
        } else {
            alert("There is nothing to reset!");
        }
}

// Creates a new list. Works similarly to the resetAll() function, without the "alert("There is nothing to reset!");", sinse it is not necessary here
// If there is nothing to reset, the program simply allows the user to start a new list

function newList() {
    if (localStorage.length > 0) {
        if (confirm('You\'re about to reset. This cannot be undone. Proceed?')) {
            document.getElementById('listUl').innerHTML = '';
            localStorage.clear();
            }       
    }
}

// Clears the items with the "checked" class
function clearCompleted() {
    var list = document.getElementById('listUl');
    var deleting = list.getElementsByTagName('li');

        for (var i = 0; i < deleting.length; i++) {
                if (deleting[i].classList.contains('checked')) {
                    deleting[i].style.display = 'none';
                }  
        }
}

// Gets stored items from localStorage. If storage is empty, user is alerted with message.
// If locaStorage contains a key-value pair, the values are iterated through with a for-loop and added to the listUl-element.t
function getStored() {    
    var storedKey;
    if (localStorage.length == 0) {
    alert('storage is empty');
    } else {
        document.getElementById('itemsHeader').removeAttribute('hidden');
        storedKey = JSON.parse(localStorage.getItem('itemsOnList'));
        var storedItem;
        for (var i = 0; i < storedKey.length; i++) {
            
            // Basically similar functionality as with the addItem()-function, only with stored items, not with user input
            var t = document.createTextNode(storedKey[i]);
            var storedLi = document.createElement('li');


            document.getElementById('listUl').appendChild(storedLi);
            storedLi.append(t);

            var trash = document.createElement('button');
            trash.setAttribute('id', 'removeButton');
            
            //adds styling and an onclick-event that removes the element
            trash.innerHTML = 'x';
            trash.setAttribute('onclick', 'this.parentElement.style.display = "none"');
            storedLi.appendChild(trash);
            
            // "Adds" a Clear Completed -button by removing the hidden attribute initially given to it in the index.html-file.
            document.getElementById('clearButton').removeAttribute('hidden');
            document.getElementById('clearButton').style.display = 'flex';
        }
    }   
}


