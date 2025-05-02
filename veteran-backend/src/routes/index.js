const usuario = require('./usuarioRouter');
const login = require('./loginRouter')

module.exports = (app, upload) => {
    usuario(app),
    login(app)
};