import productos from '../json/productos.json' with { type: 'json' };

window.onload = function () {
    let container = document.getElementById('content');
    console.log('.innerHTML: ', container.innerHTML);
    productos.map((elem) => {
        
        
        let item = '<div class="item">'
        item += '<a href="producto.html?prod='+elem.code+'">'
        item += '<img alt="" src="'+ elem.imagen +'">'
        item += '<b>'+ elem.title +'</b>'
        item += '<strong> S/ '+ elem.precio +'</strong>'
        item += '</a>'
        item += '</div>'
        
        
        container.innerHTML += item

        console.log('elem: ', container);

    })
}
  