angular.module("app")
    .controller("adminCtrl", function($scope, adminSvc) {

        $scope.addProduct = function(prodName, prodPrice, prodImg) {
            adminSvc.addNewProduct(prodName, prodPrice, prodImg);
        };

        $scope.deleteProduct = function(id) {
            adminSvc.destroyProduct(id);
        };

        $scope.updateProduct = function(id, name, price, img) {
            adminSvc.updateProduct(id, name, price, img);
        };

        adminSvc.getProducts()
            .then(function(products) {
                $scope.products = products;
            });
});
