var express = require( 'express' );
var cors = require( 'cors' );
var bodyParser = require( 'body-parser' );
var mongo = require( 'mongojs' );
var db = mongo('ecommerce', ['products']);

var app = express();

app.use( cors() );
app.use( bodyParser.json() );
app.use(express.static(__dirname + '/public'));

var port = 4700;

app.get('/api/products', function(req, res) {
    var query = req.query;
    db.products.find(query, function(err, response) {//empty object means we have no criteria. and we just want all the records
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(response);
        }
    });
});


app.get('/api/products/:id', function(req, res){
    var query = {
        _id: mongo.ObjectId(req.params.id)
    };
    db.products.findOne(query, function(err, response){
        if(err) {
            res.status(500).json(err);
        } else {
            res.json(response);
        }
    });
});

app.post('/api/products', function(req, res){
    console.log("hitting Post", req.body);
  db.products.save(req.body, function(err, response) {
      if (err) {
          res.status(500).json(err);
      } else {
          res.status(200).json(response);
      }
  });
});



app.put('/api/products/:id', function(req, res) {
    if(!req.params.id){
        return res.status(400).send('id query needed');
    }
    var query = {
        _id: mongo.ObjectId(req.params.id)
    };
    db.products.update(query, req.body, function(error, response){
        if(error) {
            return res.status(500).json(error);
        } else {
            return res.status(200).json(response);
        }
    });
});

app.delete('/api/products/:id', function(req, res) {
    console.log("hitting delete", req.params.id);
   if (!req.params.id) {
       return res.status(400).send('id query needed');
   }
   var query = {
       _id: mongo.ObjectId(req.params.id)
   };
   db.products.remove(query, function(err, response) {
       if (err) {
           res.status(500).json(err);
       } else {
           res.status(200).json(response);
       }
   });
});



app.listen( port, function () {
  console.log( 'listening on port ', port );
} );
