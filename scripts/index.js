
window.onload = function() {
    var ul = document.createElement('ul');
    ul.setAttribute('id', 'proList');

    productList = ['Electronics Watch', 'House wear Items', 'Kids wear', 'Women Fashion'];

    document.getElementById('listaUL').appendChild(ul);
    productList.forEach(renderProductList);

    function renderProductList(element, index, arr) {
        var li = document.createElement('li');
        li.style.color = "blue";
        li.style.fontFamily = "arial";
        li.style.fontSize = 16;
        li.setAttribute('class', 'item');

        ul.appendChild(li);

        li.innerHTML = li.innerHTML + element;
    }
}