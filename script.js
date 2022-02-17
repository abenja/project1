
//adds new item to the list

//TÄLLÄ HETKELLÄ RESETIN JÄLKEEN EI VOI ENÄÄ LISÄTÄ MITÄÄN!!

function addItem() {

    var inputValue = document.getElementById('itemField').value;
    var t = document.createTextNode(inputValue);
    
    
    

    if (inputValue.length <= 0) {
        document.getElementById('itemField').style.backgroundColor = "#f06e66";
        alert("You need to write something!");
        saveItem();
    } else {
        var li = document.createElement('li');
        li.setAttribute('id', 'listItem')
        document.getElementById('listUl').appendChild(li);
        li.appendChild(t);
    
        document.getElementById('itemField').value = "";
        document.getElementById('itemField').style.backgroundColor = 'white';
        saveItem(inputValue);

        // adds remove-mark next to item
        var trash = document.createElement('button');
        trash.setAttribute('id', 'removeButton');
        //adds onclick-event that hides the parentElement 'li'
        trash.setAttribute('onclick', 'this.parentElement.style.display = "none"');
        trash.innerHTML = 'x';
        li.appendChild(trash);


    }
    
   
    
}

// adds "checked" class to element when clicked IF it doesn't have it. If class exists, it is deleted when clicked.
    var list = document.getElementById('listUl');
    
    
    list.addEventListener('click',function(e){
        var line = e.target;
        if(line.classList.contains('checked')){
            line.classList.remove('checked');

        } else {
          line.classList.add('checked');
          moveItems();
        }
      },false)




// gets checked items into "checked items"
//function moveItems() {
  //  if (document.getElementById)
//document.getElementById('checkedItems').appendChild(document.getElementsByClassName('checked'));
//}



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

//gets stored items from localStorage
// function getStored() {
   // var itemOnList = document.getElementById('listItem').innerHTML;
    //if (listItem.getElementsByClassName('checked')) {
    //var got = localStorage.getItem('item');
    
    //}
//}


// adds a clear all button, which resets the whole to-do list AND cleares the localStorage as well
function resetAll() {
    if (confirm('You\'re about to reset. This cannot be undone. Proceed?')) {
// tähän pitää tehdä ehkä for-loop, joka käy läpi kaikki li-elementit ja poistaa ne.
// Nyt ohjelma poistaa ul-elementin eikä sinne voi siksi enää lisätä uusia li-elementtejä

        for (let i = 0; i < document.getElementById('listUl'); i++) {
            document.getElementById('listItem').style.display = "none";
        
        }
        localStorage.clear();

        
    }
}
