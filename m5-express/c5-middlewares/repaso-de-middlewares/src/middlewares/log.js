module.exports = (req, res, next) => {
    console.log('REQUEST:', req.url);
    next();
};