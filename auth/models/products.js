const mongoose = require('mongoose'), Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    _id: Number,
    name: String,
    price: Number,
    photo: String
},{collection:'Item'});

module.exports = mongoose.model('Item', productSchema);

  