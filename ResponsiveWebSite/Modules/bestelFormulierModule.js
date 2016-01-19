var app = angular.module('BestelformulierApp', ['customFilterModule', 'ngRoute']);
app.service('MandjeService', qnh.Services.MandjeService);
app.service('NavigationService', qnh.Services.NavigationService);
app.controller('NavigationController', ['NavigationService', '$location', qnh.Controllers.NavigationController]);
app.controller('BestelFormulierController', ['MandjeService', '$location', qnh.Controllers.BestelformulierController]);
app.directive('viewMandje', qnh.Directives.ViewMandje.factory);
/*stap 1 in configuratie van #-loze URLS: voeg code voor $locationProvider toe in config, zoals hieronder */
app.config([
    '$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        var mainController = 'BestelFormulierController as ctrl';
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
            redirectTo: '/'
        });
        $locationProvider.html5Mode(true);
    }]);
//# sourceMappingURL=bestelFormulierModule.js.map