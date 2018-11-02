let User = require('../modules/User');

let UserController = {
    //Listar todos los usuarios
    show(req, res) {
        User.find({})
            .then((documents) => {
                res.json(documents);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    //Guardar un usuario
    store(req, res) {
        User.create({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            })
            .then((doc) => {
                res.json(doc);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    //Busca un usuario por el ID
    find(req, res) {
        User.findById({
                _id: req.params.id
            })
            .then((doc) => {
                res.json(doc);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    update(req, res) {
        User.update({
                _id: req.params.id
            }, {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            })
            .then(doc => {
                res.json(doc);
            })
            .catch(err => {
                res.json(err);
            });
    },
    //Eliminar un lugar
    destroy(req, res) {
        User.findByIdAndRemove({
                _id: req.params.id
            })
            .then(doc => {
                res.json(doc);
            })
            .catch(err => {
                res.json(err);
            });
    }
};

module.exports = UserController;