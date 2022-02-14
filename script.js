
//adds new item to the list


function addItem() {
    // creates new li element and sets attributes to it
    var li = document.createElement('li');
    li.setAttribute('onclick', 'check()');
    li.setAttribute('id', 'itemOnList');

    var inputValue = document.getElementById('inputItem').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue.length > 0) {
    document.getElementById('newUL').appendChild(li);
    document.getElementById('inputItem').style.backgroundColor = "#aade7c";
    document.getElementById('inputItem').value = "";
    document.getElementById('itemsList').value = "Items:"
    } else {
        alert("You need to write something!");
        document.getElementById('inputItem').style.backgroundColor = "#ec3b3b9c";
    }



    //Halutaan lisätä uusi item ensimmäiseksi listalla: li.insertBefore(inputValue, li.firstChild);??
    //localStorage.setItem('inputItem').value;
    //document.getElementById('listItem').innerHTML = localStorage.getItem('listItem');
}


//accepts enter-key as input. If enter is pressed, function enter() calls function addItem() and adds new item to the list
function enter(event) {
    var input = document.getElementById('inputItem').value;    
    if (event.keyCode === 13) {
        addItem();
    }
}

function check() {
    var clickedItem = document.getElementById('newUL').getElementsByTagName('li');
    alert(clickedItem);
}
