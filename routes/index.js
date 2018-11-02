let express = require('express');
let PlaceController = require('../controllers/placeController');
let UserController = require('../controllers/UserController');

let router = express.Router();

//Listar todos los lugares
router.get('/places', PlaceController.show);
//Crea un lugar 
router.post('/places', PlaceController.store);
//Buscar un lugar por ID
router.get('/places/:id', PlaceController.find);
//Actualizar un lugar
router.put('/places/:id', PlaceController.update);
//Eliminar un documento
router.delete("/places/:id", PlaceController.destroy);

//Usuario

//Listar todos los usuarios
router.get('/users', UserController.show);
//Crea un usuario 
router.post('/users', UserController.store);
//Buscar un usuario por ID
router.get('/users/:id', UserController.find);
//Actualizar un usuario
router.put('/users/:id', UserController.update);
//Eliminar un usuario
router.delete("/users/:id", UserController.destroy);



module.exports = router;