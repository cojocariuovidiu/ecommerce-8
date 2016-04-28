angular.module("app")
    .controller("cartCtrl", function($scope, cartSvc) {

        cartSvc.postCart()
            .then(function(cartItems) {
                $scope.cartObject = cartItems;
            });

});
