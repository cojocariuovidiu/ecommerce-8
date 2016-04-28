angular.module("app")
    .controller("adminCtrl", function($scope, adminSvc) {

        $scope.addProduct = function(prodName, prodPrice, prodImg, prodDetails) {
            adminSvc.addNewProduct(prodName, prodPrice, prodImg, prodDetails);
        };

        $scope.deleteProduct = function(id) {
            adminSvc.destroyProduct(id);
        };

        $scope.updateProduct = function(id, name, price, img, prodDetails) {
            adminSvc.updateProduct(id, name, price, img, prodDetails);
        };

        adminSvc.getProducts()
            .then(function(products) {
                $scope.products = products;
            });
});
