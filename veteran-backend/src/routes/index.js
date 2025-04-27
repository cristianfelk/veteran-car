const usuario = require('./usuarioRouter');

module.exports = (app, upload) => {
    usuario(app)
};