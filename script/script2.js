function getSingleProduct() {
    let num = document.getElementById('inputNum').value;
    if (isNaN(num) || num == '' || num < 1 || num > 194) {
        document.getElementById('product').innerHTML = '<p class="text-danger">Неверный ввод!</p>';
        return;
    } else {
        fetch('https://dummyjson.com/products/' + num)
        .then(res => res.json())
        .then(result => displayProduct(result))
    };
};

function displayProduct(obj) {
    let product =
        `<div class="col">
            <div class="card border-dark">
                <img src="${obj.images[0]}" class="card-img-top" alt="изображение продукта">
                <div class="card-body">
                    <h4 class="card-text">$${obj.price}</h4>
                    <h5 class="card-title">${obj.title}</h5>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Категория: ${obj.category}</small>
                </div>
            </div>
         </div>`;
    document.getElementById('product').innerHTML = product;
};


