

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    cart = require('./cartSchema');

var userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true, index: true},
    password: {type: String, required: true},
    cart: [cart],
    orders: []
});


module.exports = mongoose.model("User", userSchema);
