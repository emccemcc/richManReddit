var app = angular.module('myModule');

app.controller('ctrl1', function($scope, $location, ourFactory){

  $scope.showReddit = function (){
      var redditPost = {}

  };

  console.log(redditPost);


  ourFactory.searchReddit(redditPost);
  console.log(ourFactory.returnReddit()); //will be return json value
  $location.path('views/view2');


});
