module.exports = (req, res, next) => {
    if (!!req.session.auth) {
        return next()
    }

    res.redirect('/dashboard/login')
}