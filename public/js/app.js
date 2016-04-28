angular.module("app", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state("home", {
                url: '/',
                templateUrl: "./js/main/main.html",
                controller: "mainCtrl"
            })

            .state("admin", {
                url: '/admin',
                templateUrl: "./js/admin/admin.html",
                controller: "adminCtrl"
            })

            .state("cart", {
                url: '/cart',
                templateUrl: "./js/cart/cart.html",
                controller: "cartCtrl"
            });

    });
