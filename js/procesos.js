function addToCart () {
    let sku = document.getElementById("sku")?.innerText;
    let cartElms = localStorage.getItem("cartElms");
    let elms = (cartElms == null) ? [] : JSON.parse(cartElms);
    
    let elmsIndx = elms.findIndex(objc => objc.code == sku)

    if(elmsIndx >= 0){
        elms[0].qnty += 1;
    }else{
        elms.push({
            code: sku,
            qnty: 1
        })    
    }
    
    localStorage.setItem("cartElms",JSON.stringify(elms))
    alert('Producto agregado con exito');
}

function deleteItems (){
    localStorage.removeItem("cartElms");
    alert("Elementos Eliminados");
}

