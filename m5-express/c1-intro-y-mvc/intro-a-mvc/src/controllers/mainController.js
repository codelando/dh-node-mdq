module.exports = {
    /** Página principal */
    index: (req, res) => {
        res.send('Estamos en la página principal');
    },
    about: (req, res) => {
        res.send('Estamos en la página acerca de');
    }
};