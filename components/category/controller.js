const categoryController = require('./service');

exports.getCategories = async () => {
    return await categoryController.getCategories();
}

exports.getCategoryById = async (id) => {
    return await categoryController.getCategoryById();
}

exports.getCategoriesForOneProduct = async (selectedId) => {
    let categories = await categoryController.getCategories();
    categories = categories.map(item => {
        // if (item._id == selectedId) {
        //     item = { ...item, selectedId: true };
        // } else {
        //     item = { ...item, selectedId: false };
        // }
        item = {
            _id: item._id,
            name: item.name,
            description: item.description,
            selected: item._id.toString() == selectedId.toString()
        }
        return item;
    })
    return categories;
}