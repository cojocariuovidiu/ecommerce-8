var express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    User = require('./models/User'),
    productsCtrl = require('./controllers/productsCtrl'),
    userCtrl = require('./controllers/userCtrl'),
    orderCtrl = require('./controllers/orderCtrl'),
    cartCtrl = require('./controllers/cartCtrl'),
    app = express(),
    port = 4700;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
mongoose.connect('mongodb://localhost:27017/products');

app.get('/api/products', productsCtrl.getProducts);
app.get('/api/products/:id', productsCtrl.getOneProduct);
app.post('/api/products', productsCtrl.addNewProduct);
app.put('/api/products/:id', productsCtrl.updateProduct);
app.delete('/api/products/:id', productsCtrl.destroyProduct);

app.post('/api/user', userCtrl.addNewUser);
app.get('/api/user/:user_id', userCtrl.getUser);
//
app.post('/api/order/:user_id', orderCtrl.addOrder);
app.get('api/order/', orderCtrl.getOrder);
//
app.post('/api/cart/:user_id', cartCtrl.addCart);
// app.put('/api/cart/:user_id');

app.listen(port, function() {
  console.log('listening on port ', port);
});
