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

exports.register = async (name, username, email, phone, password) => {
    let userEmail = await userService.dangNhap(email);
    let userPhone = await userService.dangNhap(phone);
    let userUsername = await userService.dangNhap(username);
    if (userEmail || userPhone || userUsername) return false;
    const hash = await bcrypt.hash(password, await bcrypt.genSalt(10));
    user = await userService.register(name, username, email, phone, hash);
    return true;
}


