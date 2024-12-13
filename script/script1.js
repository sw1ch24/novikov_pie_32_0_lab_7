function getAllProducts() {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(result => displayProducts(result.products))
};

function displayProducts(productsArr) {
    let products = productsArr.map(obj => 
        `<div class="col">
            <div class="card h-100 border-dark">
                <img src="${obj.images[0]}" class="card-img-top" alt="изображение продукта">
                <div class="card-body">
                    <h4 class="card-text">$${obj.price}</h4>
                    <h5 class="card-title">${obj.title}</h5>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Категория: ${obj.category}</small>
                </div>
            </div>
         </div>`).join('\n');
    document.getElementById('products').innerHTML = products;
};

getAllProducts();
