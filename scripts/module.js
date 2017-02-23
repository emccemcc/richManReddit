var app = angular.module('myModule', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/view1', {
        controller: 'ctrl1',
        templateUrl: 'view1.html'
    })
    .when('/view2', {
      controller: 'ctrl2',
      templateUrl: 'view2.html'
    })

    .otherwise({ redirectTo: '/'});
$locationProvider.hashPrefix('');

});
