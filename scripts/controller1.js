var app = angular.module('myModule').controller('DropdownCtrl');
//var choice = {{items.name}};
app.controller('ctrl1', function($scope, $location, ourFactory){

  $scope.showReddit = function (){
    //console.log(choice);


  ourFactory.searchReddit();
  console.log(ourFactory.returnReddit()); //will be return json value
  $location.path('views/view2');
};

});
