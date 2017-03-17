(function() {
'use-strict';

angular.module('DIapp',[])
.controller('MyDIController',DIcontroller);

DIcontroller.$inject=['$scope','$filter'];
function DIcontroller($scope,$filter) {

  $scope.name = "ravikiran";

  $scope.upper=function() {

     var upCase=$filter('uppercase');
     $scope.name=upCase($scope.name);

  };

}


})();
