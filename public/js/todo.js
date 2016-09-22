var ul = document.getElementById('list'),
    removeAll = document.getElementById('removeAll'),
    add = document.getElementById('add');

function addLi(targetUl) {
    var inputText = document.getElementById('inputevento').value,
        li = document.createElement('li'),
        textNode = document.createTextNode(inputText + ' '),
        removeButton = document.createElement('button');

    if (inputText.split(' ').join('').length === 0) {
        alert('No pusiste nada');
        return false;
    }

    removeButton.className = 'removeMe';
    removeButton.innerHTML = 'Cumplido';
    removeButton.setAttribute('onclick', 'removeMe(this);');

    li.appendChild(textNode);
    li.appendChild(removeButton);

    targetUl.appendChild(li);
}

function removeMe(item) {
    var parent = item.parentElement;
    parent.parentElement.removeChild(parent);
}

add.onclick = function() {
    addLi(ul);
};

removeAll.onclick = function() {
    ul.innerHTML = '';
};
