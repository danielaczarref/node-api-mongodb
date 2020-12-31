

const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://192.168.15.55:27017/sensor-db', {
    useNewUrlParser: true
})

const itemSchema = new mongoose.Schema({
    uuid: { type: String, required: true},
    owner: { type: String, required: true},
    measure: { type: String, required: true},
    latitude: { type: Number, required: true},
    longitude: { type: Number, required: true},
    topic: { type: String, required: true}
}, { collection: 'temperatura'});

module.exports = { Mongoose: mongoose, ItemSchema: itemSchema }