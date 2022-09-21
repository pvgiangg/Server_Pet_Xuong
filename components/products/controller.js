const productService = require('./service');
const date = require('../../utils/date');

exports.getProducts = async () => {
    let data = await productService.getProducts();
    data = data.map((item, index) => {
        item = {
            release: date.format(item.release),
            _id: item._id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image,
            description: item.description,
            category_id: item.category_id,
            index: index + 1
        }
        return item;
    })
    return data;
}

exports.getProductById = async (id) => {
    let product = await productService.getProductById(id);
    product = {
        release: date.format(product.release),
        _id: product._id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        image: product.image,
        description: product.description,
        category_id: product.category_id,
    }
    return product;
}

exports.insert = async (body) => {
    await productService.insert(body);
}

exports.delete = async (id) => {
    await productService.delete(id);
}

exports.update = async (id, product) => {
    await productService.update(id, product);
}