var mongoose = require('mongoose'),
    product = require('./Product'),
    Schema = mongoose.Schema;

//Carts should have an array of references to products.
var cartSchema = new Schema({
    products: [{
        item: {type: Schema.Types.ObjectId, ref: 'product', required: true},
        quantity: {type: Number, min: 1}
    }]
});


module.exports = cartSchema;
