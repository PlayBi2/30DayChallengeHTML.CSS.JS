var Api = "http://localhost:3000/products";
var Input = document.querySelector('.search-box input')
var ListProduct = document.querySelector('.list-product');


function start() {
    getProduct(function (products) {
        renderProduct(products);
    })

    Search(Input, ListProduct)
}

start();




function getProduct(callback) {
    fetch(Api)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
}


function renderProduct(products) {
    var htmls = products.map(function (product) {
        return `
        <li class="product">
        <div class="product__img">
            <img src=${product.ImgSrc} alt="">
        </div>
        <div class="product__infor">
            <div class="product__name">
                ${product.ImgName}
            </div>
            <div class="product__price">
                ${product.ImgPrice}
            </div>
        </div>
    </li>
     `
    })
    ListProduct.innerHTML = htmls.join('');
}

function Search(Input, ListProduct){
    Input.addEventListener('input',function(e){
        let Products = document.querySelectorAll('.product');
        Products.forEach(function(product){
            let text = product.innerText;
            if(text.includes(e.target.value)){
                product.classList.remove('hide');
            }
            else{
                product.classList.add('hide')
            }
        })
    })
}