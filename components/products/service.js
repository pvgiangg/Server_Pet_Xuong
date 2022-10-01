/**
 * service: tầng giao tiếp với database
 */
const productModel = require('./model');

/**
 * lấy danh sách sản phẩm
 */

exports.getProducts = async () => {
    // return data;
    // select id, name, price, quantity,... from products
    const products = await productModel.find().populate('category_id');
    return products;
}

/**
 * lấy thông tin chi tiết 1 sản phẩm
 */

exports.getProductById = async (id) => {
    // const product = data.filter(item => item._id == id)[0];
    // return product;

    const product = await productModel.findById(id).populate('category_id');
    return product;
}

exports.insert = async (product) => {
    // data.push(product);
    const p = new productModel(product);
    await p.save();
}

exports.delete = async (id) => {
    await productModel.findByIdAndDelete(id);
}

exports.update = async (id, product) => {
    // data = data.map(item => {
    //     if (item._id == id) {
    //         item = { ...item, ...product }
    //     }
    //     return item;
    // })

    await productModel.findByIdAndUpdate(id, product);
}

// var data = [
//     {
//         "_id": 90,
//         "name": "Sparkling Wine - Rose, Freixenet",
//         "price": 15,
//         "quantity": 22,
//         "category_id": {
//             "_id": 1,
//             "name": "Egg Patty Fried",
//             "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
//         },
//         "release": "2022-01-01",
//         "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
//         "image": "https://munchkins.company.com/uploads/1/3/2/9/132957326/maya-httpsmunchkins-company-com_orig.jpg"
//     }, {
//         "_id": 50,
//         "name": "Muffin - Mix - Creme Brule 15l",
//         "price": 19,
//         "quantity": 8,
//         "category_id": {
//             "_id": 2,
//             "name": "Wine - Cave Springs Dry Riesling",
//             "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
//         },
//         "release": "2022-01-01",
//         "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
//         "image": "https://munchkins.company.com/uploads/1/3/2/9/132957326/maya-httpsmunchkins-company-com_orig.jpg"
//     }, {
//         "_id": 19,
//         "name": "Truffle Cups - White Paper",
//         "price": 34,
//         "quantity": 48,
//         "category_id": {
//             "_id": 3,
//             "name": "Wine - Ice Wine",
//             "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
//         },
//         "release": "2022-01-01",
//         "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
//         "image": "https://munchkins.company.com/uploads/1/3/2/9/132957326/maya-httpsmunchkins-company-com_orig.jpg"
//     }, {
//         "_id": 75,
//         "name": "Cloves - Ground",
//         "price": 84,
//         "quantity": 28,
//         "category_id": {
//             "_id": 4,
//             "name": "Macaroons - Homestyle Two Bit",
//             "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
//         },
//         "release": "2022-01-01",
//         "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
//         "image": "https://munchkins.company.com/uploads/1/3/2/9/132957326/maya-httpsmunchkins-company-com_orig.jpg"
//     }, {
//         "_id": 57,
//         "name": "Grapefruit - Pink",
//         "price": 41,
//         "quantity": 13,
//         "category_id": {
//             "_id": 5,
//             "name": "Apple - Delicious, Red",
//             "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
//         },
//         "release": "2022-01-01",
//         "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
//         "image": "https://munchkins.company.com/uploads/1/3/2/9/132957326/maya-httpsmunchkins-company-com_orig.jpg"
//     }, {
//         "_id": 69,
//         "name": "Oil - Food, Lacquer Spray",
//         "price": 55,
//         "quantity": 7,
//         "category_id": {
//             "_id": 6,
//             "name": "Sauce - Sesame Thai Dressing",
//             "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
//         },
//         "release": "2022-01-01",
//         "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
//         "image": "https://munchkins.company.com/uploads/1/3/2/9/132957326/maya-httpsmunchkins-company-com_orig.jpg"
//     }, {
//         "_id": 81,
//         "name": "Sugar - Crumb",
//         "price": 17,
//         "quantity": 40,
//         "category_id": {
//             "_id": 7,
//             "name": "Carbonated Water - Peach",
//             "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
//         },
//         "release": "2022-01-01",
//         "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
//         "image": "https://munchkins.company.com/uploads/1/3/2/9/132957326/maya-httpsmunchkins-company-com_orig.jpg"
//     }, {
//         "_id": 44,
//         "name": "Caviar - Salmon",
//         "price": 56,
//         "quantity": 1,
//         "category_id": {
//             "_id": 8,
//             "name": "Soup - Campbells Chili",
//             "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
//         },
//         "release": "2022-01-01",
//         "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
//         "image": "https://munchkins.company.com/uploads/1/3/2/9/132957326/maya-httpsmunchkins-company-com_orig.jpg"
//     }, {
//         "_id": 96,
//         "name": "Bread - Raisin",
//         "price": 35,
//         "quantity": 98,
//         "category_id": {
//             "_id": 9,
//             "name": "Wine - Maipo Valle Cabernet",
//             "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
//         },
//         "release": "2022-01-01",
//         "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
//         "image": "https://munchkins.company.com/uploads/1/3/2/9/132957326/maya-httpsmunchkins-company-com_orig.jpg"
//     }, {
//         "_id": 87,
//         "name": "Daves Island Stinger",
//         "price": 49,
//         "quantity": 67,
//         "category_id": {
//             "_id": 10,
//             "name": "Ice Cream - Life Savers",
//             "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
//         },
//         "release": "2022-01-01",
//         "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
//         "image": "https://munchkins.company.com/uploads/1/3/2/9/132957326/maya-httpsmunchkins-company-com_orig.jpg"
//     }, {
//         "_id": 52,
//         "name": "Wine - Bouchard La Vignee Pinot",
//         "price": 19,
//         "quantity": 62,
//         "category_id": {
//             "_id": 10,
//             "name": "Ice Cream - Life Savers",
//             "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
//         },
//         "release": "2022-01-01",
//         "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
//         "image": "https://munchkins.company.com/uploads/1/3/2/9/132957326/maya-httpsmunchkins-company-com_orig.jpg"
//     }, {
//         "_id": 11,
//         "name": "Wine - Prosecco Valdobiaddene",
//         "price": 72,
//         "quantity": 100,
//         "category_id": {
//             "_id": 9,
//             "name": "Wine - Maipo Valle Cabernet",
//             "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
//         },
//         "release": "2022-01-01",
//         "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
//         "image": "https://munchkins.company.com/uploads/1/3/2/9/132957326/maya-httpsmunchkins-company-com_orig.jpg"
//     }, {
//         "_id": 9,
//         "name": "Puff Pastry - Slab",
//         "price": 24,
//         "quantity": 5,
//         "category_id": {
//             "_id": 8,
//             "name": "Soup - Campbells Chili",
//             "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
//         },
//         "release": "2022-01-01",
//         "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
//         "image": "https://munchkins.company.com/uploads/1/3/2/9/132957326/maya-httpsmunchkins-company-com_orig.jpg"
//     }, {
//         "_id": 12,
//         "name": "Syrup - Chocolate",
//         "price": 63,
//         "quantity": 35,
//         "category_id": {
//             "_id": 7,
//             "name": "Carbonated Water - Peach",
//             "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
//         },
//         "release": "2022-01-01",
//         "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
//         "image": "https://munchkins.company.com/uploads/1/3/2/9/132957326/maya-httpsmunchkins-company-com_orig.jpg"
//     }, {
//         "_id": 76,
//         "name": "Oil - Coconut",
//         "price": 2,
//         "quantity": 63,
//         "category_id": {
//             "_id": 6,
//             "name": "Sauce - Sesame Thai Dressing",
//             "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
//         },
//         "release": "2022-01-01",
//         "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
//         "image": "https://munchkins.company.com/uploads/1/3/2/9/132957326/maya-httpsmunchkins-company-com_orig.jpg"
//     }, {
//         "_id": 55,
//         "name": "Bread Foccacia Whole",
//         "price": 23,
//         "quantity": 77,
//         "category_id": {
//             "_id": 5,
//             "name": "Apple - Delicious, Red",
//             "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
//         },
//         "release": "2022-01-01",
//         "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
//         "image": "https://munchkins.company.com/uploads/1/3/2/9/132957326/maya-httpsmunchkins-company-com_orig.jpg"
//     }, {
//         "_id": 70,
//         "name": "Scallops - U - 10",
//         "price": 2,
//         "quantity": 74,
//         "category_id": {
//             "_id": 4,
//             "name": "Macaroons - Homestyle Two Bit",
//             "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
//         },
//         "release": "2022-01-01",
//         "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
//         "image": "https://munchkins.company.com/uploads/1/3/2/9/132957326/maya-httpsmunchkins-company-com_orig.jpg"
//     }, {
//         "_id": 1,
//         "name": "Bread - Rosemary Focaccia",
//         "price": 88,
//         "quantity": 99,
//         "category_id": {
//             "_id": 3,
//             "name": "Wine - Ice Wine",
//             "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
//         },
//         "release": "2022-01-01",
//         "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
//         "image": "https://munchkins.company.com/uploads/1/3/2/9/132957326/maya-httpsmunchkins-company-com_orig.jpg"
//     }, {
//         "_id": 81,
//         "name": "Garbage Bags - Clear",
//         "price": 64,
//         "quantity": 91,
//         "category_id": {
//             "_id": 2,
//             "name": "Wine - Cave Springs Dry Riesling",
//             "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
//         },
//         "release": "2022-01-01",
//         "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
//         "image": "https://munchkins.company.com/uploads/1/3/2/9/132957326/maya-httpsmunchkins-company-com_orig.jpg"
//     }, {
//         "_id": 53,
//         "name": "Lamb - Bones",
//         "price": 64,
//         "quantity": 9,
//         "category_id": {
//             "_id": 1,
//             "name": "Egg Patty Fried",
//             "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
//         },
//         "release": "2022-01-01",
//         "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
//         "image": "https://munchkins.company.com/uploads/1/3/2/9/132957326/maya-httpsmunchkins-company-com_orig.jpg"
//     }
// ]