module.exports.validateFields = function (req, res, next) {
    const { username, password } = req.body;
    if (!username || !password) {
        console.log('Please fill in all fields')
        res.redirect('/');
    } else if (!username.match(/^[a-z0-9]+$/i) || !password.match(/^[a-z0-9]+$/i)) {
        console.log('Username and password can only contain letters and numbers')
        res.redirect('/')
    } else if (username.length > 20 || password.length > 20) {
        console.log('Username and password must be less than 20 characters')
    }
    else {
        next()
    }
}