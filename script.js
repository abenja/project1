
//adds new item to the list


function addItem() {

    


    var inputValue = document.getElementById('itemField').value;
    var t = document.createTextNode(inputValue);
    
    
    if (inputValue.length <= 0) {
        document.getElementById('itemField').style.backgroundColor = "#f06e66";
        alert("You need to write something!");
    } else {
        var li = document.createElement('li');

        document.getElementById('listUl').appendChild(li);
        li.appendChild(t);
        li.setAttribute('onclick', 'check()');
        document.getElementById('itemField').value = "";

    }
    
}


function check() {
    var list = document.getElementById('listUl');


    list.addEventListener('click',function(e){
        list = e.target;
        if(list.classList.contains('checked')){
            list.classList.remove('checked');

        } else {
          list.classList.add('checked');
        }
      },false)


    }

// nyt double clickillä viiva????