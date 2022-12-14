const express = require('express');
const usuariosController = require('../controllers/usuarios.controller');
const md_autenticacion = require('../middlewares/autenticacion');


var api = express.Router();

//rutas para Usuarios
api.get('/usuarios/:idRoom', md_autenticacion.Auth, usuariosController.obtenerListaUsuarios);
api.post('/crearUsuario', usuariosController.creaerUsuarios)
api.delete('/eliminarUsuarios/:idUser/:idRoom', md_autenticacion.Auth, usuariosController.eliminarUsuariosSala);
api.post('/login', usuariosController.Login);

module.exports = api;