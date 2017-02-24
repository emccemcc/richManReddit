var app = angular.module('myModule', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/view1', {
        controller: 'ctrl1',
        templateUrl: 'views/view1.html'
    })
    .when('/view2', {
      controller: 'ctrl2',
      templateUrl: 'views/view2.html'
    })

    .otherwise({ redirectTo: '/'});
$locationProvider.hashPrefix('');

});
