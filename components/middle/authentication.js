const jwt = require('jsonwebtoken');

// sử dụng cho web
exports.checkLogin = function (req, res, next) {
    const { session } = req;
    const url = req.originalUrl.toLowerCase();
    if (!session) {
        if (url.includes('dang-nhap')) {
            next();
        } else {
            res.redirect('/dang-nhap');
        }
    } else {
        const { token } = session;
        if (!token) {
            if (url.includes('dang-nhap')) {
                next();
            } else {
                res.redirect('/dang-nhap');
            }
        } else {
            jwt.verify(token, 'iloveyou', function (error, decoded) {
                if (error) {
                    if (url.includes('dang-nhap')) {
                        next();
                    } else {
                        res.redirect('/dang-nhap');
                    }
                } else {
                    if (url.includes('dang-nhap')) {
                        res.redirect('/san-pham');
                    } else {
                        next();
                    }
                }
            })
        }
    }
}

// sử dụng cho api
exports.checkToken = function (req, res, next) {
    let token = null;
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] == 'Bearer') {
        token = req.headers.authorization.split(' ')[1];
    }

    if (token) {
        jwt.verify(token, 'iloveyou', function (error, decoded) {
            if (error) {
                res.json({ status: false });
            } else {
                next();
            }
        })
    } else {
        res.json({ status: true });
    }
}