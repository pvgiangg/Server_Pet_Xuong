// tầng giao tiếp xử lý data

const userService = require('./service');

const bcrypt = require('bcryptjs');

exports.dangNhap = async (email, password) => {
    const user = await userService.dangNhap(email);
    // console.log(user)
    // if (user && user.password == password) {
    //     return user;
    // }
    // return null;
    if(!user) return null;
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) return null;
    return { _id: user._id, email: user.email };
}

exports.register = async (email, password, confirm_password) => {
    if (password != confirm_password) return null;
    let user = await userService.dangNhap(email);
    if (user) return null;

    const hash = await bcrypt.hash(password, await bcrypt.genSalt(10));
    user = await userService.register(email, hash);

    return { _id: user._id };
}