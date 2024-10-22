// Arreglo de productos simulados
const products = [
    { id: 1, name: 'Producto 1', price: 10.00, description: 'Descripción del Producto 1' },
    { id: 2, name: 'Producto 2', price: 20.00, description: 'Descripción del Producto 2' },
    { id: 3, name: 'Producto 3', price: 30.00, description: 'Descripción del Producto 3' },
];

// Arreglo para almacenar el carrito
let cart = [];

// Mostrar listado de productos
function displayProducts() {
    const productList = document.getElementById('products');
    products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - $${product.price.toFixed(2)}`;
        li.addEventListener('click', () => showProductDetail(product));
        productList.appendChild(li);
    });
}

// Mostrar detalle del producto seleccionado
function showProductDetail(product) {
    const detailSection = document.getElementById('product-detail');
    const detailContent = document.getElementById('detail-content');
    
    detailContent.innerHTML = `
        <p><strong>${product.name}</strong></p>
        <p>Precio: $${product.price.toFixed(2)}</p>
        <p>${product.description}</p>
    `;
    
    detailSection.classList.remove('hidden');
    
    // Manejar evento para agregar al carrito
    const addToCartButton = document.getElementById('add-to-cart');
    addToCartButton.onclick = () => addToCart(product);
}

// Agregar producto al carrito
function addToCart(product) {
    cart.push(product);
    updateCart();
    alert(`${product.name} ha sido agregado al carrito.`);
}

// Actualizar el carrito y el total acumulado
function updateCart() {
    const cartList = document.getElementById('cart');
    const totalElement = document.getElementById('total');
    cartList.innerHTML = '';
    
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
        total += item.price;
    });
    
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();

    

});

