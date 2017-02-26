var app = angular.module('myModule').controller('DropdownCtrl', function ($scope, $log) {
  $scope.items = [
    {id: 1, name:'Reddit: Awww'}
    //, When I'm able to get the binding to work
  //  {id: 2, name:'Another Reddit'},
  //  {id: 3, name:'Something different'}
  ];



  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

  $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
});
