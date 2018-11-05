let Place = require('../modules/place');

let PlaceController = {
    //Mostrar todos los lugares
    show(req, res) {
        Place.find({})
            .then((documents) => {
                res.json(documents);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    //Crea un lugar
    store(req, res) {
        Place.create({
                name: req.body.name,
                description: req.body.description,
                userId: req.body.userId
            })
            .then((doc) => {
                res.json(doc);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    //Busca un lugar
    find(req, res) {
        Place.findById({
                _id: req.params.id
            })
            .then((doc) => {
                res.json(doc);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    //Actualizar un lugar
    update(req, res) {
        Place.update({
                _id: req.params.id
            }, {
                name: req.body.name,
                description: req.body.description
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
        Place.findByIdAndRemove({
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

module.exports = PlaceController;