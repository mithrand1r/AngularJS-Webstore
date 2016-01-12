var app;
app = angular.module('bestelformulierApp', ['customFilterModule']);
app.controller('bestelFormulierController', ['$scope', window.qnh.controllers.bestelformulierController]);