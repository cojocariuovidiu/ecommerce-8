var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    productSchema = require('./Product');

//Orders should have two special relationships: a reference to a user, and embedded products.
var orderSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: "User", required: true},

    products: [{
        item: [productSchema], //nested schema must be required in at top
        quantity: {type: Date, default: new Date()}
    }]
});

module.exports = mongoose.model("Order", orderSchema);
