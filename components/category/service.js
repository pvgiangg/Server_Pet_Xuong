const categoryModel = require('./model');

/**
 * lấy danh sách các thể loại danh mục
 * @returns data
 */
exports.getCategories = async () => {
    // return data; 
    const categories = await categoryModel.find();
    return categories;
}

/**
 * 
 * @param {*mã danh mục} id 
 * @returns danh mục
 */
exports.getCategoryById = async (id) => {
    const category = data.filter(item => item._id == id)[0];
    return category;
}

var data = [{
    "_id": 1,
    "name": "Egg Patty Fried",
    "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
}, {
    "_id": 2,
    "name": "Wine - Cave Springs Dry Riesling",
    "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
}, {
    "_id": 3,
    "name": "Wine - Ice Wine",
    "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
}, {
    "_id": 4,
    "name": "Macaroons - Homestyle Two Bit",
    "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
}, {
    "_id": 5,
    "name": "Apple - Delicious, Red",
    "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
}, {
    "_id": 6,
    "name": "Sauce - Sesame Thai Dressing",
    "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
}, {
    "_id": 7,
    "name": "Carbonated Water - Peach",
    "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
}, {
    "_id": 8,
    "name": "Soup - Campbells Chili",
    "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
}, {
    "_id": 9,
    "name": "Wine - Maipo Valle Cabernet",
    "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
}, {
    "_id": 10,
    "name": "Ice Cream - Life Savers",
    "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
}]
