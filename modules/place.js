let moongoose = require('mongoose');
let Schema = moongoose.Schema;

let PlaceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    id: {
        type: String,
        required: true
    }
}, {
    versionKey: false
});

module.exports = moongoose.model('place', PlaceSchema);