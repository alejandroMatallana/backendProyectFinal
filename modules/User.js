let moongoose = require('mongoose');
let Schema = moongoose.Schema;

let UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        min: 5,
        unique: true
    },
    email: {
        type: String,
        required: true,
        min: 10
    },
    password: {
        type: String,
        required: true,
        min: 5
    },

}, {
    versionKey: false
});

//Aca se crea la conexion en mongo BD
module.exports = moongoose.model('User', UserSchema);