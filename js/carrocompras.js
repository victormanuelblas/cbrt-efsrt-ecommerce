import productos from '../json/productos.json' with { type: 'json' };

let producto = "";

window.onload = function() {
    let cartElms = localStorage.getItem("cartElms");
    let items = (cartElms == null) ? [] : JSON.parse(cartElms);
    
    let container = document.getElementById("items");
    let totalCart = 0;

    for(let ctrl = 0;ctrl < items.length;ctrl++){
        
        producto = productos.filter((item) => item.code == items[ctrl].code)[0];

        let htmlElement = '<div class="item">'
        htmlElement += '    <div class="images">'
        htmlElement += '        <img alt="" src="'+ producto.imagen +'" width="100px">'
        htmlElement += '    </div>'
        htmlElement += '    <div class="info">'
        htmlElement += '        <h4>'+producto.title+'</h4>'
        htmlElement += '        <strong>S/. '+producto.precio+'</strong>'
        htmlElement += '        <b>'+items[ctrl].qnty+'</b>'
        htmlElement += '    </div>'
        htmlElement += '</div>'

        container.innerHTML += htmlElement;

        totalCart += (producto.precio * items[ctrl].qnty)

        console.log('producto: ', producto, 'TotalCart: ', totalCart);
    }
    
    
    document.getElementById("totalCarrito").innerHTML = totalCart
    
}