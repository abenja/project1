
//adds new item to the list


function addItem() {

    var inputValue = document.getElementById('itemField').value;
    var t = document.createTextNode(inputValue);
    var li = document.createElement('li');

    if (inputValue.length <= 0) {
        document.getElementById('itemField').style.backgroundColor = "#f06e66";
        alert("You need to write something!");
    } else {
        
        document.getElementById('listUl').appendChild(li);
        li.appendChild(t);
        
        document.getElementById('itemField').value = "";
        saveItem();
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
        }
      },false)




// gets checked items into "checked items"


// function to store information on browser
function saveItem() {
    localStorage.setItem('item', list.innerHTML);
}

function getStored() {
    if (document.getElementsByClassName('checked')) {
    var got = localStorage.getItem('item');
    alert(got);
    } else {
        alert('not');
    }
}