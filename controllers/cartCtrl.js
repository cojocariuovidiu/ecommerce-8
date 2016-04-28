var User = require('../models/User');

module.exports = {

    addCart: function(req, res) {
        User.findByIdAndUpdate(req.params.user_id, {$push: {cart: req.body}}, //This is going to find the user with the id we pass it, then push into the cart property a value of whatever is on our req.body
        function(err, res) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(res);
            }
        });
    },

    updateCart: function(req, res) {
    User.findById(req.params.user_id, function(err, resp) {
        if (err) {
            res.status(500).send(err);
        }
        var myUser = resp;
        var qty = req.query.qty / 1;
        var foundItem = -1;
        myUser.cart.forEach(function(cartItem, index) {
            if (cartItem._id.toString() === req.query.itmId) {
                foundItem = index;
            }
        });
        if (foundItem >= 0) {
            console.log("Found Item = " + foundItem);
            if (qty === 0) {
                myUser.cart.splice(foundItem, 1);
            } else {
                myUser.cart[foundItem].qty = qty;
            }
        }
        saveUser(myUser, req, res);
    });
       function saveUser(userToSave, req, res) {
           userToSave.save(function(err, result) {
               if (err) {
                   res.status(500).send(err);
               } else {
                   res.send(result);
               }
           });
       }
   }
};
