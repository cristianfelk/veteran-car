const usuarioController = require('../controllers/usuarioController');

module.exports = (app) => { 
    app.post('/usuario', usuarioController.postUsuario)
    app.get('/usuario', usuarioController.getUsuario)
    app.get('/usuario/:id', usuarioController.getUsuarioById)
    app.delete('/usuario/:id', usuarioController.deleteUsuario)
    app.put('/usuario/:id', usuarioController.putUsuario)
    app.patch('/usuario/:id', usuarioController.patchUsuario)
};