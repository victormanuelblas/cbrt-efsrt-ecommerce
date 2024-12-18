zimport productos from '../json/productos.json' with { type: 'json' };

let producto = "";

window.onload = function() {
    let params =  window.location.search;
    let urlParams = new URLSearchParams(params);
    producto = urlParams.get("prod");
    

    let selectedProduct = productos.filter((item) => item.code == producto)[0];
    
    let container = document.getElementById("product");

    let htmlElement = '<div class="images">'
    htmlElement += '<img alt="" src="'+ selectedProduct.imagen +'" width="500px">'
    htmlElement += '</div>'
    htmlElement += '<div class="info">'
    htmlElement += '    <h1>'+ selectedProduct.title +'</h1>'
    htmlElement += '    <span>'+ selectedProduct.description +'</span>'
    htmlElement += '    <strong>Precio:<span>'+ selectedProduct.precio +'</span></strong>'
    htmlElement += '    <b>Sku:<span id="sku">'+ selectedProduct.code +'</span></b>'
    htmlElement += '    <button id="addtocart" onClick="addToCart()">Agregar</button>'
    htmlElement += '    <a href="./carrocompras.html" ondblclick=deleteItems()>Ir al carro de compras</a>'
    htmlElement += '</div>'

    console.log('htmlnuevo:', htmlElement);
    container.innerHTML += htmlElement;
    
}