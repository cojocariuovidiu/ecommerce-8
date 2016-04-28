var User = require('../models/User');

module.exports = {

    addNewUser: function(req, res) {
        new User(req.body).save(function(err, productItem) {
            if (err) {
                return res.status(500).json(err);
            } else {
                return res.json(productItem);
            }
        });
    },

    getUser: function(req, res) {
        User
        .findById(req.params.user_id)
        .populate('cart/product')
        .exec()
        .then(function(results){
            console.log("it Works");
        }, function(err) {
            console.log("error");
        });
    }
};

// 1 to 1: for every instance of a there is another instance of b
