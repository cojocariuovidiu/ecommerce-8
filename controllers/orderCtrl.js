var Order = require('../models/Order');

module.exports = {

    getOrder: function(req, res) {
        Order.find(req.query, function(err, result) {
            if (err) {
                res.sendStatus(500);
            }
            res.send(result);
        });
    },

    addOrder: function(req, res) {
        var userId = req.params.userId;
        User.findById(userId, function(err, result) {
            if (err) {
                res.sendStatus(500);
            }
        var userObj = result;
        var userOrder = {};
        userOrder.products = userObj.cart;
        userOrder.userId = userId;
        var newOrder = new Order(userOrder);
        newOrder.save(function(err, result) {
            if (err) {
                res.sendStatus(500);
            }
            userObj.cart = [];
            userObj.orders.push(mongoose.Types.ObjectId(result._id));
            // userObj.update({$push: {orders: mongoose.Types.ObjectId(result._id)}},
            userObj.save(function(err, result) {
                if (err) {
                    res.sendStatus(500);
                }
                res.send(result);
            });
        });
        });
    }


};
