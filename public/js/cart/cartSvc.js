angular.module("app")
    .service("cartSvc", function($http) {

        this.postCart = function() {
            return $http({
                method: "POST",
                url: "/api/cart/57214efe93a11ea813307e60",
                data: {
                    products: [{
                        item: "571ffa41d60f69c82859a4a5",
                        quantity: 1
                    }]
                }
            }).then(function(response) {
                console.log(response.data);
                return response.data;
            });
        };

});
