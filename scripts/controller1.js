var app = angular.module('myModule');

app.controller('ctrl1', function($scope, $location, ourFactory){

  $scope.showReddit = function (){
  //    var redditPost = {
  //        title: 0,
  //        author: 0,
  //        time: 0,
  //        thumbnail: 0

  //    };

  //};


  //console.log(redditPost);


  ourFactory.searchReddit();
  console.log(ourFactory.returnReddit()); //will be return json value
  $location.path('views/view2');
};

});
