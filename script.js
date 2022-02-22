// buttons and input field are hidden until an action is chosen from the dropdown menu
document.getElementById('inputField').style.display ='none';
document.getElementById('submitButton').style.display ='none';
document.getElementById('resetButton').style.display ='none';

// The dropdown menu options call for either functions newList() or getStored(). 
function start() {
    var option = document.getElementById('startOptions');

    if (option.value == 1) {
        newList();
        document.getElementById('inputField').style.display = 'initial';
        document.getElementById('submitButton').style.display ='initial';
        document.getElementById('resetButton').style.display ='initial';
    } else {
        getStored();
    }
    option.selectedIndex = 0;

}

//adds new item to the list with attributes
function addItem() {

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

        //adds onclick-event that hides the parentElement 'li'
        trash.setAttribute('onclick', 'this.parentElement.style.display = "none"');
        trash.innerHTML = 'x';
        li.append(trash);
        

        // "Adds" a Clear Completed -button by removing the hidden attribute initially given to it in the index.html-file.
        document.getElementById('clearButton').removeAttribute('hidden');

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
        }
        // Workaround for preventing the ul-element to be clickable. This seemed to be the only way.
        // Without this line of code, clicking the ul-area (area next to the li-element) created a class for the ul and changed the styling of all li-items
        list.removeAttribute('class');
      },false)
    


// function to store information on browser
function saveItem(listUl) {
    let itemsOnList = document.getElementById('listItem').value;
    if (localStorage.getItem('itemsOnList') === null) {
        itemsOnList = [];
    } else {
        itemsOnList = JSON.parse(localStorage.getItem('itemsOnList'));
    }
    itemsOnList.push(listUl);
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


function newList() {
    if (localStorage.length > 0) {
        if (confirm('You\'re about to reset. This cannot be undone. Proceed?')) {
            document.getElementById('listUl').innerHTML = '';
            localStorage.clear();
            }
            
}
}


function clearCompleted() {
    var deleted = document.getElementsByClassName('checked');
    for (var i = 0; i < deleted.length; i++) {
        deleted[i].remove();
        deleted[i].parentNode.removeChild(deleted[i]);
    }
}

// Gets stored items from localStorage
    function getStored() {
        
        if (localStorage.length == 0) {
        alert('storage is empty');
        } else {
            var stored = localStorage.getItem('itemsOnList');
            // pitää vielä saada tää tulostumaan normaalisti, ei arrayna 
            document.getElementById('listUl').append(stored);
            document.getElementById('listUl').style.display = 'initial';
        }
    }

