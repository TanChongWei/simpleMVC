const { v4: uuid } = require('uuid');
const pgp = require('pg-promise')({});
const connection = `postgres://mvc:@localhost:5432/postgres`
const db = pgp(connection);
db.connect()
    .then((obj) => console.log("connected"))
    .catch((e) => console.log(e));


module.exports.getIndexForm = (req, res, next) => {
    res.render('index');
}

module.exports.searchUserDetails = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await db.one(`Select * from mock_data where username = '${username}'`)
        if (password === user.password) {
            res.redirect(`user/${user.userid}`)
        } else {
            next()
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports.getNewUserForm = (req, res, next) => {
    res.render('createUser')
}

module.exports.createNewUser = async (req, res, next) => {
    try {
        const newUser = req.body;
        newUser["userid"] = uuid()
        const query = pgp.helpers.insert(newUser, null, 'mock_data')
        await db.none(query)
        res.redirect(`/user/${newUser.userid}`)
    } catch (e) {
        console.log(e)
        next()
    }
}

module.exports.showUserDetails = async (req, res, next) => {
    try {
        const { id } = req.params
        const user = await db.one(`Select * from mock_data where userid = '${id}'`)
        res.render('user', { user })
    } catch (e) {
        console.log(e)
        next()
    }
}

module.exports.updateUserDetails = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { username, password } = req.body;
        const query = `UPDATE mock_data SET username='${username}', password='${password}' WHERE userid = '${id}'`
        await db.none(query);
        res.redirect(`/user/${id}`)
    } catch (e) {
        console.log(e)
        next()
    }
}

module.exports.deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const query = `DELETE FROM mock_data WHERE userid = '${id}'`
        await db.none(query)
        res.redirect('/')
    } catch (e) {
        console.log(e)
        next()
    }
}

module.exports.getEditUserForm = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await db.one(`Select * from mock_data where userid = '${id}'`)
        res.render('editUser', { user })
    } catch (e) {
        console.log(e)
        next()
    }
}