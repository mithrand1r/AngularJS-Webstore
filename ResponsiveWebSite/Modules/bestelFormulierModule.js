var app = angular.module('BestelformulierApp', ['customFilterModule', 'ngRoute']);
app.controller('BestelFormulierController', [qnh.Controllers.BestelformulierController]);
app.controller('NavigationController', ['$location', qnh.Controllers.NavigationController]);
app.directive('viewMandje', qnh.Directives.ViewMandje.factory);
app.config([
    '$routeProvider', function ($routeProvider) {
        var mainController = 'NavigationController as ctrl';
        $routeProvider.when('/', {
            templateUrl: 'partial-views/step01.html',
            controller: mainController
        })
            .when('/step01', {
            templateUrl: 'partial-views/step01.html',
            controller: mainController
        })
            .when('/step02', {
            templateUrl: 'partial-views/step02.html',
            controller: mainController
        })
            .otherwise({
            redirectTo: '/nietsGevonden'
        });
    }]);
//# sourceMappingURL=bestelFormulierModule.js.map