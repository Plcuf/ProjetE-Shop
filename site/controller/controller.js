exports.ErrorPage = async (req, res) => {
    try{
        res.render('error');
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
}

exports.Index = async (req, res) => {
    fetch('http://localhost:3000/products')
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(data => {
        console.log(data.Products);
        let products = data.Products;
        products.forEach(product => {
            product.Promo = product.Price - (product.Price*product.Promo)/100.00;
        })
        res.render('index', {products});
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: "Internal server error"
        });
    })
}

exports.Product = async (req, res) => {
    let productId = req.params.id;
    fetch(`http://localhost:3000/product/${productId}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        res.render('item', data)
    })
    .catch(err => {
        console.log(err);
        res.status(404);
    })
}

exports.Cart = async (req, res) => {
    try {
        res.render('cart');
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

exports.Favorites = async (req, res) => {
    try {
        res.render('likes');
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}