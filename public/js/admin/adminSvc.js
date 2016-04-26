angular.module("app")
    .service("adminSvc", function($http) {

        this.getProducts = function() {
            return $http({
                method: "GET",
                url: "/api/products"
            })
            .then(function(response) {
                return response.data;
            });
        };


        this.addNewProduct = function(name, price, img) {
            return $http({
                method: "POST",
                url: '/api/products',
                data: {
                    name: name,
                    price: price,
                    img: img
                }
            })
            .then(function(response) {
                console.log(response);
            });
        };

        this.destroyProduct = function(id) {
            console.log(id);
            return $http({
                method: "DELETE",
                url: "/api/products/" + id
            })
            .then(function(response) {
                console.log(response);
            });
        };

        this.updateProduct = function(id, name, price, img) {
            return $http({
                method: "PUT",
                url: "/api/products/" + id,
                data: {
                    name: name,
                    price: price,
                    img: img
                }
            })
            .then(function(response) {
                console.log(response);
            });
        };

});
