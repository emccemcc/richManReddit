var app = angular.module('myModule');

app.controller('ctrl2', function($scope, ourFactory){
  //redditDisplay new variable to be used only in the output view
    $scope.redditDisplay = ourFactory.returnReddit();
    console.log($scope.redditResults);
});
